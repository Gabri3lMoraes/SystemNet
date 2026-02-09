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
            <button onClick={() => {{window.open('https://wa.me/558195187458?text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato%20para%20saber%20mais%20sobre%20seus%20serviços.')}}} className="btn btn-outline-light">Contatar</button>
            
          </div>
        </div>

        {/* AREA EXPANDIDA */}
        <div className={`solucoes-area ${open ? 'open' : ''}`}>
          <div className="container text-white py-5">
            <div className="row">

              <div className="col-md-3">
                <h6 className="mb-3">Desenvolvimento</h6>

                <div className="item">
                  <span><img src=".\src\assets\vector\Vector.png" alt="" /></span>
                  <div>
                    <strong>Sistemas</strong>
                    <p>Criamos aplicações robustas</p>
                  </div>
                </div>

                <div className="item">
                  <span><img src=".\src\assets\Vector1.png" alt="" /></span>
                  <div>
                    <strong>Infraestrutura</strong>
                    <p>Redes e tecnologia de ponta</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\Vector.png" alt="" /></span>
                  <div>
                    <strong>Suporte</strong>
                    <p>Assistência técnica 24/7 para seu negócio</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\Vector2.png" alt="" /></span>
                  <div>
                    <strong>Consultoria</strong>
                    <p>Estratégia digital personalizada</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="mb-3">Diferenciais</h6>

                <div className="item">
                  <span><img src=".\src\assets\Vectors.png" alt="" /></span>
                  <div>
                    <strong>Qualidade</strong>
                    <p>Excelência técnica</p>
                  </div>
                </div>

                <div className="item">
                  <span><img src=".\src\assets\atendimento.png" alt="" /></span>
                  <div>
                    <strong>Atendimento</strong>
                    <p>Dedicado ao cliente</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\resultado.png" alt="" /></span>
                  <div>
                    <strong>Resultados</strong>
                    <p>Soluções que transformam negócios</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\portfolio.png" alt="" /></span>
                  <div>
                    <strong>Portifolio</strong>
                    <p>Projetos que falam por si</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="mb-3">Contato</h6>

                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\fale.png" alt="" /></span>
                  <div>
                    <strong>Fale conosco</strong>
                    <p>Atendimento imediato</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\quem.png" alt="" /></span>
                  <div>
                    <strong>Quem somos</strong>
                    <p>Conheça a história da SystemNet</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\missao.png" alt="" /></span>
                  <div>
                    <strong>Missão</strong>
                    <p>Impulsionar negócios com tecnologia</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\valores.png" alt="" /></span>
                  <div>
                    <strong>Valores</strong>
                    <p>Inovação, qualidade e compromisso</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="mb-3">Recursos</h6>

                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\blog.png" alt="" /></span>
                  <div>
                    <strong>Blog</strong>
                    <p>Tendências e tecnologia</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\faq.png" alt="" /></span>
                  <div>
                    <strong>FAQ</strong>
                    <p>Tendências e tecnologia</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src=".\src\assets\tudo\Navbar\7\doc.png" alt="" /></span>
                  <div>
                    <strong>Documentação</strong>
                    <p>Guias técnicos e referências</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
 
      </nav>
    )
}


