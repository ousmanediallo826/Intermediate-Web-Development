import React from 'react'
import "./App.css"
import Card from './components/Card'
const App = () => {
  return (
    <div className='app'>
       <div className='container'>
       <h1>The Ultimate Plant Parent</h1>
       <p>How good of a plant are you? Test all of your planty knowledge here!</p>
       <h3>Number of cards:</h3>
       <div className='card'>
       <Card />
       </div>
       </div>
    </div>
  )
}

export default App
