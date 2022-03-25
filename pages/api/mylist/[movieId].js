import mongoClient from 'server/mongoDb';
import withAuth from 'server/withAuth';

async function handler(req, res) {
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  const { movieId } = req.query;
  const userId = req.session.id;
  const query = { _id: userId };

  // different approach with implementation of Set would be nice
  if (req.method == 'PUT' && movieId > 0) {
    const command = { $addToSet: { items: movieId } };
    const options = { upsert: true };
    const userList = await db.collection('user_lists').findOne({ _id: req.session.id });
    const numberOfMoviesOnList = userList?.items.length;
    if (!userList && movieId.length > 0 && movieId.length < 50) {
      db.collection('user_lists').updateOne(query, command, options);
      return res.status(201).json({});
    } else if (movieId.length > 0 && movieId.length < 50 && numberOfMoviesOnList < 5) {
      db.collection('user_lists').updateOne(query, command, options);
      return res.status(201).json({});
    } else {
      return res.status(200).json({});
    }
  }

  // different approach with implementation of Array.filter would be nice
  if (req.method == 'DELETE') {
    const command = { $pull: { items: movieId } };
    db.collection('user_lists').updateOne(query, command);
    return res.status(200).json({});
  } else {
    return res.status(200).json({});
  }
}
export default withAuth(handler);
