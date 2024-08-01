import { type Meta, StoryObj } from '@storybook/react'
import Component, {
  NotificationInterfaceT,
  NewNotificationT,
} from '../src/components/Notification'

import Button from '../src/components/Button'
import { useRef } from 'react'
import '../src/styles/theme.scss'

const meta: Meta<typeof Component> = {
  title: 'Example/Notification',
  component: Component,
  argTypes: {},
}

export default meta

type Story = StoryObj<NewNotificationT>

const Template = (args: any) => {
  const notificationRef = useRef<NotificationInterfaceT>()
  // const callback = args.callbackCta ? () => {} : undefined;

  const success: NewNotificationT = {
    ...args,
  }

  const handleClick = () => {
    console.log('notificationRef', notificationRef.current)
    notificationRef.current?.dispatchNotification(success)
  }

  return (
    <div>
      <Button
        label="notification button"
        text="Dispatch Notification"
        onClick={handleClick}
      />
      <Component ref={notificationRef} />
    </div>
  )
}

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'Title',
    description: 'Description',
    location: 'top_right',
    duration: 8000,
    type: 'success',
    pauseOnHover: true,
    autoClose: true,
    hasIcon: true,
    callbackCta: '',
    category: 'toast',
  },
}
