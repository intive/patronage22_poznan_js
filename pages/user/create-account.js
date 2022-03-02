import CreateAccount from 'components/Pages/CreateAccount';

const CreateAccountPage = () => <CreateAccount></CreateAccount>;

export async function getServerSideProps() {
  return {
    props: { pageLayout: { header: 'signIn' } }, // will be passed to the page component as props
  };
}

export default CreateAccountPage;
