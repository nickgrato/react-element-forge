import { type Meta, StoryObj } from '@storybook/react'
import Component from '../src/components/Modal'
import { ModalPropsT } from '../src/components/Modal'

const meta: Meta<typeof Component> = {
  title: 'Example/Modal',
  component: Component,
}

export default meta

type Story = StoryObj<ModalPropsT>

const ModalContent = (
  <div>
    <h1 className="body-md-bold">Modal Content</h1>
    <p className="body-md">Some content</p>
  </div>
)

export const Primary: Story = {
  args: {
    children: ModalContent,
    isVisible: true,
  },
}
