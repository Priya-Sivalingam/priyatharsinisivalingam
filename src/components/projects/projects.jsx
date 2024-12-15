import React, { useEffect, useState } from 'react';
import { projectsNav } from './Data';
import { projectsData } from './Data';
import ProjectItems from './ProjectItems';

const Projects = () => {
  const [item, setItem] = useState({ name:'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState([0]);

  useEffect(() => {
    if(item.name === "all"){
      setProjects(projectsData);

    }else{
      const newProjects = projectsData.filter((project) =>{
        return project.category ===item.name

      });
      setProjects(newProjects);
    }
  })

  const handleClick = (e,index) =>{
    setItem({ name: e.target.textContent});
    setActive(index);
  };
  return (
    <div>
      <div className='project_filters'>
        {projectsNav.map((item, index)=>{
          return(
          <span 
              onClick={(e)=>{
                  handleClick(e,index);
              }} 
              className={`${active === index ? 'active-project' : ''} project_item`}  
              key ={index}>
              {item.name}
          </span>
          );
        })}
      </div>

    <div className='project_container container grid'>
        {projects.map((item)=>{
             return <ProjectItems item={item} key={item.id}/>;
        })}
    </div>
    </div>
    
  )
}

export default Projects