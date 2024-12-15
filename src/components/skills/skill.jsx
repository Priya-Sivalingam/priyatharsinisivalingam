import React from 'react';
import './skill.css';
import { FaJava, FaPython, FaReact, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiMicrosoftsqlserver, SiDotnet, SiSpringboot, SiVisualstudiocode, SiIntellijidea, SiJupyter, SiAnaconda } from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skill'>
      <h2>Tech Skills</h2>
      <div className="skills-grid">
        <div className="skills-category box">
          <h4>Programming Languages</h4>
          <ul>
            <li><FaJava /> Java</li>
            <li><SiCplusplus /> C++</li>
            <li><FaPython /> Python</li>
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Frameworks</h4>
          <ul>
            <li><SiDotnet /> .NET</li>
            <li><SiSpringboot /> Spring Boot</li>
            <li><FaReact /> React</li>
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Database Management</h4>
          <ul>
            <li><SiMysql /> MySQL</li>
            <li><SiMongodb /> MongoDB</li>
            <li><SiMicrosoftsqlserver /> MsSql</li>
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Version Control</h4>
          <ul>
            <li><FaGitAlt /> Git and GitHub</li>
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Cloud</h4>
          <ul>
            <li><FaAws /> AWS</li>
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Tools</h4>
          <ul>
            <li><SiVisualstudiocode /> Visual Studio Code</li>
            <li><SiIntellijidea /> IntelliJ IDEA</li>
            <li><SiJupyter /> Jupyter Notebook</li>
            <li><SiAnaconda /> Anaconda</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
