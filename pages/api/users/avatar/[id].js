import { getSession } from 'next-auth/react';
import mongoClient from 'server/mongoDb';
import avatars from 'consts/avatars';

export default async function handler(req, res) {
  const method = req.method.toLowerCase();
  if (!['put'].includes(method)) {
    return res.status(405).send();
  }

  try {
    const { id } = req.query;
    const newAvatarId = parseInt(id);

    if (Number.isInteger(newAvatarId)) {
      const session = await getSession({ req });
      if (!session?.user) {
        throw new Error('Unauthorized');
      }
      const client = await mongoClient;
      const db = client.db(process.env.MONGODB_DB);
      const query = { id: session.user.id };
      const user = await db.collection('users').findOne(query);

      if (!avatars.includes(newAvatarId)) {
        return res.status(404).json({ error: 'Cannot find avatar with given id. ' });
      } else if (newAvatarId === user.avatar) {
        return res.status(400).json({ error: 'New avatar is the same as current avatar. ' });
      } else {
        db.collection('users').updateOne(query, { $set: { avatar: newAvatarId } });
        return res.status(200).json({});
      }
    } else {
      return res.status(400).json({ error: 'Id is not an integer. ' });
    }
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
