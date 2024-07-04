import { StyledTasksList } from './styles'
import { Task } from './task'
import { TodosContext } from '@contexts'
import { useContext } from 'react'

export function TasksList() {
  const { tasks } = useContext(TodosContext)

  return (
    <StyledTasksList>
      {tasks.map(task => <Task task={task} key={task.id} />)}
    </StyledTasksList>
  )
}
