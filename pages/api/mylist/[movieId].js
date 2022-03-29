import mongoClient from 'server/mongoDb';
import withAuth from 'server/withAuth';
async function handler(req, res) {
  const method = req.method.toLowerCase();
  if (!['put', 'delete'].includes(method)) {
    return res.status(405).send();
  }
  const { movieId } = req.query;
  const id = parseInt(movieId, 10);

  if (isNaN(id) || id < 1) {
    return res.status(400).json();
  }
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);
  const userId = req.session.id;
  const query = { user_id: userId };

  if ('put'.includes(method)) {
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
  if ('delete'.includes(method)) {
    const command = { $pull: { items: id } };
    db.collection('user_lists').updateOne(query, command);
    return res.status(200).json();
  }
}
export default withAuth(handler);
