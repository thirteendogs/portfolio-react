import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
    <header>
      <nav aria-label='Main navigation' className='navbar'>
        <div className='navbar__container'>
          <Link to='/' className='navbar__logo'>
            <FaWolfPackBattalion className='navbar__icon' />
          </Link>

          <button className='navbar__menu__icon' onClick={handleNavToggle}>
            {click ? <FaTimes /> : <FaBars />}
          </button>

          <ul className='navbar__menu' data-visible={click ? 'true' : 'false'}>
            <li className='navbar__menu__item'>
              <Link to='/about' className='navbar__menu__link'>ABOUT</Link>
            </li>
            <li className='navbar__menu__item'>
              <Link to='/projects' className='navbar__menu__link'>PROJECTS</Link>
            </li>
            <li className='navbar__menu__item'>
              <Link to='/work' className='navbar__menu__link'>WORK</Link>
            </li>
            <li className='navbar__menu__item'>
              <Link to='/contact' className='navbar__menu__link'>CONTACT</Link>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
