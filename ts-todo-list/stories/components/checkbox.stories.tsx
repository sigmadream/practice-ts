import { Checkbox } from '@components'
import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ tasks }, updateArgs] = useArgs()

    return customRender(<Checkbox task={tasks[0]} />,
      {
        toggleTaskDone(taskId: string) {
          updateArgs({ tasks: [...tasks].map(i =>
            i.id === taskId ? { ...i, isDone: !i.isDone } : i
          )})
        },
        tasks
      }
    )
  }
} satisfies Meta<typeof Checkbox>

export default meta

export const CheckedCheckbox: StoryObj = {
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

export const UncheckedCheckbox: StoryObj = {
  args: {
    tasks: [
      {
        id: '1',
        content: 'Some task that has bene done',
        isDone: true
      }
    ]
  }
}
