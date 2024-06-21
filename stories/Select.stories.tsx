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
    label: 'Select your option',
    name: 'option',
    info: 'Additional Input Information',
    required: true,
    options: [
      { value: '1', label: 'Jetpack' },
      { value: '2', label: 'Nun Chucks' },
      { value: '3', label: 'Hover Board' },
    ],
  },
};
