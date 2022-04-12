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
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return {
        notFound: true,
      };
    }

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
    const { genres } = await getListOfGenres();
    const category = genres.find((category) => category.id === id);

    if (!category?.name) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        categoryName: category.name,
        moviesData: movies ? movies.results : [],
      },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
}
