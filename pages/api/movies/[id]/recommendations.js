// import { getSimilarMoviesById } from '../../../lib/services/movieDb';
import { getRecommendedMoviesById } from '../../../../lib/services/movieDb';

/**
 * @swagger
 * /api/movies/{id}/recommendations:
 *   get:
 *     summary: Get a list of movies recommended to a movie with given Id
 *     description: Returns a list of movies recommended to a movie with given Id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Id of the movie to get a list of recommended movies
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
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const movies = await getRecommendedMoviesById(id);
    if (!movies) {
      return res.status(404).json();
    }
    return res.status(200).json(movies);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
