import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import Cuerpo from './components/Cuerpo/Cuerpo'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='app'>
      
     <Titulo></Titulo>
     <Cuerpo></Cuerpo>
     <Button></Button>
    </div>
  )
}

export default App
