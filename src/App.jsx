import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './assets/particlesjsConfig.json'
import './App.css'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'

const App = () => {
  return (
    <>
      <Intro />
      <Particles params={particlesConfig} className='particles' />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
