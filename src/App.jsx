import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './assets/particlesjsConfig.json'
import './App.css'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import About from './components/pages/About'

const App = () => {
  return (
    <>
      <Particles params={particlesConfig} className='particles' />
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
