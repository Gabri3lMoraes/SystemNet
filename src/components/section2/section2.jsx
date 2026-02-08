import './section2.css'
import { useReveal } from '../../hooks/useReveal'
export default function Section2(){
    return(
        <div className="section2 reveal">
          <h1 className='reveal'>
            Por que escolher a SystemNet
          </h1>
          <p>Nos diferenciamos pelo compromisso com qualidade técnica, atendimento personalizado e resultados concretos que transformam negócios.</p>
          <div className='quality reveal'>
            <div className='reveal'>
              <h5>Qualidade técnica</h5>
              <p>Profissionais experientes que dominam as melhores práticas e tecnologias do mercado</p>
            </div>
            <div className='reveal'>
              <h5>Atendimento personalizado</h5>
              <p>Cada projeto recebe atenção dedicada e soluções ajustadas às suas necessidades específicas</p>
            </div>
            <div className='reveal'>
              <h5>Compromisso com resultados</h5>
              <p>Focamos em entregar soluções que geram impacto real e mensurável para sua empresa</p>
            </div>
            
          </div>
      </div>
    )
}