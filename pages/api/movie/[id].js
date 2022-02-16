const movies = require('../../../lib/movieMockData.json');
const errorMsg = 'failed to fetch data';

export default async function handler(req, res) {
  const { id } = req.query;
  const movieSearchResult = movies.find((movie) => movie.id === Number(id));
  movieSearchResult
    ? res.status(200).json(movieSearchResult)
    : res.status(404).json({ error: errorMsg });
}
