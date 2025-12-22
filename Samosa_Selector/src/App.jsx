import React from 'react'
import "./App.css"
import { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier ] = useState(1)
  const updateCount = () => setCount(prev => prev + multiplier);

  const buyDoubleStuffed = () => {
  if (count >= 10) {
    setMultiplier(prev => prev * 2);
    setCount(prev => prev - 10)
  }
} 
  const buyPartyPack = () => {
    if (count >= 1000) {
      setMultiplier(prev => prev * 5)
      setCount(prev => prev - 100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 100000) {
      setMultiplier(prev => prev * 10)
      setCount(prev => prev - 1000);
    }
  }
  return (
    <div className='app'>
      <div className='header'>
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img src='/samosa.png' className='samosa' onClick={updateCount} />
      </div>

      <div className='container'>
      <div className='upgrade'>
        <h3>Double Stuffed 👯‍♀️</h3>
        <p>2x per click</p>
        <button onClick={buyDoubleStuffed}>10 samosas</button>
      </div>
      <div className='upgrade'>
        <h3>Party Pack 🎉</h3>
        <p>5x per click</p>
        <button onClick={buyPartyPack}>100 samosas</button>
      </div>
      <div className='upgrade'>
        <h3>Full Feast 👩🏽‍🍳</h3>
        <p>10x per click</p>
        <button onClick={buyFullFeast}>1000 samosas</button>
      </div>
      </div>
    </div>
  )
}

export default App
