import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { TasksList } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta: Meta = {
  title: 'Tasks List',
  component: TasksList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ tasks }, updateArgs] = useArgs()

    return customRender(<TasksList />, {
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
}

export default meta
type Story = StoryObj<typeof meta>

export const EmptyList: Story = {
  args: {
    tasks: []
  }
}

export const FilledList: Story = {
  args: {
    tasks: [
      {
        id: '0',
        content: 'Some task to be done',
        isDone: false,
      },
      {
        id: '1',
        content: 'Some task that has been done',
        isDone: true,
      }
    ]
  }
}
