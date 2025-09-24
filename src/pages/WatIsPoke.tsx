import React from 'react';
import './WatIsPoke.css';

const WatIsPoke: React.FC = () => {
  return (
    <div className="wat-is-poke-page">
      <div className="wat-is-poke-container">
        <div className="wat-is-poke-content">
          <h1 className="wat-is-poke-title">WAT IS POKÉ</h1>
          <h2 className="wat-is-poke-subtitle">Ontdek dit traditioneel gerecht uit Hawaii</h2>

          <div className="poke-description">
            <p>
              Poké ( spreekt uit als pokay ) is een traditioneel gerecht uit Hawaii, waar verse vis in blokjes en groente
              centraal staat. In een Poké bowl zit voornamelijk jouw favoriete vissoort, gemixt met verse gezonde
              ingrediënten.
            </p>
            <p>
              Alle sauzen zijn met zorg samengesteld en geven een sensatie aan jouw bowl. <a href="/menu" className="custom-bowl-link">Maak jouw eigen bowl</a>.
            </p>
          </div>
        </div>

        <div className="poke-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&crop=center"
            alt="Delicious Poké Bowl"
            className="pokebowl-image"
          />
        </div>
      </div>

      <div className="how-to-make-section">
        <h2 className="how-to-title">HOE MAAK JIJ EEN POKÉ BOWL?</h2>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1.</div>
            <h3 className="step-title">Kies een basis</h3>
            <div className="step-icon">
              <svg viewBox="0 0 100 100" className="basis-icon">
                <rect x="20" y="60" width="60" height="25" rx="5" fill="#8BC34A"/>
                <ellipse cx="50" cy="50" rx="25" ry="12" fill="#FFF"/>
                <ellipse cx="50" cy="45" rx="20" ry="8" fill="#F5F5F5"/>
              </svg>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2.</div>
            <h3 className="step-title">Kies je favoriete proteïne</h3>
            <div className="step-icon">
              <svg viewBox="0 0 100 100" className="protein-icon">
                <path d="M30 40c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15z" fill="#FF9800"/>
                <path d="M70 30c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22z" fill="#FF5722"/>
                <circle cx="35" cy="50" r="3" fill="#FFF"/>
                <path d="M15 45c-3-2-5-5-3-8s5-2 8 0" stroke="#666" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3.</div>
            <h3 className="step-title">Kies 4 mix-ins</h3>
            <div className="step-icon">
              <svg viewBox="0 0 100 100" className="mixins-icon">
                <circle cx="30" cy="30" r="8" fill="#4CAF50"/>
                <circle cx="70" cy="30" r="8" fill="#FF9800"/>
                <circle cx="30" cy="70" r="8" fill="#E91E63"/>
                <circle cx="70" cy="70" r="8" fill="#9C27B0"/>
                <circle cx="50" cy="50" r="6" fill="#2196F3"/>
              </svg>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4.</div>
            <h3 className="step-title">Kies je favoriete dressing</h3>
            <div className="step-icon">
              <svg viewBox="0 0 100 100" className="dressing-icon">
                <path d="M35 20 Q50 10 65 20 L65 80 Q50 90 35 80 Z" fill="#795548"/>
                <ellipse cx="50" cy="25" rx="12" ry="5" fill="#8BC34A"/>
                <path d="M40 30 Q50 35 60 30" stroke="#4CAF50" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="step">
            <div className="step-number">5.</div>
            <h3 className="step-title">Kies 3 toppings</h3>
            <div className="step-icon">
              <svg viewBox="0 0 100 100" className="toppings-icon">
                <circle cx="20" cy="50" r="3" fill="#FF9800"/>
                <circle cx="35" cy="30" r="3" fill="#4CAF50"/>
                <circle cx="50" cy="60" r="3" fill="#E91E63"/>
                <circle cx="65" cy="40" r="3" fill="#9C27B0"/>
                <circle cx="80" cy="55" r="3" fill="#2196F3"/>
                <circle cx="40" cy="75" r="3" fill="#FF5722"/>
                <circle cx="60" cy="20" r="3" fill="#795548"/>
                <circle cx="75" cy="30" r="3" fill="#607D8B"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="menu-cta">
          <button className="menu-button">
            Bekijk het menu →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatIsPoke;