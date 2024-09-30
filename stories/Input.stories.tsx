import { type Meta, StoryObj } from '@storybook/react'
import Component from '../src/components/Input'

const meta: Meta<typeof Component> = {
  title: 'Example/Input',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

export const Primary: Story = {
  args: {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    info: 'Additional Input Information',
    required: true,
    autoComplete: 'off',
  },
}
