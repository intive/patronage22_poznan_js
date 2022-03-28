import mongoClient from 'server/mongoDb';
import { getMovieById } from './movieDb';

/**
 * Get user's movie list
 *
 * @export
 * @return {Promise<Object|null>} list of movies
 */
export async function getMyList(req) {
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);
  const userList = await db.collection('user_lists').findOne({ user_id: req.session.id });
  return userList?.items;
}

export async function updateMyList(req) {
  const client = await mongoClient;
  const db = client.db(process.env.MONGODB_DB);

  const userId = req.session.id;
  const query = { user_id: userId };

  const { movieId } = req.query;
  const movie = await getMovieById(movieId);

  if (movie !== null) {
    if (req.method == 'PUT') {
      const command = { $addToSet: { items: movie } };
      const options = { upsert: true };
      db.collection('user_lists').updateOne(query, command, options);
      return movie;
    }
    if (req.method == 'DELETE') {
      const command = { $pull: { items: movie } };
      db.collection('user_lists').updateOne(query, command);
      return movie;
    }
  }
}
