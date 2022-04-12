import { getMyList } from 'server/services/myListClient';
import Search from 'components/Pages/Search';

export default function SearchPage() {
  return <Search />;
}

export async function getServerSideProps({ req }) {
  const myList = await getMyList(req);
  return {
    props: {
      myList,
      pageLayout: { header: true, footer: true },
    },
  };
}
