import { getSession } from 'next-auth/react';
import { getPassHash } from 'server/hash';
import mongoClient from 'server/mongoDb';
import { validateSignUpUserName, validateSignUpUserPassword } from 'utils/validateFormInputs';

export default async function handler(req, res) {
  const method = req.method.toLowerCase();
  if (!['put'].includes(method)) {
    return res.status(405).send();
  }

  try {
    // get new username and/or current password, new password from client side
    const { newUsername, currentPassword, newPassword } = req.body;
    if (!newUsername && !newPassword) {
      return res.status(400).json({ error: 'New username and new password are empty strings.' });
    }
    if ((currentPassword && !newPassword) || (!currentPassword && newPassword)) {
      return res
        .status(400)
        .json({ error: 'Current password and new password are both required.' });
    }

    // get logged user's session data
    const session = await getSession({ req });
    if (!session?.user) {
      throw new Error('Unauthorized');
    }

    // connect to database and get logged user's data
    const client = await mongoClient;
    const db = client.db(process.env.MONGODB_DB);
    const query = { id: session.user.id };
    const user = await db.collection('users').findOne(query);

    // validate username
    if (newUsername) {
      const currentUsernameFromDB = user.username;
      const usernameValidationError = validateSignUpUserName(newUsername);
      if (usernameValidationError) {
        return res.status(400).json({ error: 'New username is invalid.' });
      }
      if (currentUsernameFromDB === newUsername) {
        return res.status(400).json({ error: 'New username is the same as current username.' });
      }
    }

    // validate password
    if (currentPassword && newPassword) {
      const currentPassHashFromDB = user.passHash;
      const currentPassHash = getPassHash(currentPassword);
      if (currentPassHashFromDB !== currentPassHash) {
        return res.status(400).json({ error: 'Wrong password.' });
      }
      if (currentPassHashFromDB === getPassHash(newPassword)) {
        return res.status(400).json({ error: 'New password is the same as current password.' });
      }
      const passwordValidationError = validateSignUpUserPassword(newPassword);
      if (passwordValidationError) {
        return res.status(400).json({ error: 'New password is invalid.' });
      }
    }

    if (newUsername) {
      db.collection('users').updateOne(query, { $set: { username: newUsername } });
    }
    if (newPassword) {
      db.collection('users').updateOne(query, { $set: { passHash: getPassHash(newPassword) } });
    }

    return res.status(200).json({});
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
