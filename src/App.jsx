import { useState } from 'react'
import './App.css'
import AppRouter from './routing/AppRouter'
import store from './Store'
import { Provider } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Provider store={store}>
    <AppRouter></AppRouter>
    </Provider>

    </>  
  )
}

export default App
