import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import YAML from 'yamljs';

const ApiDoc = ({ spec }) => {
  return <SwaggerUI spec={spec} />;
};

export const getStaticProps = async () => {
  const spec = YAML.load(process.cwd() + '/docs/apiDocs.yml');
  return {
    props: {
      spec,
      pageLayout: {
        header: false,
        footer: false,
      },
    },
  };
};

export default ApiDoc;
