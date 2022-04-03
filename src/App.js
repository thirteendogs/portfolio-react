import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './assets/particlesjsConfig.json'
import './App.css'

const App = () => {
  return (
  <>
    <Particles params={particlesConfig}/>
    <h1>hola</h1>
  </>
  )
}

export default App
