import React from 'react';
import './skill.css';
import { FaJava, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt,FaMicrosoft } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiMicrosoftsqlserver, SiSelenium, SiDotnet } from 'react-icons/si';

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
            <li><FaJsSquare /> JavaScript</li>
            <li><FaNodeJs /> Node JS</li>
            <li><FaMicrosoft /> C#</li>
            
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Web Development</h4>
          <ul>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaReact /> ReactJS</li>
          </ul>
        </div>
        <div className="skills-category box">
          <h4>Frameworks</h4>
          <ul>
            <li><FaNodeJs /> Express JS</li>
            <li><SiDotnet /> .NET</li>
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
          <h4>DevOps</h4>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><SiSelenium /> Testing (Selenium)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
