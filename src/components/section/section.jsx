import './section.css'
export default function Section(){
    return(
        <div className="containe">
        <h1 className='titulo'>Transformando desafios em <br></br> soluções digitais</h1>
        <p className='subtitulo'>Somos a SystemNet: tecnologia, inovação e resultados para o seu negócio. Unimos experiência <br />técnica e atendimento personalizado para criar soluções sob medida que impulsionam <br /> empresas.</p>
        <div className="contacts">
          <button onClick={() => {{window.open('https://wa.me/558195187458?text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato%20para%20saber%20mais%20sobre%20seus%20serviços.')}}} className="btn btn-outline-light">Orçamento</button>
            <button onClick={() => {{window.open('https://wa.me/558195187458?text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato%20para%20saber%20mais%20sobre%20seus%20serviços.')}}} className="btn btn-light">Contato</button>
        </div>
      </div>
    )
}

