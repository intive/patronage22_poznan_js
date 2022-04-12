import withAuth from 'server/withAuth';
import { getVideosByMovieId } from 'server/services/movieDb';

async function handler(req, res) {
  try {
    const { id } = req.query;
    const movies = await getVideosByMovieId(id);
    if (!movies) {
      return res.json([]);
    }
    return res.status(200).json(movies);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}

export default withAuth(handler);
