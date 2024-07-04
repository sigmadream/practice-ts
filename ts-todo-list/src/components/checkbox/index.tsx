import { Check } from 'phosphor-react'
import { CheckboxIcon, StyledCheckbox, StyledCheckboxCircle } from './styles'
import { ITask } from '@interfaces'
import { useRef, KeyboardEvent, MutableRefObject, useContext } from 'react'
import { TodosContext } from '@contexts'

interface Props {
  task: ITask
}

export function Checkbox({ task }: Props) {
  const { toggleTaskDone } = useContext(TodosContext)

  const { id, isDone, content } = task
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  function handleOnChange() {
    toggleTaskDone(id)
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return

    inputRef.current.checked = !inputRef.current.checked

    toggleTaskDone(id)
  }

  return (
    <StyledCheckbox>
      {isDone && (
        <CheckboxIcon role='check-icon'>
          <Check size={12} />
        </CheckboxIcon>
      )}
      <StyledCheckboxCircle
        id={`checkbox${id}`}
        checked={isDone}
        data-testid={`checkbox${id}`}
        onChange={handleOnChange}
        onKeyDown={handleEnterPress}
        ref={inputRef}
        type='checkbox'
      />
      <label htmlFor={`checkbox${id}`}>
        {content}
      </label>
    </StyledCheckbox>
  )
}
