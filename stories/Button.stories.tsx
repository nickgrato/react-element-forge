import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'
import Button, { ButtonPropsT } from '../src/components/Button'
import '../src/styles/theme.scss'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
    icon: {
      options: ['', 'star', 'arrow-left', 'arrow-right'],
      control: {
        type: 'select',
      },
    },
    customIcon: {
      control: {
        type: 'select',
      },
    },
    iconPlacedRight: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

const Template = (args: ButtonPropsT) => {
  return (
    <div
      className={`${args.color === 'secondary' ? 'bg-neutral-0-reverse' : ''} p-30px`}
    >
      <Button {...args} />
    </div>
  )
}

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    variant: 'solid',
    color: 'primary',
    label: 'Button',
    text: 'Primary Button',
  },
}
