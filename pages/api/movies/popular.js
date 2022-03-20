import withAuth from 'server/withAuth';
import { getListOfPopularMovies } from 'server/services/movieDb';

async function handler(req, res) {
  try {
    const movies = await getListOfPopularMovies(req);
    if (!movies) {
      return res.status(404).json([]);
    }
    return res.status(200).json(movies.results);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}

export default withAuth(handler);
