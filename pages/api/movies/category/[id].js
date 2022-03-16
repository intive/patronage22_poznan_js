import { getListOfMoviesByCategoryId } from '../../../../lib/services/movieDb';

/**
 * @swagger
 * /api/movies/category/{id}:
 *   get:
 *     summary: Get a list of movies belonging to given category.
 *     description: Returns a list of movies belonging to given category.
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Id of the category to get a list of movies belonging to given category.
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
