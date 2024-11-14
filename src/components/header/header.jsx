import React from 'react'
import './header.css'
import CTA from './CTA'
import ME  from '../../assets/WhatsApp Image 2024-11-15 at 00.17.02_c9fbc216.jpg'
import HeaderSocials from '../header/headerSocials'


const header = () => {
  return (
    <header>
     <div className='container header_container '>
      <h5>Hello I'm</h5>
      <h1>Priyatharsini Sivalingam</h1>
      <h5 className='.container'>Computer Engineering Student</h5>
      <CTA/>
      <HeaderSocials/>
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>

     </div>



    </header>
  )
}

export default header