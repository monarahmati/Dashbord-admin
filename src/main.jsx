import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvaider } from './context/app/app-context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvaider>
      <App/>
  </AppProvaider>
)
