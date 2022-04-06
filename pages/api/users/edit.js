import { verifyJwtInRequest } from 'server/hash';
import { getPassHash } from 'server/hash';
import mongoClient from 'server/mongoDb';
import { validateSignUpUserName, validateSignUpUserPassword } from 'utils/validateFormInputs';

export default async function handler(req, res) {
  const method = req.method.toLowerCase();
  if (!['put'].includes(method)) {
    return res.status(405).send();
  }

  try {
    // get session data about current user
    const session = verifyJwtInRequest(req);

    // connect to database and get logged user's data by his id
    const client = await mongoClient;
    const db = client.db(process.env.MONGODB_DB);
    const query = { id: session.id };
    const user = (await db.collection('users').find(query, { limit: 1 }).toArray())[0];

    // get current username and current password from database
    const currentUsername = user.username;
    const currentPassHash = user.passHash;

    // get new username and/or new password from client side
    const { newUsername, newPassword } = req.body;
    const newPassHash = getPassHash(newPassword);

    let errorMessage = '';

    // validate new username
    if (newUsername) {
      const usernameValidationError = validateSignUpUserName(newUsername);
      if (usernameValidationError) {
        errorMessage = errorMessage.concat('New username is invalid. ');
      }
      if (currentUsername === newUsername) {
        errorMessage = errorMessage.concat('New username is the same as current username. ');
      }
    }

    // validate new password
    if (newPassword) {
      const passwordValidationError = validateSignUpUserPassword(newPassword);
      if (passwordValidationError) {
        errorMessage = errorMessage.concat('New password is invalid. ');
      }
      if (currentPassHash === newPassHash) {
        errorMessage = errorMessage.concat('New password is the same as current password. ');
      }
    }

    if (errorMessage) {
      return res.status(400).json({ error: errorMessage });
    }

    if (!errorMessage) {
      if (newUsername) {
        db.collection('users').updateOne(query, { $set: { username: newUsername } });
      }
      if (newPassword) {
        db.collection('users').updateOne(query, { $set: { passHash: newPassHash } });
      }
      return res.status(200).json({});
    }
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
