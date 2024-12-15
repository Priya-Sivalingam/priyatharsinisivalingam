import React from 'react';
import './about.css';
import ME from '../../assets/WhatsApp Image 2024-10-14 at 20.06.18_33b32563.jpg'

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
        <p>I’m a Computer Engineering student from the University of Jaffna with strong
problem-solving skills. Committed to continuous learning and growth in the
field of engineering, I have a keen interest in Programming, FullStack development,machine learning and Deep Learning. I am a flexible individual
seeking a position that allows for collaboration within a dynamic team environment, fostering creativity, and achieving common goals. click here for my
GitHub profile.</p>
    
    <a href='#contacts' className='btn btn-primary '>Contact me</a>

      </div>
    </div>
    </section>
  );
};

export default About;