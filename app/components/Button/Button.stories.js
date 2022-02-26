import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '.';
import Spinner from 'components/UI/Spinner';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = ({ content, ...args }) => <Button {...args}>{content}</Button>;

const TemplateWithWrapper = ({ content, ...args }) => (
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
    <Button {...args}>{content}</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  content: 'Primary button',
  primary: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  content: 'Disabled Button',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  backgroundColor: 'lightgreen',
  content: 'Green Button',
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  primary: true,
  href: '/user/login',
  content: 'Button as Link',
};

export const FullWidth = TemplateWithWrapper.bind({});
FullWidth.args = {
  content: 'FullWidth button',
  fullWidth: true,
};

export const ButtonAppended = Template.bind({});
ButtonAppended.args = {
  appended: true,
  content: (
    <>
      Get started
      <FontAwesomeIcon style={{ marginLeft: '.6rem' }} icon={faChevronRight} />
    </>
  ),
};

export const Loader = TemplateWithWrapper.bind({});
Loader.args = {
  loader: true,
  content: <Spinner />,
};
