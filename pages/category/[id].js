import { getListOfMoviesByCategoryId } from 'server/services/movieDb';
import CategoryPage from 'components/Pages/CategoryPage';

export default function Category({ moviesData }) {
  return <CategoryPage moviesData={moviesData} />;
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const movies = await getListOfMoviesByCategoryId(id);
    return { props: { moviesData: movies ? movies.results : [] } };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
}
