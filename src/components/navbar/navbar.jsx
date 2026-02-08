import './navbar.css'
import { useState } from 'react'
export default function Navbar(){
   const [open, setOpen] = useState(false)

    return(
        <nav className="navbar-expand custom-nav">

        <div className="nav-top container d-flex align-items-center justify-content-between">
          <div className="logo text-white fw-bold"><img className='logo' src=".\src\assets\logos\systemlogo.png" alt="" /></div>

          <ul className="nav gap-4">
            <li className="nav-item text-white">Início</li>
            <li className="nav-item text-white">Sobre</li>
            <li className="nav-item text-white">Serviços</li>
            <li
              className="nav-item text-white solucoes-btn"
              onClick={() => setOpen(!open)}
            >
              Soluções ▾
            </li>
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-light">Contatar</button>
            <button className="btn btn-light">Enviar</button>
          </div>
        </div>

        {/* AREA EXPANDIDA */}
        <div className={`solucoes-area ${open ? 'open' : ''}`}>
          <div className="container text-white py-5">
            <div className="row">

              <div className="col-md-3">
                <h6 className="mb-3">Desenvolvimento</h6>

                <div className="item">
                  <span>⚙️</span>
                  <div>
                    <strong>Sistemas</strong>
                    <p>Criamos aplicações robustas</p>
                  </div>
                </div>

                <div className="item">
                  <span>🛜</span>
                  <div>
                    <strong>Infraestrutura</strong>
                    <p>Redes e tecnologia de ponta</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="mb-3">Diferenciais</h6>

                <div className="item">
                  <span>⭐</span>
                  <div>
                    <strong>Qualidade</strong>
                    <p>Excelência técnica</p>
                  </div>
                </div>

                <div className="item">
                  <span>🤝</span>
                  <div>
                    <strong>Atendimento</strong>
                    <p>Dedicado ao cliente</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="mb-3">Contato</h6>

                <div className="item">
                  <span>📞</span>
                  <div>
                    <strong>Fale conosco</strong>
                    <p>Atendimento imediato</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="mb-3">Recursos</h6>

                <div className="item">
                  <span>📘</span>
                  <div>
                    <strong>Blog</strong>
                    <p>Tendências e tecnologia</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
 
      </nav>
    )
}


