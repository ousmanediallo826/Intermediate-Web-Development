import React from 'react'
import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')
  const names = ['Ousmane', 'Anchita', 'Twaambo']
  function handleClick() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  setUsername(randomName);
}
  
  return (
    <div>
      <h1>{username}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
