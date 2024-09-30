import { type Meta, StoryObj } from '@storybook/react'
import Component from '../src/components/TextArea'

const meta: Meta<typeof Component> = {
  title: 'Example/TextArea',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

export const Primary: Story = {
  args: {
    label: 'First Name',
    name: 'firstName',
    info: 'Additional Input Information',
    required: true,
  },
}
