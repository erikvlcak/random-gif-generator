import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import Search from './search'
import Footer from './footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <Search />
      <Footer />
    </main>
  </React.StrictMode>
)
