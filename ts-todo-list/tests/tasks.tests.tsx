import '@testing-library/jest-dom'
import { App } from '../src/app'
import { customRender } from './test-utils'
import { screen } from '@testing-library/react'

describe('Tasks List Tests', () => {
  it('should render tasks if there are tasks', () => {
    // arrange
    customRender(<App />, {
      tasks: [
        {
          id: '0',
          content: 'Some task to be done',
          isDone: false
        }
      ]
    })

    // act
    const text = screen.getByText('Some task to be done')

    // assert
    expect(text).toBeInTheDocument()
  })
})
