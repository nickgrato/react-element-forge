import { type Meta, StoryObj } from '@storybook/react';
import Component from '../src/components/ToolTip';
import '../src/styles/theme.scss';

const meta: Meta<typeof Component> = {
  title: 'Example/ToolTip',
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    children: <div className="body-md">Hover me</div>,
    description: 'I can be on top, left, right, or bottom',
    location: 'right',
    width: '150px',
  },
};
