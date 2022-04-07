import React, { useState } from 'react'
import { FaWolfPackBattalion, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleNavToggle = () => {
    setClick(!click)
    console.log('click')
  }

  let resizeTimer
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper')
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper')
    }, 400)
  })

  return (
    <header id='home-page'>
      <nav aria-label='Main navigation' className='navbar'>
        <div className='navbar__container'>

          <a href='#home-page' className='navbar__logo'>
            <FaWolfPackBattalion className='navbar__icon' />
          </a>

          <button className='navbar__menu__icon' onClick={handleNavToggle}>
            {click ? <FaTimes /> : <FaBars />}
          </button>

          <ul className='navbar__menu' data-visible={click ? 'true' : 'false'}>
            <li className='navbar__menu__item'>
              <a href='#about-page' className='navbar__menu__link'>ABOUT</a>
            </li>
            <li className='navbar__menu__item'>
              <a href='#projects-page' className='navbar__menu__link'>PROJECTS</a>
            </li>
            <li className='navbar__menu__item'>
              <a href='#work-page' className='navbar__menu__link'>WORK</a>
            </li>
            <li className='navbar__menu__item'>
              <a href='#contact-page' className='navbar__menu__link'>CONTACT</a>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
