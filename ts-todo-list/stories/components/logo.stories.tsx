import { Logo } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
