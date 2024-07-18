import React from 'react'
import ReactDOM from 'react-dom/client'
import AccordianPage  from './components/AccordianPage'
import "./styles/reset.css"
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccordianPage 
      title="Personal Info"/>
  </React.StrictMode>,
)
