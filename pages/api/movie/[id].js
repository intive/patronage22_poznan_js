const movies = require('../../../lib/movies/movieMockData.json');

/**
 * @swagger
 * /api/movie/{id}:
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
  const { id } = req.query;
  const movieSearchResult = movies.find((movie) => movie.id === Number(id));
  movieSearchResult ? res.status(200).json(movieSearchResult) : res.status(404).send();
}
