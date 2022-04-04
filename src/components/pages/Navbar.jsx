import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscTerminalDebian } from 'react-icons/vsc'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <div className='navbar'>
        <div className='navbar__container'>
          <Link to='/' className='navbar__logo'>
            <VscTerminalDebian className='navbar__icon' />
          </Link>
          <div className='navbar__menu__icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
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
      </div>
    </>
  )
}

export default Navbar
