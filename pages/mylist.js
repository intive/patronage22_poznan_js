import { getMyList } from 'server/services/myListClient';
import MyListPage from 'components/Pages/MyListPage';

export default function MyList({ moviesData }) {
  return <MyListPage moviesData={moviesData} />;
}

export async function getServerSideProps({ req }) {
  try {
    const myList = await getMyList(req);

    return {
      props: {
        moviesData: myList ? myList : [],
      },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
}
