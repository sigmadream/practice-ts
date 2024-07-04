import '@testing-library/jest-dom'
import { Checkbox } from '@components'
import { customRender, customRerender } from './test-utils'
import { fireEvent, screen } from '@testing-library/react'

describe('Checkbox Tests', () => {
  const taskDone = {
    id: '0',
    content: 'Some task to be done',
    isDone: true
  }

  const taskNotDone = {
    id: '0',
    content: 'Some task to be done',
    isDone: false
  }

  it('should show the check icon if the task is done', () => {
    // arrange
    customRender(<Checkbox task={taskDone} />, { tasks: [taskDone] })

    // act
    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeInTheDocument()
  })

  it('should not show the check icon if the task is not done', () => {
    // arrange
    customRender(<Checkbox task={taskNotDone} />, { tasks: [taskNotDone] })

    // act
    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeNull()
  })

  it('should toggle the task as done when clicking on its label', () => {
    // arrange
    const { rerender } = customRender(<Checkbox task={taskNotDone} />, { tasks: [taskNotDone] })

    // act
    const checkbox = screen.getByText('Some task to be done')

    fireEvent.click(checkbox)

    customRerender(rerender, <Checkbox task={taskDone} />, {
      tasks: [taskDone]
    })

    const checkIcon = screen.queryByRole('check-icon')
  
    // assert
    expect(checkIcon).toBeInTheDocument()
  })

  it('should toggle the task as not done when clicking on its label', () => {
    // arrange
    const { rerender } = customRender(<Checkbox task={taskDone} />, { tasks: [taskDone] })

    // act
    const checkbox = screen.getByText('Some task to be done')

    fireEvent.click(checkbox)

    customRerender(rerender, <Checkbox task={taskNotDone} />, {
      tasks: [taskNotDone]
    })

    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeNull()
  })

  it('should toggle the task as done when clicking on enter by having its checkbox focused', () => {
    // arrange
    const { rerender } = customRender(<Checkbox task={taskNotDone} />, { tasks: [taskNotDone] })

    // act
    const checkbox = screen.getByTestId('checkbox0')

    fireEvent.keyDown(checkbox, {
      key: 'Enter',
      keyCode: 13
    })

    customRerender(rerender, <Checkbox task={taskDone} />, {
      tasks: [taskDone]
    })

    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeInTheDocument()
  })

  it('should toggle the task as not done when clicking on enter by having its checkbox focused', () => {
    // arrange
    const { rerender } = customRender(<Checkbox task={taskDone} />, { tasks: [taskDone] })

    // act
    const checkbox = screen.getByTestId('checkbox0')

    fireEvent.keyDown(checkbox, {
      key: 'Enter',
      keyCode: 13
    })

    customRerender(rerender, <Checkbox task={taskNotDone} />, {
      tasks: [taskNotDone]
    })

    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeNull()
  })
})
