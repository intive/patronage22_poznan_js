import { ListItems } from '.';
import { NavigationData } from '.';
export default {
  title: 'Navigation/Navigation',
  component: ListItems,
};

const Template = (args) => <ListItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: NavigationData,
};

export const Column = Template.bind({});

Column.args = {
  content: NavigationData,
  flexDirection: 'column',
};
