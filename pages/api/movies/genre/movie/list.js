import withAuth from 'server/withAuth';
import { getListOfGenres } from 'server/services/movieDb';

async function handler(req, res) {
  try {
    const listOfGenres = await getListOfGenres(req);
    if (!listOfGenres) {
      return res.status(404).json([]);
    }
    return res.status(200).json(listOfGenres);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}

export default withAuth(handler);
