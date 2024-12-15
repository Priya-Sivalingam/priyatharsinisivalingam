import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const footer = () => {
  return (
  
    <footer>
    <a href='#' className='footer_logo'>Portfolio</a>
    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#education'>Education</a></li>
    <li><a href='#projects'>Projects</a></li>
    <li><a href='#contacts'>Contact</a></li>
    </ul> 

    <div className='footer_socials'>
      <a href='https://www.facebook.com/priya.sivalingam.908'><FaFacebook/></a>
      <a href='https://www.instagram.com/priyatharsinis_99/'><FaInstagram /></a>
      <a href='https://twitter.com/PriyatharsiniS3'><FaXTwitter /></a>
    </div>

    <div className='footer_copyright'>
      <small>&copy; priyatharsini Sivalingam All rights reserverd</small>
    </div>
    </footer>
  
  )
}

export default footer