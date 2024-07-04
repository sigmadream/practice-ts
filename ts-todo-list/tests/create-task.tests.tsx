import '@testing-library/jest-dom'
import { App } from '../src/app'
import { customRender, customRerender } from './test-utils'
import { fireEvent, screen } from '@testing-library/react'

describe('Create Task Tests', () => {
  it('should create a task', () => {
    // arrange
    const { rerender } = customRender(<App />)

    // act
    const input = screen.getByTestId('input')
    fireEvent.change(input, {
      target: {
        value: 'Some task to be done'
      }
    })

    const createTaskButton = screen.getByTestId('create-task-button')
    fireEvent.click(createTaskButton)

    customRerender(rerender, <App />, {
      tasks: [
        {
          id: '0',
          content: 'Some task to be done',
          isDone: false
        }
      ]
    })

    const checkbox = screen.getByText('Some task to be done')

    // assert
    expect(checkbox).toBeInTheDocument()
  })

  it('should not create a task if the description is invalid', () => {
    // arrange
    const { rerender } = customRender(<App />)

    // act
    const createTaskButton = screen.getByTestId('create-task-button')
    fireEvent.click(createTaskButton)

    customRerender(rerender, <App />)

    const checkbox = screen.queryByText('Some task to be done')

    // assert
    expect(checkbox).toBeNull()
  })
})
