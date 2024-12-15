import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className='project_card reveal' key={ProjectItems.id}>
      <img src={item.image} alt='' className='project_img'/>
      <h3 className='project_title'>{item.title}</h3>
      <a href='#' className='Project_button'>
        
    <a href={item.Github} target='_blank '>Github</a> <i className='bx bx-right-arrow-alt work_button'></i>
      </a>

    </div>
  )
}

export default ProjectItems