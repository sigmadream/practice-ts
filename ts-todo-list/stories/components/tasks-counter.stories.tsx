import { customRender } from '../stories-utils'
import { TasksCounter } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Tasks Counter',
  component: TasksCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args}) => {
    return customRender(<TasksCounter />, {
      getDoneTasksCount: () => args.doneTasksCount,
      tasks: args.tasks
    })
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const NoTasksCreated: Story = {
  args: {
    doneTasksCount: 0,
    tasks: []
  }
}

export const FewTasksDone: Story = {
  args: {
    doneTasksCount: 1,
    tasks: [
      {}, {}
    ]
  }
}

export const AllTasksDone: Story = {
  args: {
    doneTasksCount: 2,
    tasks: [
      {}, {}
    ]
  }
}
