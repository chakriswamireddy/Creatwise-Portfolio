import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './shared/Navbar'

import MarqueeSkill from './sections/MarqueeSkill'
import Footer from './sections/Footer'
import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />

      {/* < /> */}
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>


      <MarqueeSkill />


      <Footer />


    </>
  )
}

export default App
