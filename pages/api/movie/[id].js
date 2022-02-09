const movies = require('/public/shared/jsons/movieMockData.json');

export default async function handler(req, res) {
  const { id } = req.query;
  const movieSearchResult = movies.find((movie) => movie.id === Number(id));
  res.status(200).json(movieSearchResult || {});
}
