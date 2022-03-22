import withAuth from 'server/withAuth';
import { getListOfRecommendedMoviesById } from 'server/services/movieDb';

async function handler(req, res) {
  try {
    const { id } = req.query;
    const movies = await getListOfRecommendedMoviesById(id);
    if (!movies) {
      return res.json([]);
    }
    return res.status(200).json(movies.results);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}

export default withAuth(handler);
