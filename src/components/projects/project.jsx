import React from 'react'
import Projects from './projects'
import './projects.css';


const project = () => {
  return (
    <section className='project section reveal' id='projects'>
        <h2 className='section_title'>Projects</h2>

        <Projects/>
    </section>
  )
}

export default project