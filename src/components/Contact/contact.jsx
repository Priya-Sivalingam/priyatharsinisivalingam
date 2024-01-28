import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pb8r6cg', 'template_2h7n3ls', form.current, 'oacYPQP9U1For89bc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contacts'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <MdEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>ptharsinis20@gmail.com</h5>
          <a href='mailto:ptharsinis20@gmail.com'>Send a message</a>
        </article>

        <article className='contact_option'>
        <FaLinkedin className='contact_option-icon'/>
          <h4>linkedin</h4>
          <h5>priyatharsinis</h5>
          <a href='https://www.linkedin.com/in/priyatharsinis'>Send a message</a>
        </article>

        <article className='contact_option'>
          <FaSquareWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+94 774366298</h5>
          <a href='https://api.whatsapp.com/send?phone+94774366298'>Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your full name' required/>
        <input type='email' name='email' placeholder='Your email' required/>
        <textarea name='message' rows='7'  placeholder='Your message' required></textarea>
        <button type='submit'className='btn btn-primary'>Send message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact