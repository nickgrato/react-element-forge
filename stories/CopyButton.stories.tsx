import { type Meta, StoryObj } from '@storybook/react';
import Component from '../src/components/CopyButton';
import '../src/styles/theme.scss';

const meta: Meta<typeof Component> = {
  title: 'Example/CopyButton',
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    successMessage: 'Copied!',
    value: 'Copy Worked!',
  },
};
