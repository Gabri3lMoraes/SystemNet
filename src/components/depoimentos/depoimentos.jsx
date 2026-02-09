import React from 'react';
import './depoimentos.css';

const depoimentosData = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Diretor, TechCorp",
    text: "A SystemNet entregou uma solução que superou nossas expectativas e transformou nossa operação completamente.",
    stars: 5
  },
  {
    id: 2,
    name: "Marina Costa",
    role: "Gerente, Inovação Digital",
    text: "Profissionais competentes, atenciosos e que realmente entendem o que precisamos para crescer.",
    stars: 5
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "CEO, Soluções Empresariais",
    text: "Confiamos na SystemNet porque entregam resultados reais e mantêm um relacionamento transparente conosco.",
    stars: 5
  }
];

const Depoimentos = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">O que nossos clientes dizem sobre nós</p>

        <div className="testimonials-grid">
          {depoimentosData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="stars">
                {"★".repeat(item.stars)}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="user-info">
                <div className="user-avatar-placeholder"></div>
                <div className="user-details">
                  <h4 className="user-name">{item.name}</h4>
                  <p className="user-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;