import withAuth from 'server/withAuth';
import { getListOfMoviesByCategoryId } from 'server/services/movieDb';

/**
 * @swagger
 * /api/movies/category/{id}:
 *   get:
 *     summary: Get a list of movies belonging to given genre
 *     description: Returns a list of movies belonging to given genre
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Comma separated value of genre ids that you want to include in the results.
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
    const movies = await getListOfMoviesByCategoryId(id);
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
