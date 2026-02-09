import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import './section.css';

// Importe suas imagens ou use os caminhos
const backgroundImages = [
  '/src/assets/imagem1.jpeg',
  '/src/assets/imagem2.jpeg',
  '/src/assets/imagem3.jpeg',
  '/src/assets/imagem4.jpeg'
];

export default function Section() {
  return (
    <section className="hero-container">
      {/* Carrossel de Fundo */}
      <div className="background-slider">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={'fade'} // Efeito de transição suave
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          {backgroundImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div 
                className="slide-image" 
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Overlay escuro para dar leitura ao texto */}
                <div className="overlay"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Conteúdo Fixo */}
      <div className="content">
        <h1 className='titulo'>
          Transformando desafios em <br /> soluções digitais
        </h1>
        <p className='subtitulo'>
          Somos a SystemNet: tecnologia, inovação e resultados para o seu negócio. 
          Unimos experiência <br /> técnica e atendimento personalizado para criar 
          soluções sob medida que impulsionam <br /> empresas.
        </p>
        <div className="contacts">
          <button className="btn btn-outline-light">Orçamento</button>
          <button className="btn btn-light">Contato</button>
        </div>
      </div>
    </section>
  );
}