import React from 'react';
import './OrderModal.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">BESTEL ONLINE</h2>
        <p className="modal-subtitle">Je kan Poké Bowl laten bezorgen!!</p>
        <p className="modal-text">Afhankelijk van jouw adres kun je bestellen bij:</p>

        <div className="order-options">
          <a
            href="https://www.thuisbezorgd.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="order-button thuisbezorgd-button"
          >
            <img
              src="https://images.deliveryhero.io/image/talabat-th/LH_Logo-simple_2020-fa_TH.png"
              alt="Thuisbezorgd"
              className="order-logo"
            />
            <span>Thuisbezorgd</span>
          </a>

          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="order-button uber-button"
          >
            <img
              src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.0.0/d1a3f4spazzrp4.cloudfront.net/eats-logo-1a01872c77.svg"
              alt="Uber Eats"
              className="order-logo"
            />
            <span>UBER EATS</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;