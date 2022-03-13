import mongoClient from 'lib/mongodb';
import { getPassHash } from 'lib/hash';

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
