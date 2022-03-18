import AuthenticationPageContainer from 'components/Pages/AuthPageContainer';

export default function Login() {
  return <AuthenticationPageContainer active="sign-in" />;
}
export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: false, footer: false } },
  };
}
