import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Profile from './components/profile'
import Projects from './components/projects'
import Resume from './components/resume'
import ParallaxSection from './components/paralax'
import Contact from './components/contact'
function App() {
  return (
    <>
      <Header />
      <Profile />
      <Projects />
      <Resume />
      <Contact />
      {/* <ParallaxSection />     */}

    </>
  )
}

export default App
