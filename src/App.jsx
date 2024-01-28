import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/About/about'
import Projects from './components/projects/projects'
import Contact from './components/Contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>   
  )
}

export default App