import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { QueryClientProvider, QueryClient } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
