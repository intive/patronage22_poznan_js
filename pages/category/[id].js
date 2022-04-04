import {
  getListOfGenres,
  getListOfMoviesByCategoryId,
  getListOfPopularMovies,
} from 'server/services/movieDb';
import CategoryPage from 'components/Pages/CategoryPage';

export default function Category({ moviesData, categoryName }) {
  return <CategoryPage moviesData={moviesData} categoryName={categoryName} />;
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
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
    const movies = await getListOfMoviesByCategoryId(id);
    const categoryList = await getListOfGenres();
    const categoryName = categoryList.find((category) => category.id === id);

    return {
      props: {
        categoryName,
        moviesData: movies ? movies.results : [],
      },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
}
