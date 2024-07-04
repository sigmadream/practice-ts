import { ChangeEvent, KeyboardEvent, useContext } from 'react'
import { StyledInput } from './styles'
import { TodosContext } from '@contexts'

interface Props {
  content: string
  setContent: (content: string) => void
}

export function Input({ content, setContent }: Props) {
  const { createTask } = useContext(TodosContext)

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (!content || e.key !== 'Enter') return

    createTask(content)
    setContent('')
  }

  return (
    <StyledInput
      data-testid='input'
      onChange={handleOnChange}
      onKeyDown={handleEnterPress}
      placeholder='새 작업 추가'
      value={content}
    />
  )
}
