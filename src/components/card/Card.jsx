import React from 'react';
import './Card.css';

const Card = ({ categoria, titulo, descricao, imagem }) => {
  return (
    <div className="servico-card">
      <div className="card-conteudo">
        <span className="card-categoria">{categoria}</span>
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-descricao">{descricao}</p>
        <a href="#" className="card-botao">
          Saiba mais <span className="seta">›</span>
        </a>
      </div>
      <div className="card-imagem">
        <img src={imagem} alt={titulo} />
      </div>
    </div>
  );
};

export default Card;