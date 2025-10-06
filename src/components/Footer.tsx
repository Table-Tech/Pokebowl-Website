import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-section">
          <h2 className="social-heading">LIKE & SHARE</h2>

          <div className="social-columns">
            <div className="social-column">
              <div className="social-icon facebook-icon">
                <svg viewBox="0 0 24 24" fill="#1877f2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <p className="social-text">
                Like en Share onze Facebook pagina voor leuke aanbiedingen en win acties
              </p>
              <a href="https://www.facebook.com/pokebowloriginal" className="social-button facebook-button">
                Like ons op Facebook →
              </a>
            </div>

            <div className="social-column">
              <div className="social-icon instagram-icon">
                <svg viewBox="-1 2 25 20" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <p className="social-text">
                Volg ons op Instagram. Maak foto's van jouw Poké Bowl of Sushi Burrito en gebruik #Pokebowl_original
              </p>
              <a href="https://www.instagram.com/pokebowl_original" className="social-button instagram-button">
                Like ons op Instagram →
              </a>
            </div>
          </div>
        </div>

        <div className="footer-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&crop=center"
            alt="Delicious Poké Bowl"
            className="pokebowl-image"
          />
        </div>
      </div>

      <div className="privacy-section">
        <div className="privacy-content">
          <div className="privacy-logo">
            <svg viewBox="0 0 100 60" className="retail-privacy-logo">
              <rect x="10" y="10" width="80" height="40" rx="5" fill="#2c5f8c" stroke="#2c5f8c" strokeWidth="2"/>
              <text x="50" y="25" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">RETAIL</text>
              <text x="50" y="35" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PRIVACY</text>
              <text x="50" y="45" textAnchor="middle" fill="#66b3ff" fontSize="6">Keurmerk</text>
              <circle cx="25" cy="30" r="8" fill="none" stroke="white" strokeWidth="1.5"/>
              <path d="M22 30l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <p className="privacy-text">Privacy informatie</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <p className="copyright">Copyright © 2025 Poké Bowl Original</p>
          <div className="footer-nav">
            <a href="/algemene-voorwaarden" className="footer-link">Algemene voorwaarden</a>
            <a href="/privacy" className="footer-link">Privacy / Disclaimer</a>
            <a href="/cookies" className="footer-link">Cookiebeleid (EU)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;