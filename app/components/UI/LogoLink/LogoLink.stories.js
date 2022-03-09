import LogoLink from '.';
import Button from 'components/UI/Button';

export default {
  title: 'UI/LogoLink',
  component: LogoLink,
};

const Template = ({ args }) => (
  <div
    style={{
      width: '50vw',
      minWidth: '300px',
      height: '100px',
      backgroundColor: '#2A2535',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      position: 'relative',
    }}
  >
    <LogoLink {...args} />
    <Button style={{ marginLeft: '2rem' }} primary>
      Test
    </Button>
  </div>
);

export const LogoWithLink = Template.bind({});
