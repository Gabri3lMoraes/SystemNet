import React from 'react';
import './Footer.css';
import logo from '../../assets/logos/systemlogo.png'; // Ajuste o caminho conforme sua estrutura
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Linha Superior: Logo, Nav e Social */}
        <div className="footer-main">
          <div className="footer-logo">
            <img src={logo} alt="SystemNet Logo" />
          </div>

          <nav className="footer-nav">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="">Contato</a>
            <a href="#portfolio">Portfólio</a>
          </nav>

          <div className="footer-social">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Linha Inferior: Copyright e Links Legais */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} SystemNet. Todos os direitos reservados.
          </p>
          <div className="legal-links">
            <a href="/politica-privacidade">Política de privacidade</a>
            <a href="/termos-servico">Termos de serviço</a>
            <a href="/cookies">Configurações de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;