import React from 'react'

const Work = () => {
  return (
    <section id='work-page' className='work'>
      <h1 className='work__title'>
        My job timeline
      </h1>

         <div className="work__container">
            <h2>INDRA</h2>
            <h3>2019 - currently working</h3>
            <h3>Web Developer</h3>
            <br />
            <p className="work__description">Developing pages for diferent products for CaixaBank bank.</p>
            <br />
            <div className="work__tech">
               <i className="fab fa-html5"></i><i className="fab fa-css3-alt"></i><i className="fab fa-js"></i><i
                  className="fab fa-java"></i>
            </div>
         </div>

         <div className="work__container">
            <h2>EVERIS</h2>
            <h3>2018 - 2019</h3>
            <h3>Web Developer</h3>
            <br />
            <p className="work__description">Developing pages for diferent products for BancSabadell bank.</p>
            <br />
            <div className="work__tech">
               <i className="fab fa-html5"></i><i className="fab fa-css3-alt"></i><i className="fab fa-js"></i><i
                  className="fab fa-java"></i>
            </div>
         </div>
    </section>

  )
}

export default Work
