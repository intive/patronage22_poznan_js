import { getListOfGenres } from '../../../../../lib/services/movieDb';

/**
 * @swagger
 * /api/movies/genre/movie/list:
 *   get:
 *     summary: Get the list of official genres for movies
 *     description: Returns the list of official genres for movies
 *     responses:
 *       200:
 *         description: list of official genres for movies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: list not found (shouldn't happen)
 */
export default async function handler(req, res) {
  try {
    const listOfGenres = await getListOfGenres(req);
    if (!listOfGenres) {
      return res.status(404).json([]);
    }
    return res.status(200).json(listOfGenres);
  } catch (e) {
    const message = e.response ? await e.response.text() : e.message;
    return res.status(400).json(message);
  }
}
