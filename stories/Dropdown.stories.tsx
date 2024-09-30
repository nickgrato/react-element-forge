import { type Meta, StoryObj } from '@storybook/react'
import Component from '../src/components/Dropdown'
import Button from '../src/components/Button'

const meta: Meta<typeof Component> = {
  title: 'Example/Dropdown',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

const CtaExample = (
  <div style={{ position: 'relative' }}>
    <Button label="cta" text="CTA" />
  </div>
)
const ContentExample = (
  <div
    style={{
      padding: '10px',
      boxShadow: '0px 2px 2px #999',
      borderRadius: '8px',
    }}
  >
    Dropdown Content
  </div>
)

export const Primary: Story = {
  args: {
    cta: CtaExample,
    content: ContentExample,
    alignment: 'left',
  },
}
