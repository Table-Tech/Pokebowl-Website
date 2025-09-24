import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OrderModal from './OrderModal';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src="/Logo-Poke-Bowl-Original.svg"
            alt="Poké Bowl Original"
            className="logo-image"
          />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/over-ons" className={`nav-link ${location.pathname === '/over-ons' ? 'active' : ''}`}>Over ons</Link></li>
            <li><Link to="/wat-is-poke" className={`nav-link ${location.pathname === '/wat-is-poke' ? 'active' : ''}`}>Wat is Poké</Link></li>
            <li><Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link></li>
            <li><Link to="/catering" className={`nav-link ${location.pathname === '/catering' ? 'active' : ''}`}>Catering</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          </ul>
        </nav>

        <button
          className="cta-button"
          onClick={() => setIsOrderModalOpen(true)}
        >
          Bestel online
          <span className="cta-arrow">→</span>
        </button>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </header>
  );
};

export default Header;