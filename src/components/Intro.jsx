import React, { useState } from 'react'
import { FaWolfPackBattalion } from 'react-icons/fa'

const Intro = () => {
  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false)
  }, 4000)

  return (
    <div className='intro' data-show={`${show ? 'true' : 'false'}`}>
      <div className="intro__box__one"></div>
      <div className="intro__box__two"></div>
       <FaWolfPackBattalion className='intro__icon'/>
    </div>
  )
}

export default Intro
