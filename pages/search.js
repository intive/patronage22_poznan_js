import Search from 'components/Pages/Search';

export default function SearchPage() {
  return <Search />;
}

export async function getServerSideProps() {
  return {
    props: {
      pageLayout: { header: true, footer: true },
    },
  };
}
