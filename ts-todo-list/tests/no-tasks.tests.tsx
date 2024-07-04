import '@testing-library/jest-dom'
import { App } from '../src/app'
import { customRender } from './test-utils'
import { screen } from '@testing-library/react'

describe('No Task Tests', () => {
  it('shouldn not render any task if there are not tasks', () => {
    // arrange
    customRender(<App />)

    // act
    const text = screen.getByText('아직 등록된 작업이 없습니다.')

    // assert
    expect(text).toBeInTheDocument()
  })
})
