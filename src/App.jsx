import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { FormContact } from './components/FormContact'
 
const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <FormContact />
      <Footer />
    </div>
  )
}

export default App
