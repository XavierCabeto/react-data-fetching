import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryCliente'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
