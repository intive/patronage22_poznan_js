import withAuth from 'server/withAuth';
import { getListOfRecommendedMoviesById } from 'server/services/movieDb';

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
 *         description: list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       404:
 *         description: movies not found
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
