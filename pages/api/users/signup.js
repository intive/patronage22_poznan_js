import mongoClient from 'server/mongoDb';
import { randomUUID } from 'crypto';
import { getPassHash } from 'server/hash';
import { validateSignUpUserEmail, validateSignUpUserPassword } from 'utils/validateFormInputs';

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

  // random avatar from 1 to 10
  const randomAvatar = Math.floor(Math.random() * 10 + 1);

  const newUser = {
    username,
    email,
    passHash,
    avatar: randomAvatar,
    id: randomUUID(),
    createdAt: new Date(),
  };

  await db.collection('users').insertOne(newUser);
  return res.status(201).json({ ...newUser, passHash: undefined });
}
