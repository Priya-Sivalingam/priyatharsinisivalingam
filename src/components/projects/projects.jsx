import React from 'react'
import './projects.css'
import IMG from '../../assets/traffic light.gif'
import IMG1 from '../../assets/Food Order.jpg'
import IMG2 from '../../assets/Registration.png'
import IMG3 from '../../assets/calculator.png'

const projects = () => {
  return (
    <section id='projects'>
    <h2>My Projects</h2>
    <div className='container project_container'>
    <article className='project_item'>
    <div className='project_item-image'>
    <img src={IMG} alt=''/>
    </div>
    <h3>Traffic Control System Project</h3>
    <a href='https://github.com/Priya-Sivalingam/Priya-Sivalingam-Smart-Traffic-Control-System-using-VHDL' className='btn' target='_blank '>Github</a>
    </article>
    <article className='project_item'>
    <div className='project_item-image'>
    <img src={IMG1} alt=''/>
    </div>
    <h3>Food Order Database App</h3>
    <a href='https://github.com/Priya-Sivalingam/Food-order-database-app' className='btn' target='_blank '>Github</a>
    </article>
    <article className='project_item'>
    <div className='project_item-image'>
    <img src={IMG3} alt=''/>
    </div>
    <h3>Calculator Web Application</h3>
    <a href='https://github.com/Priya-Sivalingam/Calculator-Web-Application' className='btn' target='_blank '>Github</a>
    </article>
    <article className='project_item'>
    <div className='project_item-image'>
    <img src={IMG2} alt=''/>
    </div>
    <h3>Student Registration GUI Application</h3>
    <a href='https://github.com/Priya-Sivalingam/Student-Registration-Form' className='btn' target='_blank '>Github</a>
    </article>
    </div>
    </section>
  )
}

export default projects