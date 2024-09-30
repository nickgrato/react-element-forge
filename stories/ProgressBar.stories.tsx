import { type Meta, StoryObj } from '@storybook/react'
import Component from '../src/components/ProgressBar'

const meta: Meta<typeof Component> = {
  title: 'Example/ProgressBar',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

export const Primary: Story = {
  args: {
    value: 40,
  },
}
