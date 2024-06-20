import { type Meta, StoryObj } from '@storybook/react';
import Component from '../src/components/RadioButton';
import '../src/styles/theme.scss';

const meta: Meta<typeof Component> = {
  title: 'Example/RadioButton',
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

const Template = (props: any) => {
  return <Component {...props} />;
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Label',
    groupName: 'group',
    value: 'value',
  },
};
