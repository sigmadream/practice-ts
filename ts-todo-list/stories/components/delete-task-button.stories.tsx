import { customRender } from '../stories-utils'
import { DeleteTaskButton } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Delete Task Button',
  component: DeleteTaskButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args}) => {
    return customRender(<DeleteTaskButton taskToBeDeletedId={args.taskToBeDeletedId} />)
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    taskToBeDeletedId: 0
  }
}
