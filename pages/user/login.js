import { LoginPage } from 'components/LoginPage';

export default function UserLogin() {
  return <LoginPage />;
}
export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: 'signUp' } }, // will be passed to the page component as props
  };
}
