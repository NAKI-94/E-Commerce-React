import { useState } from 'react'
import './App.css'
import AppRouter from './routing/AppRouter'
import store from './Store'
import { Provider } from 'react-redux'
import Footer from './components/Footer/Footer'
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
