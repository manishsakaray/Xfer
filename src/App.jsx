import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container">
        
        <Home/>
        {/* <Login/> */}
      </div>
    </>
  )
}

export default App
