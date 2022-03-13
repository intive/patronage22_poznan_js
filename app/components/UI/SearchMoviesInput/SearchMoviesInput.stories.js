import SearchMoviesInput from '.';

export default {
  title: 'UI/SearchMoviesInput',
  component: SearchMoviesInput,
};

const templateStyles = {
  backgroundColor: '#2A2535',
  width: '300px',
  height: '100px',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const Template = ({ ...args }) => (
  <div style={templateStyles}>
    <SearchMoviesInput {...args} />
  </div>
);

export const Default = Template.bind({});
