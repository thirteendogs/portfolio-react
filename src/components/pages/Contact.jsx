import React from 'react'

const Contact = () => {
  return (
    <section id='contact-page' className='contact'>
       <div className="contact__container">
          <h1 className='contact__title'>Reach out to me</h1>

          <div className="contact__form">
            <form action="https://formsubmit.co/6c0d62b88b63bed07ac5576b46993b1e" method="POST">
               <input type="hidden" name="_subject" value="I want to contract you!"/>
               <input type="hidden" name="_captcha" value="false"/>
               <label htmlFor="name">Name</label>
               <br />
               <input className="contact__form__text__input" type="text" name="name" placeholder="Enter your name" required/>
               <br />
               <label htmlFor="email">Email</label>
               <br />
               <input className="contact__form__text__input" type="email" name="email" placeholder="Enter your email" required/>
               <br />
               <label htmlFor="message">Message</label>
               <br />
               <textarea name='message' id='message' className="contact__form__textarea__input" placeholder="Enter your message"></textarea>
               <br />
               <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
        <div className='button__setup contact__button'>
          <a className='button__start' href='#home-page' />
        </div>
    </section>
  )
}

export default Contact
