import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/navbar/navbar'
import Section from './components/section/section'
import { useReveal } from './hooks/useReveal'
import Section2 from './components/section2/section2'
function App() {
useReveal()
  return (
    <>
      <Navbar/>
      <div className="reveal">
           <Section/>
      </div>
      <div className="reveal">
           <Section2/>
      </div>
      
    </>
  )
}

export default App
