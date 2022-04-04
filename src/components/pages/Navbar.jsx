import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWolfPackBattalion } from 'react-icons/fa'
// import Hamburger from '../Hamburger'

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [click, setClick] = useState(false)

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to='/' className='navbar__logo'>
            <FaWolfPackBattalion className='navbar__icon' />
          </Link>
          {/* <Hamburger /> */}

          <ul className={click ? 'navbar__menu--active' : 'navbar__menu'}>
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
