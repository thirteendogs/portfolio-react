import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './assets/particlesjsConfig.json'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Particles params={particlesConfig} className='particles' />
      <Router>
        <Routes>
          <Route
            path='/' element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
