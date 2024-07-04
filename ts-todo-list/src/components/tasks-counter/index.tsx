import {
  Counter,
  CreatedTasks,
  StyledTasksCounter,
  TasksDone
} from './styles'
import { TodosContext } from '@contexts'
import { useContext } from 'react'

export function TasksCounter() {
  const { getDoneTasksCount, tasks } = useContext(TodosContext)

  const totalTasksCount = tasks.length
  const tasksDoneCount = getDoneTasksCount()

  const tasksDoneText = tasksDoneCount !== totalTasksCount ?
    `${tasksDoneCount} / ${totalTasksCount}`
    : tasksDoneCount

  return (
    <StyledTasksCounter>
      <CreatedTasks data-testid='created-tasks'>
        생성된 Todo

        <Counter>
          {totalTasksCount}
        </Counter>
      </CreatedTasks>

      <TasksDone data-testid='done-tasks'>
        완료
        <Counter>
          {tasksDoneText}
        </Counter>
      </TasksDone>
    </StyledTasksCounter>
  )
}
