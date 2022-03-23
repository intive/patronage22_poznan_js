import mongoClient from 'server/mongoDb';
// import { randomUUID } from 'crypto';
// import { getPassHash } from 'server/hash';
// import { validateSignUpUserEmail, validateSignUpUserPassword } from 'utils/validateFormInputs';

export default async function handler(req, res) {
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  const { movieId } = req.query;

  if (req.method == 'GET') {
    // TODO zwraca całą listę
    db.collection('user_lists').findOne({ user_id: req.session.id });
  }
  if (req.method == 'PUT') {
    // TODO dodaje film o danym ID do listy / tu ma być insert document z opcją upsert
    db.user_lists.insertOne({
      user_id: req.session.id,
      items: [movieId],
    });
  }
  if (req.method == 'DELETE') {
    // TODO usuwa film o danym ID z listy
    db.collection('user_lists').deleteOne({ items: [movieId] });
  }

  const { username, password, email } = req.body;

  if (!(username && password && email)) {
    return res.status(400).json({ error: 'Missing required fields' });
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
  return res.status(201).json({ ...newUser, passHash: undefined, _id: undefined });
}
