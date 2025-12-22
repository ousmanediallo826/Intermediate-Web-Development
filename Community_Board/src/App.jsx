import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='app'>
      <h1>Food Truck Favorites</h1>
      <div className='cards'>
        <Card image='./assets/1.jpg' location='Mexican' title='Birria-Landia'/>
        <Card location='Indian' title='Mysttik Masala' image='./assets/2.jpeg'/>
        <Card title='The Halal Guys' location='Middle Eastern' image='./assets/3.webp'/>
      </div>
    </div>
  )
}

export default App
