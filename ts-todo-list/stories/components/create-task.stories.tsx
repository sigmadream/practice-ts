import { CreateTask } from '@components'
import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Create Task',
  component: CreateTask,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => customRender(<CreateTask />)
} satisfies Meta<typeof CreateTask>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
