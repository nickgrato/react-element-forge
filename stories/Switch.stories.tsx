import { type Meta, StoryObj } from '@storybook/react';
import Component from '../src/components/Switch';
import '../src/styles/theme.scss';

const meta: Meta<typeof Component> = {
  title: 'Example/Switch',
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    label: 'Label',
    onChange: () => console.log('Switched'),
  },
};
