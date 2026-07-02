import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import {Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
const App = () => {
  const [user_id, setUser_id] = useState(null)
  const [user_name,setUser_name] = useState(null)
  return (
    <div>
      <Navbar user_name={user_name}/>
      <Routes>
        <Route path="/" element= <Home user_name={user_name}/>/>
      </Routes>
    </div>
  )
}

export default App