import AuthenticationPageContainer from 'components/Pages/AuthenticationPageContainer';

export default function Register() {
  return <AuthenticationPageContainer active="sign-up" />;
}
export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: false, footer: false } },
  };
}
