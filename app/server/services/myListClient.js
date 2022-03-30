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

  if (Array.isArray(userList.items)) {
    const myList = await Promise.all(userList.items.map((id) => getMovieById(id)));
    const myFilteredList = myList.filter((element) => element !== null);
    return myFilteredList;
  } else {
    return [];
  }
}
