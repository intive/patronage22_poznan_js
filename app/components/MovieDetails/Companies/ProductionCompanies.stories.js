import { ProductionCompanies } from '.';

export default {
  title: 'MovieDetails/ProductionCompanies',
  component: ProductionCompanies,
};

const productionCompanies = [
  {
    id: 1,
    logo_path: '/o86DbpburjxrqAzEDhXZcyE8pDb.png',
    name: 'Lucasfilm',
    origin_country: 'US',
  },
  {
    id: 25,
    logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
    name: '20th Century Fox',
    origin_country: 'US',
  },
];

const templateStyles = {
  backgroundColor: '#1E1B26',
  width: '400px',
  color: 'white',
};

const Template = ({ ...args }) => {
  return (
    <div style={templateStyles}>
      <ProductionCompanies {...args} />
    </div>
  );
};

export const Companies = Template.bind({});
Companies.args = {
  productionCompanies: productionCompanies,
};
