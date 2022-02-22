import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '.';
import Spinner from 'components/Miscellaneous/Spinner';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = ({ text, ...args }) => <Button {...args}>{text}</Button>;

const TemplateWithWrapper = ({ text, ...args }) => (
  <div
    style={{
      width: '300px',
      height: '100px',
      backgroundColor: 'lightgrey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button {...args}>{text}</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary button',
  primary: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'Disabled Button',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  backgroundColor: 'lightgreen',
  text: 'Green Button',
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  primary: true,
  href: '/user/login',
  text: 'Button as Link',
};

export const FullWidth = TemplateWithWrapper.bind({});
FullWidth.args = {
  text: 'FullWidth button',
  fullWidth: true,
};

export const ButtonAppended = Template.bind({});
ButtonAppended.args = {
  appended: true,
  text: (
    <>
      Get started
      <FontAwesomeIcon style={{ marginLeft: '.6rem' }} icon={faChevronRight} />
    </>
  ),
};

export const Loader = TemplateWithWrapper.bind({});
Loader.args = {
  loader: true,
  text: <Spinner />,
};
