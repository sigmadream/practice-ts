import '@testing-library/jest-dom'
import { App } from '../src/app'
import { customRender, customRerender } from './test-utils'
import { fireEvent, screen } from '@testing-library/react'

describe('Delete Task Tests', () => {
  it('should delete a task', () => {
    // arrange
    const { rerender } = customRender(<App />, {
      tasks: [
        {
          id: '0',
          content: 'Some task to be done',
          isDone: true
        }
      ]
    })

    // act
    const createTaskButton = screen.getByTestId('delete-task-button')
    fireEvent.click(createTaskButton)

    customRerender(rerender, <App />)

    const checkbox = screen.queryByText('Some task to be done')

    // assert
    expect(checkbox).toBeNull()
  })

  it('should not delete a task if there are no tasks', () => {
    // arrange
    customRender(<App />)

    // act
    const createTaskButton = screen.queryByTestId('delete-task-button')

    // assert
    expect(createTaskButton).toBeNull()
  })
})
