import { customRender } from '../stories-utils'
import { Header } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () =>  customRender(<Header />)
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { }
