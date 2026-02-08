import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SecaoServico from './components/servico/SecaoServico';
import Navbar from './components/navbar/navbar'
function App() {

  return (
    <>
      <Navbar/>
      <div className="prat">
      </div>
      <div className="containe">
        <h1 className='titulo'>Transformando desafios em <br></br> soluções digitais</h1>
        <p className='subtitulo'>Somos a SystemNet: tecnologia, inovação e resultados para o seu negócio. Unimos experiência <br />técnica e atendimento personalizado para criar soluções sob medida que impulsionam <br /> empresas.</p>
          <div className="contacts">
            <button className="btn btn-outline-light">Contatar</button>
              <button className="btn btn-light">Enviar</button>
          </div>
      </div>
      <div>
        <SecaoServico />
      </div>
    </>
  )
}

export default App
