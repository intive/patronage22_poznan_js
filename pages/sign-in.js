import AuthenticationPageContainer from 'components/Pages/AuthenticationPageContainer';

export default function Login() {
  return <AuthenticationPageContainer active="sign-in" />;
}
export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: false, footer: false } },
  };
}
