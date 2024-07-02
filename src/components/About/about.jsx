import React from 'react';
import './about.css';
import ME from '../../assets/WhatsApp.jpg'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className='about_me-image'>
          <img src={ME} alt="Priyatharsini"/>
        </div>
      </div>

      <div className="about_content">
        <p>I’m a Computer engineering student with a passion for technology. 
        Committed to continuous learning and growth in the field of engineering. 
        A flexible person seeking a position that allows for collaboration within a dynamic
team environment, fostering creativity, and achieving common goals. I believe in teamwork and I always consider the best outcome for the team.</p>
    
    <a href='#contacts' className='btn btn-primary '>Contact me</a>

      </div>
    </div>
    </section>
  );
};

export default About;