import React from 'react'
import './home.css'
import CTA from './CTA'
import ME  from '../../assets/WhatsApp.jpg'


const header = () => {
  return (
    
    <section id='home'>
    <header>
     <div className='container header_container '>
      <h5>Hello I'm</h5>
      <h1>Priyatharsini Sivalingam</h1>
      <h5 className='.container'>Computer Engineering Student</h5>
      <CTA/>
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>
     </div>
    </header>
    </section>
  )
}

export default header