const movies = require('../../../lib/movies/movieMockData.json');
const error = { error: '404' };

export default async function handler(req, res) {
  const { id } = req.query;
  const movieSearchResult = movies.find((movie) => movie.id === Number(id));
  movieSearchResult ? res.status(200).json(movieSearchResult) : res.status(404).json(error);
}
