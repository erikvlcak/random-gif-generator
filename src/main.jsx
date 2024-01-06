import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import MemeImage from './image'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MemeImage />
  </React.StrictMode>
)
