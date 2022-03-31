import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MessageForUser, SearchWrapper } from './Search.styles';
import MovieGrid from 'components/UI/MovieGrid';
import { fetchWrapper } from 'utils/fetchWrapper';

export default function Search() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [messageForUser, setMessageForUser] = useState('');

  const router = useRouter();
  const query = router.query.query;
  const queryValidationPattern = /^[a-z0-9!&'"?\-\s]{1,100}$/i;

  useEffect(() => {
    if (query) {
      const sanitaizedQuery = sanitaize(query);
      if (sanitaizedQuery) {
        setIsFetching(true);
        getMovies(sanitaizedQuery);
      } else {
        setMessageForUser("Are you sure you're looking for movie title?");
      }
    } else {
      setMessageForUser("Use search bar to find movie you're interested in.");
    }
  }, [query]);

  const getMovies = async (query) => {
    const response = await fetchWrapper.get(`api/movies/search?query=${query}`);
    handleServerResponse(response, query);
  };

  const handleServerResponse = ({ error, data }, query) => {
    if (error) {
      setMessageForUser(error);
      setListOfMovies([]);
    }
    if (data) {
      //TODO: delete the code line below after backend fix
      const filteredMovies = data.filter((movie) => movie !== null);

      if (filteredMovies.length < 1) {
        setMessageForUser(`Your search for "${query}" did not have any matches.`);
      }
      setListOfMovies(filteredMovies);
    }
    setIsFetching(false);
  };

  const sanitaize = (query) => {
    if (!query) return null;
    const decodedQuery = decodeURI(query);
    const isQueryValid = queryValidationPattern.test(decodedQuery);
    return isQueryValid ? decodedQuery.trim().replace(/\s/g, '+') : null;
  };

  return (
    <SearchWrapper>
      {listOfMovies.length < 1 && !isFetching ? (
        <MessageForUser>{messageForUser}</MessageForUser>
      ) : (
        <MovieGrid listOfMovies={listOfMovies} />
      )}
    </SearchWrapper>
  );
}
