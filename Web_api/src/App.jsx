import React from 'react'
import "./App.css"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
const App = () => {
  const url = 'https://sv443.net/jokeapi/v2/joke/Any'
  const [joke, setJoke] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url)
      setJoke(response.data)

    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>
        {joke
          ? joke.type === "single"
            ? joke.joke
            : `${joke.setup} — ${joke.delivery}`
          : "Loading..."}
      </h1>
    </div>
  )
}

export default App
