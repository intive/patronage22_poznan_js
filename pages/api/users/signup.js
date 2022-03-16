import mongoClient from 'lib/mongoDb';
import { randomUUID } from 'crypto';
import { getPassHash } from 'lib/hash';
import { validateSignUpUserEmail, validateSignUpUserPassword } from 'utils/validateFormInputs';

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary:  Register new user account.
 *     description: Saves new user in DB.
 *     parameters:
 *     - in: body
 *       name: username
 *       required: true
 *       description: username
 *     - in: body
 *       name: password
 *       required: true
 *       description: password
 *     - in: body
 *       name: email
 *       required: true
 *       description: email
 *     responses:
 *       200:
 *         description: "new user object (refer to api/users/signin schema)"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: "error - bad request: missing required fields or invalid values"
 *       409:
 *         description: "error - user with this email already exists"
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(404).send();
  }

  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  const { username, password, email } = req.body;

  if (!(username && password && email)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // validation
  if (validateSignUpUserEmail(email) || validateSignUpUserPassword(password)) {
    return res.status(400).json({ error: 'Invalid values for required fields.' });
  }

  const userByEmail = await db.collection('users').countDocuments({ email }, { limit: 1 });

  if (userByEmail > 0) {
    return res.status(409).json({ error: 'Email already in use' });
  }
  const passHash = getPassHash(password);

  const newUser = {
    username,
    email,
    passHash,
    id: randomUUID(),
    createdAt: new Date(),
  };

  await db.collection('users').insertOne(newUser);
  return res.status(200).json({ ...newUser, passHash: undefined });
}
