import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SecaoServico from './components/servico/SecaoServico';
import Navbar from './components/navbar/navbar'
import Section from './components/section/section'
import { useReveal } from './hooks/useReveal'
import Section2 from './components/section2/section2'
import Institu from './components/instituicional/inst';
import Depoimentos from  './components/depoimentos/depoimentos';
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
      <div className="reveal">
        <Depoimentos/>
      </div>
      
      
      
      
      
      
      
      <div className="reveal">
           <Depoimentos/>
      </div>
      
    </>
  )
}

export default App
