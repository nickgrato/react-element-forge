import { type Meta, StoryObj } from '@storybook/react'
import '../src/styles/theme.scss'
import Typography from '../src/components/Typography/Typography'

const meta: Meta<typeof Typography> = {
  title: 'Example/Typography',
  component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>

export const Primary: Story = {
  args: {},
}
