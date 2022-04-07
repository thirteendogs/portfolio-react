import React from 'react'

const Home = () => {
  return (
    <section aria-label='Home page'>
      <div className='home'>
        <p className='home__firstlinetitle'>Hello! my name is</p>
        <h1 className='home__secondlinetitle'>Daniel Nova Girbau.</h1>
        <h2 className='home__thirthlinetitle'>I am a Front End Developer.</h2>
        <h3 className='home__fourthlinetitle'>I enjoy building and designing cool websites and apps.</h3>
        <a href='./assets/Resume Daniel Nova Girbau.pdf' className='btn' download>Download CV</a>
      </div>
      <div className='button__setup'>
        <a className='button' href='#about-page' />
      </div>
    </section>
  )
}
export default Home
