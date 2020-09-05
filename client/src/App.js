import React from 'react'
import logo from './logo.svg'
import './App.css'
import Ping from './Ping'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Deploy React + Go to Heroku using Docker</p>
        <Ping />
      </header>
    </div>
  )
}

export default App
