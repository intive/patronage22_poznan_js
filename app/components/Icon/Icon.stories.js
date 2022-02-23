import Icon from '.';

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    size: {
      description: 'Sets size in relation to current font-size. ',
    },
    opacity: {
      defaultValue: 1,
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
};
const Bckg = ({ children, style }) => (
  <div style={{ 'background-color': 'transparent', padding: '10px', marginRight: '5px', ...style }}>
    {children}
  </div>
);

export const Showcase = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Bckg style={{ backgroundColor: 'black', color: 'white' }}>
        <Icon {...args} />
      </Bckg>
      <Bckg style={{ backgroundColor: 'white', color: 'black' }}>
        <Icon {...args} />
      </Bckg>
      <Bckg style={{ fontSize: '2rem' }}>
        In <Icon {...args} /> text
      </Bckg>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Bckg>
        1x <Icon {...args} size="1x" />
      </Bckg>
      <Bckg>
        2x <Icon {...args} size="2x" />
      </Bckg>
      <Bckg>
        4x <Icon {...args} size="4x" />
      </Bckg>
    </div>
  </div>
);

const Template = ({ backgroundColor = 'transparent', color = 'white', ...args }) => (
  <div style={{ backgroundColor, color, padding: '20px', fontSize: '3rem' }}>
    <Icon {...args} />
  </div>
);

export const WhiteBackground = Template.bind({});

WhiteBackground.args = {
  backgroundColor: 'white',
  color: 'black',
};

export const BlackBackground = Template.bind({});

BlackBackground.args = {
  backgroundColor: 'black',
  color: 'white',
};

export const Spin = Template.bind({});

Spin.args = {
  spin: true,
};
export const Pulse = Template.bind({});

Pulse.args = {
  pulse: true,
};
