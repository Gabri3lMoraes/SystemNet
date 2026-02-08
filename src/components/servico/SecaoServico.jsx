import React from 'react';
import Card from '../card/Card.jsx';
import './SecaoServico.css';
import computador from '../../assets/computador.jpg';
import servidorBranco from '../../assets/servidor-branco.jpg';
import servidorPreto from '../../assets/servidor-preto.jpg';

const SecaoServico = () => {
  const servicos = [
    {
      categoria: "Desenvolvimento",
      titulo: "Desenvolvimento de sistemas",
      descricao: "Criamos aplicações robustas e escaláveis para sua empresa",
      imagem: computador
    },
    {
      categoria: "Suporte",
      titulo: "Suporte e soluções em TI",
      descricao: "Atendimento técnico especializado para manter seus sistemas funcionando",
      imagem: servidorBranco
    },
    {
      categoria: "Infraestrutura",
      titulo: "Redes, infraestrutura e tecnologia",
      descricao: "Estruturas de rede modernas e seguras para seu negócio",
      imagem: servidorPreto
    }
  ];

  return (
    <section className="seccao-servicos">
      <div className="container-servicos">
        <div className="cabecalho-servicos">
          <h2>O que oferecemos</h2>
          <p>Soluções tecnológicas para empresas que buscam excelência</p>
        </div>
        
        <div className="grid-servicos">
          {servicos.map((servico, index) => (
            <Card 
              key={index}
              categoria={servico.categoria}
              titulo={servico.titulo}
              descricao={servico.descricao}
              imagem={servico.imagem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoServico;