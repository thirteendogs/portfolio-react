import React from 'react'
import imgMarketPlace from './../../assets/img/house-marketplace.jpg'
import imgGitHub from './../../assets/img/github-finder.jpg'
import imgFeedback from './../../assets/img/feedback.jpg'

const Projects = () => {
  return (
      <section id='projects-page' className='projects'>
         <h1 className='projects__title'>My projects</h1>

         <div className="projects__container">
            <div className="projects__project__container">
               <article className='projects__project__individualBox' title='firstProject' >
                  <picture className="projects__project__individualBox__image">
                     <img src={imgMarketPlace} alt="Market Place project image"></img>
                  </picture>

                  <div className="projects__project__info">
                     <div className="projects__project__title">
                        <h2>House Market Place</h2>
                     </div>

                     <div className="projects__project__external__link">
                        <a href="https://house-test.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/thirteendogs/house-marketplace" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                     </div>

                  </div>
               </article>
               <article className="projects__tech__container">
                  <div className="projects__tech__container__item">
                     <i className="fab fa-react"></i>
                  </div>
               </article>
            </div>

            <div className="projects__project__container">
               <article className='projects__project__individualBox' title='secondProject' >
                  <picture className="projects__project__individualBox__image">
                     <img src={imgGitHub} alt="GitHub finder project image"></img>
                  </picture>

                  <div className="projects__project__info">
                     <div className="projects__project__title">
                        <h2>GitHub Finder</h2>
                     </div>

                     <div className="projects__project__external__link">
                        <a href="https://github-finder-v2.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/thirteendogs/github-finder-v2" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                     </div>

                  </div>
               </article>
               <article className="projects__tech__container">
                  <div className="projects__tech__container__item">
                     <i className="fab fa-react"></i>
                  </div>
               </article>
            </div>

            <div className="projects__project__container">
               <article className='projects__project__individualBox' title='thirthProject'>
                  <picture className="projects__project__individualBox__image">
                     <img src={imgFeedback} alt="Feedback project image"></img>
                  </picture>

                  <div className="projects__project__info">
                     <div className="projects__project__title">
                        <h2>Feedback App</h2>
                     </div>

                     <div className="projects__project__external__link">
                        <a href="https://adoring-shannon-e19f84.netlify.app/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                        <a href="https://github.com/thirteendogs/feedback-app" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                     </div>

                  </div>
               </article>
               <article className="projects__tech__container">
                  <div className="projects__tech__container__item">
                     <i className="fab fa-react"></i>
                  </div>
               </article>
            </div>
         </div>
         <div className='button__setup projects__button'>
            <a className='button' href='#work-page' />
         </div>
      </section>
  )
}

export default Projects
