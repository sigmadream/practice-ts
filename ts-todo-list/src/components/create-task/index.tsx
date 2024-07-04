import { CreateTaskButton } from './create-task-button'
import { Input } from '@components'
import { useState } from 'react'
import { StyledCreateTask } from './styles'

export function CreateTask() {
  const [content, setContent] = useState('')

  return (
    <StyledCreateTask>
      <Input content={content} setContent={setContent} />

      <CreateTaskButton content={content} setContent={setContent} />
    </StyledCreateTask>
  )
}
