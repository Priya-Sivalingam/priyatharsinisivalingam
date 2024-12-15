import React from 'react'
import Header from './components/header/home'
import Nav from './components/nav/nav'
import About from './components/About/about'
import Skills from './components/skills/skill'
import Projects from './components/projects/project'
import Contact from './components/Contact/contact'
import Participation from './pages/Participation'


const App = () => {
  return (
    
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills />
    <Projects/>
    <Participation/>
    <Contact/>
    </>   
  )
}

export default App