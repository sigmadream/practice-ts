import '@testing-library/jest-dom'
import { customRender, customRerender } from './test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { Input } from '@components'

describe('Input Tests', () => {
  let content = ''

  it('should clean the input after creating a task', () => {
    // arrange
    const { rerender } = customRender(
      <Input content={content} setContent={(content: string) => {}} />,
      {
        createTask(newContent: string) {
          content = newContent
        }
      }
    )

    // act
    const input = screen.getByTestId('input')

    fireEvent.change(input, {
      target: {
        value: 'Some task to be done'
      }
    })

    fireEvent.keyDown(input, {
      key: 'Enter',
      keyCode: 13
    })

    rerender(<Input content={content} setContent={(content: string) => {}} />)

    customRerender(rerender, <Input content={content} setContent={(content: string) => {}} />)

    const checkbox = screen.queryByText('Some task to be done')

    // assert
    expect(checkbox).toBeNull()
  })
})
