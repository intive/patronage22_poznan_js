import TitleComponent from '.';

export default {
  title: 'MovieDetails/TitleComponent',
  component: TitleComponent,
};

const movieName = 'StarWars';

const templateStyles = {
  backgroundColor: '#1E1B26',
  width: '400px',
  color: 'white',
};

const Template = ({ ...args }) => (
  <div style={templateStyles}>
    <TitleComponent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: movieName,
};

export const TabletView = Template.bind({});
TabletView.args = {
  title: movieName,
};

TabletView.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const MobileView = Template.bind({});
MobileView.args = {
  title: movieName,
};
MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
