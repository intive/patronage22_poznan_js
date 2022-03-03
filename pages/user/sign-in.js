import UnLoggedPageContainer from 'components/Pages/UnloggedPageContainer';

export default function UserLogin() {
  return <UnLoggedPageContainer />;
}
export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: false, footer: false, signIn: true } },
  };
}
