import mongoClient from 'server/mongoDb';
import withAuth from 'server/withAuth';
async function handler(req, res) {
  const { movieId } = req.query;
  const id = parseInt(movieId, 10);

  if (Number.isInteger(id) && id > 0) {
    const client = await mongoClient;
    const db = client.db(process.env.MONGODB_DB);
    const userId = req.session.id;
    const query = { user_id: userId };

    if (req.method === 'PUT') {
      const command = { $addToSet: { items: id } };
      const options = { upsert: true };
      const userList = await db.collection('user_lists').findOne(query);
      const numberOfMoviesOnList = userList?.items.length;
      if (!userList || numberOfMoviesOnList < 50) {
        db.collection('user_lists').updateOne(query, command, options);
        return res.status(200).json();
      } else {
        return res.status(200).json();
      }
    }
    if (req.method === 'DELETE') {
      const command = { $pull: { items: id } };
      db.collection('user_lists').updateOne(query, command);
      return res.status(200).json();
    }
  } else {
    return res.status(400).json();
  }
}
export default withAuth(handler);
