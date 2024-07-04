import './app.css'
import { defaultTheme } from './styles/themes/default'
import {
  CreateTask,
  Header,
  NoTasks,
  TasksList,
  TasksCounter
} from '@components'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { TodosContext } from '@contexts'
import { useContext } from 'react'

export function App() {
  const { tasks } = useContext(TodosContext)
  const isThereAnyTask = !!tasks.length

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

        <div id='app'>
          <Header />

          <main>
            <CreateTask />

            <TasksCounter />

            {isThereAnyTask ? (<TasksList />) : (<NoTasks />)}
          </main>
        </div>
    </ThemeProvider>
  )
}
