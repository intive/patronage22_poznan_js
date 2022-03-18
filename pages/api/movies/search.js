import { getMovieSearchOutcome } from 'server/services/movieDb';

/**
 * @swagger
 * /api/movies/search:
 *   get:
 *     summary: Search for movies.
 *     description: Returns a list of movies by used query
 *     parameters:
 *     - in: query
 *       name: query
 *       required: true
 *       description: Pass a text query to search.
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
export default async function handler(req, res) {
  try {
    const { query } = req.query;
    const movies = await getMovieSearchOutcome(query);
    if (!movies) {
      return res.status(404).json();
    }
    return res.status(200).json(movies.results);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
