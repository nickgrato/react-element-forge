import { type Meta, StoryObj } from '@storybook/react';
import Component from '../src/components/Select';
import '../src/styles/theme.scss';

const meta: Meta<typeof Component> = {
  title: 'Example/Select',
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    label: 'Select an Option',
    name: 'option',
    info: 'Additional Input Information',
    required: true,
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};
