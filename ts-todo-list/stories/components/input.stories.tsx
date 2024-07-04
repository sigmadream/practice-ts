import { customRender } from '../stories-utils'
import { Input } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs, } from '@storybook/preview-api'

const meta: Meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render:() => {
    const [{ content }, updateArgs] = useArgs()

    function setContent(value: string) {
      updateArgs({ content: value })
    }

    return customRender(<Input content={content} setContent={setContent} />)
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Unfilled: Story = {
  args: {
    content: ''
  }
}

export const Filled: Story = {
  args: {
    content: 'Some task to be done'
  }
}
