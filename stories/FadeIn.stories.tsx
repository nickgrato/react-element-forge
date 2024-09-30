import { type Meta, StoryObj } from '@storybook/react'
import Component from '../src/components/FadeIn'
import Button from '../src/components/Button'
import { useState } from 'react'

const meta: Meta<typeof Component> = {
  title: 'Example/FadeIn',
  component: Component,
}

export default meta

type Story = StoryObj<typeof Component>

const Template = (props: any) => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <div className="flex">
        <Button
          className="mr-12px"
          text="Fade In"
          onClick={() => {
            setVisible(true)
          }}
        />
        <Button
          text="Fade Out"
          onClick={() => {
            setVisible(false)
          }}
        />
      </div>
      <Component {...props} visible={visible}>
        <div>
          <h1 className="heading-lg">Fade me away...</h1>
          <p className="body-md">
            This is a simple example of a fade in/fade out component. Sometimes
            you need to use javascript to completely remove an element from the
            DOM. "FadeIn" is a great component for that.{' '}
          </p>
          <p className="body-md">
            It has a simple interface to explicity show if a component should be
            hidden. Feel free to add a CSS transition to the "animation" prop
            for a custom effect.
          </p>
        </div>
      </Component>
    </div>
  )
}

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    animation: 'translateY(20px)',
  },
}
