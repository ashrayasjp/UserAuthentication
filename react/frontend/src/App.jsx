import { useState } from 'react'
import {Link} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css'

function App() {
 
  return (
    <>
     <div>
      <Link to = "/signup">Signup</Link>
      <Link to = "/login">Login</Link>
     </div>
    </>
  )
}

export default App
