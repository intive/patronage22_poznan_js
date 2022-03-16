import { getListOfPopularMovies } from '../../../lib/services/movieDb';

/**
 * @swagger
 * /api/movies/popular:
 *   get:
 *     summary: Get a list of popular movies
 *     description: Returns a list of popular movies
 *     responses:
 *       200:
 *         description: list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       404:
 *         description: list not found (shouldn't happen)
 */
export default async function handler(req, res) {
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
