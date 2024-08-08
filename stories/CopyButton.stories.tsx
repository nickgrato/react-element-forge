import { type Meta, StoryObj } from '@storybook/react'
import Component, { CopyButtonPropsT } from '../src/components/CopyButton'
import '../src/styles/theme.scss'

const meta: Meta<typeof Component> = {
  title: 'Example/CopyButton',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

const Template = (args: CopyButtonPropsT) => {
  return (
    <div
      className={`${args.color === 'secondary' ? 'bg-neutral-0-reverse' : ''} p-30px`}
    >
      <Component {...args} />
    </div>
  )
}

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    successMessage: 'Copied!',
    value: 'Copy Worked!',
  },
}
