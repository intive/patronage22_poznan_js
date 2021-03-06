import jwt from 'jsonwebtoken';
import mongoClient from 'server/mongoDb';
import { getPassHash } from 'server/hash';

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

  const userSanitized = { ...user, passHash: undefined, _id: undefined };

  const token = jwt.sign(userSanitized, process.env.NEXTAUTH_SECRET, { expiresIn: '30d' });

  // mobile clients are unable to decode our token (we would have to give them our secret)
  // so we will be nice and give them some basic user info
  return res.status(200).json({ ...userSanitized, token });
}
