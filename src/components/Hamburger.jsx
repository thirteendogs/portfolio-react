import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Hamburger = () => {
  const handleClick = () => sethamburgerClick(!hamburgerClick)

  const [hamburgerClick, sethamburgerClick] = useState(false)

  return (
    <button className='navbar__menu__icon' onClick={handleClick}>
      {hamburgerClick ? <FaTimes /> : <FaBars />}
    </button>
  )
}

export default Hamburger
