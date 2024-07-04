import {
  createContext,
  ReactNode,
  useReducer
} from 'react'
import { ITask } from '@interfaces'
import { ActionType, todosReducer } from './reducer'

interface ContextType {
  tasks: ITask[]
  createTask(content: string): void
  deleteTask(taskId: string): void
  getDoneTasksCount(): number
  toggleTaskDone(taskId: string): void
}

interface Props {
  children: ReactNode
}

export const TodosContext = createContext({} as ContextType)

export function TodosProvider({ children }: Props) {
  const [state, dispatch] = useReducer(todosReducer, [])

  function getDoneTasksCount() {
    return state.filter(i => i.isDone).length
  }

  function createTask(content: string) {
    dispatch({ type: ActionType.CREATE_TASK, payload: { content } })
  }

  function deleteTask(taskId: string) {
    dispatch({ type: ActionType.DELETE_TASK, payload: { taskId } })
  }

  function toggleTaskDone(taskId: string) {
    dispatch({ type: ActionType.TOGGLE_TASK_DONE, payload: { taskId } })
  }

  return (
    <TodosContext.Provider
      value={{
        createTask,
        deleteTask,
        getDoneTasksCount,
        toggleTaskDone,
        tasks: state
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
