import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import Cuerpo from './components/Cuerpo/Cuerpo'
import Button from './components/Button/Button'
import AppRouter from './routing/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <AppRouter></AppRouter>
    </>  
  )
}

export default App
