import StartPage from 'components/Pages/StartPage';

export default function InitialPage() {
  return <StartPage />;
}

export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: false, footer: false } },
  };
}
