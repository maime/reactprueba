import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TareaContextProvider } from './component/TareaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TareaContextProvider>
      <App />
    </TareaContextProvider>
  </React.StrictMode >
)
