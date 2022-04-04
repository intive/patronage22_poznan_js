import {
  getListOfGenres,
  getListOfMoviesByCategoryId,
  getListOfPopularMovies,
} from 'server/services/movieDb';
import CategoryPage from 'components/Pages/CategoryPage';

export default function Category({ moviesData, categoryList, categoryName }) {
  return (
    <CategoryPage moviesData={moviesData} categoryList={categoryList} categoryName={categoryName} />
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const movies = await getListOfMoviesByCategoryId(id);
    if (id === 1) {
      const popularMovies = await getListOfPopularMovies();
      const categoryName = 'Popular';
      return {
        props: {
          categoryName,
          moviesData: popularMovies ? popularMovies.results : [],
        },
      };
    }

    const categoryList = await getListOfGenres();
    if (categoryList.find((category) => category.id === id)) {
      const categoryName = categoryList.name;
      return categoryName;
    }
    // this above makes moviesData to be undefined :(

    return { props: { categoryList, moviesData: movies ? movies.results : [] } };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
}
