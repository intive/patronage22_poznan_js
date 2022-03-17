import withAuth from 'lib/withAuth';
import { getListOfRecommendedMoviesById } from '../../../../lib/services/movieDb';

/**
 * @swagger
 * /api/movies/{id}/recommendations:
 *   get:
 *     summary: Get a list of recommended movies for a movie.
 *     description: Returns a list of recommended movies for a movie.
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Id of the movie to get a list of recommended movies for a movie.
 *     responses:
 *       200:
 *         description: movie object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: movie not found
 */
async function handler(req, res) {
  try {
    const { id } = req.query;
    const movies = await getListOfRecommendedMoviesById(id);
    if (!movies) {
      return res.status(404).json();
    }
    return res.status(200).json(movies.results);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}

export default withAuth(handler);
