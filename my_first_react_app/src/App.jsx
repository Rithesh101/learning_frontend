import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) =>{
  const [hasliked, sethasliked] = useState(false);
  return ( 
    <div className='card'>
      <h2> {title} </h2>

      <button onClick = {() =>sethasliked(!hasliked)}> 
        {hasliked ? " 💥liked" : " 🐍 like"}
        </button>
    </div>
  )
}

const App = () => {
  
  return (
    <div className='card-container'>
      <Card title = "lion king" />
      <Card title = " ford vs ferrari" />
      <Card title = " the dark knight" />

    </div>
    
  )
}

export default App
