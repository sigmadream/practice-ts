import { Checkbox, DeleteTaskButton } from '@components'
import { ITask } from '@interfaces'
import { memo } from 'react'
import { StyledTask } from './styles'

interface Props {
  task: ITask
}

function Component({ task }: Props) {
  if (!task) return <></>

  return (
    <StyledTask>
      <Checkbox task={task} />

      <DeleteTaskButton taskToBeDeletedId={task.id} />
    </StyledTask>
  )
}

export const Task = memo(Component)
