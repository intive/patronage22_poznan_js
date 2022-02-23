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
    rotation: {
      defaultValue: 0,
      control: {
        type: 'range',
        min: 0,
        max: 270,
        step: 90,
      },
    },
  },
};
const ShowcaseContainer = ({ children, style }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: '2rem',
      ...style,
    }}
  >
    {children}
  </div>
);
const ShowcaseRow = ({ children, style }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

const ShowcaseBckg = ({ children, style }) => (
  <div
    style={{
      backgroundColor: 'transparent',
      padding: '10px',
      marginRight: '5px',
      verticalAlign: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);
const ShowcaseBlackBckg = ({ children, style }) => (
  <div
    style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      marginRight: '5px',
      ...style,
    }}
  >
    {children}
  </div>
);
const ShowcaseWhiteBckg = ({ children, style }) => (
  <div
    style={{
      backgroundColor: 'white',
      color: 'black',
      padding: '10px',
      marginRight: '5px',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Showcase = (args) => (
  <ShowcaseContainer>
    <ShowcaseRow>
      <ShowcaseBlackBckg>
        <Icon {...args} />
      </ShowcaseBlackBckg>
      <ShowcaseWhiteBckg>
        <Icon {...args} />
      </ShowcaseWhiteBckg>
      <ShowcaseBckg>
        In <Icon {...args} /> text
      </ShowcaseBckg>
    </ShowcaseRow>
    <ShowcaseRow>
      <ShowcaseBckg>
        1x <Icon {...args} size="1x" />
      </ShowcaseBckg>
      <ShowcaseBckg>
        2x <Icon {...args} size="2x" />
      </ShowcaseBckg>
      <ShowcaseBckg>
        4x <Icon {...args} size="4x" />
      </ShowcaseBckg>
    </ShowcaseRow>
  </ShowcaseContainer>
);

// const templateBckg = '';
// const templateColor = '';

const TemplateContainer = ({ children, style }) => (
  <div
    style={{
      padding: '20px',
      fontSize: '4rem',
      ...style,
    }}
  >
    {children}
  </div>
);

const Template = ({ backgroundColor, color, ...args }) => (
  <TemplateContainer style={{ backgroundColor, color }}>
    <Icon {...args} />
  </TemplateContainer>
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
  backgroundColor: 'white',
  color: 'black',
  spin: true,
};
export const Pulse = Template.bind({});

Pulse.args = {
  backgroundColor: 'white',
  color: 'black',
  pulse: true,
};
