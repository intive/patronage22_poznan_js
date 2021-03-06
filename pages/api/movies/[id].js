import withAuth from 'server/withAuth';
import { getMovieById } from 'server/services/movieDb';

async function handler(req, res) {
  try {
    const { id } = req.query;
    const movie = await getMovieById(id);
    if (!movie) {
      return res.status(404).json();
    }
    return res.status(200).json(movie);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}

export default withAuth(handler);
