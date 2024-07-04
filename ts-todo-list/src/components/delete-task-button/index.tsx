import { StyledDeleteTaskButton } from './styles'
import { TodosContext } from '@contexts'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'

interface Props {
  taskToBeDeletedId: string
}

export function DeleteTaskButton({ taskToBeDeletedId }: Props) {
  const { deleteTask } = useContext(TodosContext)

  function handleOnClick(){
    deleteTask(taskToBeDeletedId)
  }

  return (
    <StyledDeleteTaskButton data-testid='delete-task-button' aria-label='Delete task' onClick={handleOnClick}>
      <Trash size={16} weight='bold' />
    </StyledDeleteTaskButton>
  )
}
