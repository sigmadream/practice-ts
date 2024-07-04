import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { Task } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ tasks }, updateArgs] = useArgs()

    return customRender(<Task task={tasks[0]} />, {
      deleteTask(taskId: string) {
        updateArgs({ tasks: [...tasks].filter(i => i.id !== taskId) })
      },
      toggleTaskDone(taskId: string) {
        updateArgs({ tasks: [...tasks].map(i => {
          return i.id === taskId ? { ...i, isDone: !i.isDone } : i
        })})
      },
      tasks
    })
  }
} satisfies Meta<typeof Task>

export default meta

export const IncompletedTask: StoryObj = {
  args: {
    tasks: [
      {
        id: '0',
        content: 'Some task to be done',
        isDone: false
      }
    ]
  }
}

export const CompletedTask: StoryObj = {
  args: {
    tasks: [
      {
        id: '1',
        content: 'Some task that has been done',
        isDone: true
      }
    ]
  }
}
