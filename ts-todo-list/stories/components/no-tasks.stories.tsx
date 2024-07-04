import type { Meta, StoryObj } from '@storybook/react'
import { NoTasks } from '@components'

const meta = {
  title: 'No Tasks',
  component: NoTasks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof NoTasks>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { }
