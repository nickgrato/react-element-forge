import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'
import ActionButton from '../src/components/ActionButton'
import '../src/styles/theme.scss'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ActionButton> = {
  title: 'Example/ActionButton',
  component: ActionButton,
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
    // Note: adding a react node as an option does not work in Story book
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

type Story = StoryObj<typeof ActionButton>

export const Primary: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    label: 'Button',
    text: 'Primary Button',
  },
}
