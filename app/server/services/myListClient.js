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

  let myList = new Array();
  for (let index = 0; index < userList.items.length; index++) {
    myList.push(await getMovieById(userList.items[index]));
  }
  return myList;
}
