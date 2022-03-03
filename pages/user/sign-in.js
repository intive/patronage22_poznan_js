import AuthenticationPageContainer from 'components/Pages/AuthenticationPageContainer';

export default function UserLogin() {
  return <AuthenticationPageContainer />;
}
export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: false, footer: false, signIn: true } },
  };
}
