import React from 'react'
import CV  from '../../assets/2020E122_Priyatharsini_CV'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn btn-primary'>Contact Me</a>


    </div>
  )
}

export default CTA