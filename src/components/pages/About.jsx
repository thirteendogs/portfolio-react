import React from 'react'
import Photo from '../../assets/img/Screenshot_2_.jpg'

const About = () => {
  return (
    <section id='about-page' className='about' aria-label='About page'>
        <h1 className='about__title'>A little bit of me</h1>
        <div className="about__container">
        <div className='about__text'>
        <p className='about__paragraph'>I am Dani and I am from Spain. </p>
        <p className='about__paragraph'>I like to dig in and do my research on how things are made, especially websites and apps.</p>
        <p className='about__paragraph'>I got into programming by coincidence. While I was happily working in a grocery store, my brother sign me up for an exam to join a programming school. I passed the exam, and since I started school I couldn&apos;t stop looking for how things were made.
        </p>
        <p className='about__paragraph'>After I finished my studies and did my practices at
          <a className='about__company'> Everis</a>, I got hired in <a className='about__company' href=''>Indra </a>
          where I am
          currently working.
        </p>
      </div>
      <picture className='about__photo'>
        <img src={Photo} alt='Photo of me, Daniel Nova Girbau' />
      </picture>
      </div>
    </section>
  )
}

export default About
