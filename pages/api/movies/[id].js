import { getMovieById } from '../../../lib/services/movieDb';

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by Id
 *     description: Returns a movie with a given Id
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Id of the movie to get
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
