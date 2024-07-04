import { CreateTaskButton } from '@components'
import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Create Task Button',
  component: CreateTaskButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args}) => {
    return customRender(<CreateTaskButton content={args.content} setContent={args.setContent} />)
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Disabled: Story = {
  args: {
    content: '',
    setContent(content: string) {}
  }
}

export const Enabled: Story = {
  args: {
    content: 'Some task to be done',
    setContent(content: string) {}
  }
}
