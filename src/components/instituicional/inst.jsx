import './inst.css'

export default function Institu(){
    return(
        <div className="instituicao">
        <h1 className="inst-titulo">Conheça a SystemNet</h1>
        <p className="inst-p">Na SystemNet, unimos experiência, tecnologia e atendimento personalizado para criar soluções <br />digitais sob medida. Nosso compromisso é impulsionar negócios com inovação, qualidade <br /> técnica e foco em resultados concretos.</p>
        <img className="isnt-img" src=".\public\logos\Logos.png" alt="" />
        <div className='information'>
          <button onClick={() => {{window.open('https://wa.me/558195187458?text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato%20para%20saber%20mais%20sobre%20seus%20serviços.')}}} id='saiba' className="btn btn-outline-light">Saiba mais</button>
        </div>
      </div>
    )
}



      