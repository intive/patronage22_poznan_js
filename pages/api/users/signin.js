import mongoClient from 'lib/mongoDb';
import { getPassHash } from 'lib/hash';

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     summary:  "Sign in with an existing user account."
 *     description: "Sign in with an existing user account."
 *     parameters:
 *     - in: body
 *       name: email
 *       required: true
 *       description: email
 *     - in: body
 *       name: password
 *       required: true
 *       description: password
 *     responses:
 *       200:
 *         description: "user object"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 username:
 *                   type: string
 *                 id:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 avatar:
 *                   type: number
 *               example:
 *                 username: "John"
 *                 email: "john@test.com"
 *                 id: "123"
 *                 createdAt: "2022-03-14T01:28:33.957Z"
 *                 avatar: 7
 *       400:
 *         description: "error - bad request: missing required fields"
 *       401:
 *         description: "error - bad request: invalid credentials"
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(404).send();
  }

  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const user = (await db.collection('users').find({ email }, { limit: 1 }).toArray())[0];

  const passHash = getPassHash(password);

  if (!user || user.passHash !== passHash) {
    return res.status(401).json();
  }

  return res.status(200).json({ ...user, passHash: undefined, _id: undefined });
}
