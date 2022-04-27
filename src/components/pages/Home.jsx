import React from 'react'

const Home = () => {
  return (
    <section aria-label='Home page'>
      <div className='home'>
        <p className='home__firstlinetitle'>Hello! my name is</p>
        <h1 className='home__secondlinetitle'>Daniel Nova Girbau.</h1>
        <h2 className='home__thirthlinetitle'>I am a Front End Developer.</h2>
        <h3 className='home__fourthlinetitle'>I enjoy building and designing cool websites and apps.</h3>
        <div className="home__socials">
          <div className="home__socials__resume">
          <a href='./assets/Resume Daniel Nova Girbau.pdf' className='btn' download>Download CV</a>
          </div>

            <ul className="home__socials__link">
              <li>
                <a href="https://github.com/thirteendogs/" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
              </li>
              <li>
                <a className="side-line" href="https://www.linkedin.com/in/danielnovagirbau/" target="_blank" rel="noreferrer"><i
                      className="fa fa-linkedin"></i></a>
              </li>
            </ul>

        </div>
      </div>
      <div className='button__setup home__button'>
        <a className='button' href='#about-page' />
      </div>
    </section>
  )
}
export default Home
