import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './assets/particlesjsConfig.json'
import './App.css'
import Navbar from './components/pages/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Particles params={particlesConfig} className='particles' />
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
