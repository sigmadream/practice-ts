import { ITask } from '@interfaces'
import { ReactNode } from 'react'
import { TodosContext } from '@contexts'

interface CustomValueProps {
  tasks?: ITask[]
  createTask?(content: string): void
  deleteTask?(taskId: string): void
  getDoneTasksCount?(): number
  toggleTaskDone?(taskId: string): void
}

const defaultValue = {
  createTask: (content: string) => {},
  deleteTask: (taskId: string) => {},
  getDoneTasksCount: () => 0,
  toggleTaskDone: (taskId: string) => {},
  tasks: [],
}

export function customRender(children: ReactNode, customValue = {} as CustomValueProps) {
	return (
		<TodosContext.Provider
			value={{
				...defaultValue,
				...customValue
			}}
		>
			{children}
		</TodosContext.Provider>
	)
}
