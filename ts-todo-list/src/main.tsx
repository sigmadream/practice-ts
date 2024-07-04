import React from 'react'
import { App } from './app'
import ReactDOM from 'react-dom/client'
import { TodosProvider } from '@contexts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <TodosProvider>
        <App />
      </TodosProvider>
    </React.StrictMode>,
  )
