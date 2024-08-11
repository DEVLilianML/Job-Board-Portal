import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
