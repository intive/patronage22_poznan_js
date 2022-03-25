import mongoClient from 'server/mongoDb';
import withAuth from 'server/withAuth';

async function handler(req, res) {
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method == 'GET') {
    const list = await db.collection('user_lists').findOne({ _id: req.session.id });
    if (!list) {
      return res.status(200).json([]);
    }
    return res.status(200).json(list?.items);
  }
}
export default withAuth(handler);
