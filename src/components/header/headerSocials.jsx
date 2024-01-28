import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header_Socials'>
      <a href='https://www.linkedin.com/in/priyatharsinis' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      <a href='https://github.com/Priya-Sivalingam' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href='https://www.facebook.com/priya.sivalingam.908' target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href='https://www.instagram.com/priyatharsinis_99/' target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
    </div>
  );
}

export default HeaderSocials;
