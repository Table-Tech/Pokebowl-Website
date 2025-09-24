import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="decorative-elements">
        <div className="decoration decoration-top-left"></div>
        <div className="decoration decoration-bottom-left"></div>
      </div>

      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">WELKOM BIJ POKÉ BOWL ORIGINAL</h1>
          <p className="hero-subtitle">De eerste Hawaiiaanse Poké Bowl in Nederland</p>
        </div>

        <div className="content-cards">
          <div className="card card-menu">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center" alt="Restaurant interior" />
            </div>
            <div className="card-content">
              <h2 className="card-title">MENU</h2>
              <p className="card-subtitle">Maak jouw eigen bowl</p>
              <Link to="/menu" className="card-button">
                Bekijk het menu →
              </Link>
            </div>
          </div>

          <div className="card card-wat-is-poke">
            <div className="card-content">
              <h2 className="card-title">WAT IS POKÉ</h2>
              <p className="card-subtitle">Ontdek dit traditioneel gerecht uit Hawaii</p>
              <Link to="/wat-is-poke" className="card-button">
                Ontdek →
              </Link>
            </div>
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&crop=center" alt="Poké Bowl" />
            </div>
          </div>

          <div className="card card-over-ons">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center" alt="Food packaging" />
            </div>
            <div className="card-content">
              <h2 className="card-title">OVER ONS</h2>
              <p className="card-subtitle">Lees ons verhaal</p>
              <Link to="/over-ons" className="card-button">
                Lees verder →
              </Link>
            </div>
          </div>

          <div className="card card-contact">
            <div className="card-content card-contact-content">
              <h2 className="card-title">CONTACT</h2>
              <p className="card-subtitle">Adres & openingstijden</p>
              <Link to="/contact" className="card-button">
                Lees verder →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;