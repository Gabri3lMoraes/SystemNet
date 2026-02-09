import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SecaoServico from './components/servico/SecaoServico';
import Navbar from './components/navbar/navbar'
import Section from './components/section/section'
import { useReveal } from './hooks/useReveal'
import Section2 from './components/section2/section2'
import Institu from './components/instituicional/inst';
function App() {
useReveal()
  return (
    <>
      <Navbar/>
      <div className="reveal">
           <Section/>
      </div>
      <div className="reveal">
           <SecaoServico/>
      </div>
      <div className="reveal">
           <Section2/>
      </div>
      <div className="reveal">
        <Institu/>
      </div>
      
    </>
  )
}

export default App
