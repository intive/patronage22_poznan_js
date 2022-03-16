import fetch from 'node-fetch';
import { getSession } from 'next-auth/react';

// wrapper class for fetch HTTP errors
class HTTPResponseError extends Error {
  constructor(response, ...args) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
    this.response = response;
  }
}

/**
 * The Movie Database API Client
 *
 * @param {string} url the TMDB endpoint you want to talk to
 * @param {string} [method='GET'] request method
 * @param {Object} [body] request body
 * @return {Promise<Object|null>} response body
 * @throws {HTTPResponseError}
 */
const movieDbClient = async (url, method = 'GET', body) => {
  const token = process.env.MOVIEDB_API_KEY;
  const baseUrl = 'https://api.themoviedb.org/3';
  const wholeUrl = `${baseUrl}/${url}?api_key=${token}&language=en-US`;
  const options = { method };
  if (method === 'POST') {
    options.headers = { 'Content-Type': 'application/json' };
  }
  if (typeof body === 'object' && Object.keys(body).length) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(wholeUrl, { ...options });

  if (!res.ok) {
    if (res.status === 404) {
      return null;
    }
    // errors 400, 401, 500 etc.
    throw new HTTPResponseError(res);
  }

  const data = await res.json();

  if (Array.isArray(data.results)) {
    data.results = data.results.map((movie) => {
      movie.images = {};
      if (movie.poster_path) {
        movie.images.poster = getFullImageURLs(movie.poster_path);
      }
      if (movie.backdrop_path) {
        movie.images.backdrop = getFullImageURLs(data.poster_path);
      }
      return movie;
    });
  } else {
    data.images = {};
    if (data.poster_path) {
      data.images.poster = getFullImageURLs(data.poster_path);
    }
    if (data.backdrop_path) {
      data.images.backdrop = getFullImageURLs(data.backdrop_path);
    }
  }
  return data;
};

export function getFullImageURLs(imgUrl) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/';

  return {
    xxs: `${baseImgUrl}w92${imgUrl}`,
    xs: `${baseImgUrl}w154${imgUrl}`,
    s: `${baseImgUrl}w185${imgUrl}`,
    m: `${baseImgUrl}w342${imgUrl}`,
    l: `${baseImgUrl}w500${imgUrl}`,
    xl: `${baseImgUrl}w780${imgUrl}`,
    original: `${baseImgUrl}original${imgUrl}`,
  };
}

/**
 * Get a movie by Id
 *
 * @export
 * @param {string|number} id Id of the movie to get
 * @return {Promise<Object|null>}  movie object
 */
export async function getMovieById(id) {
  return movieDbClient(`movie/${id}`);
}

/**
 * Get a list of popular movies
 *
 * @export
 * @return {Promise<Object|null>} list of movies
 */
export async function getListOfPopularMovies(req) {
  const session = await getSession({ req });
  if (!session) {
    return null;
  }
  return movieDbClient('movie/popular');
}

/**
 * Get the list of official genres for movies
 *
 * @export
 * @return {Promise<Object|null>} list of official genres for movies
 */
export async function getListOfGenres() {
  return movieDbClient('genre/movie/list');
}

/**
 * Get a list of similar movies
 *
 * @export
 * @param {string|number} id Id of the movie to get a list of similar movies
 * @return {Promise<Object|null>}  movie object
 */
export async function getListOfSimilarMoviesById(id) {
  return movieDbClient(`movie/${id}/similar`);
}

/**
 * Get a list of recommended movies for a movie
 *
 * @export
 * @param {string|number} id Id of the movie to get a list of recommended movies
 * @return {Promise<Object|null>}  movie object
 */
export async function getListOfRecommendedMoviesById(id) {
  return movieDbClient(`movie/${id}/recommendations`);
}
