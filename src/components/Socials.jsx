import React from 'react'

const Socials = () => {
  return (
     <>
    <nav className="side__nav__right">
         <ul>
            <li>
               <a href="https://github.com/thirteendogs/" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            </li>
            <li>
               <a className="side-line" href="https://www.linkedin.com/in/danielnovagirbau/" target="_blank" rel="noreferrer"><i
                     className="fa fa-linkedin"></i></a>
            </li>
         </ul>
      </nav>

      <nav className="side__nav__left">
         <div className="side__nav__left__line">
            <a href="mailto:danielnovathirteendogs@gmail.com">danielnovathirteendogs@gmail.com</a>
         </div>
      </nav>
     </>

  )
}

export default Socials
