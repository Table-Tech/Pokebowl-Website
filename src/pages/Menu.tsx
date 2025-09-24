import React, { useState } from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'custom' | 'signature'>('signature');

  const signatureBowls = [
    {
      name: "Salmon L Jackson",
      price: "€ 14,00",
      ingredients: "Edamame, rettich, zeewier, avocado, komkommer (large bowl), soja dressing, masago, gebakken ui, sesam mix"
    },
    {
      name: "Tuna Turner",
      price: "€ 14,50",
      ingredients: "Surimistick, wortel, mais, komkommer, rode ui (large bowl), wasabi mayo, lente ui, sesam mix, gebakken ui"
    },
    {
      name: "Tofu Hanks",
      price: "€ 12,50",
      ingredients: "Komkommer, zeewier, wortel, mais, komkommer (large bowl), sesam dressing, jalapeños, lente ui, gebakken ui"
    },
    {
      name: "Bart Shrimpson",
      price: "€ 12,50",
      ingredients: "Mango, wortel, rettich, komkommer, rode ui (large bowl), sesam dressing, lente ui, masago, sesam mix"
    },
    {
      name: "Smokey Chicken and the Bandit",
      price: "€ 12,50",
      ingredients: "Komkommer, paprika, edamame, mais, zeewier (large bowl), teriyaki dressing, sesam mix, zeewiervlokken, gebakken ui"
    },
    {
      name: "Chick Jagger",
      price: "€ 12,50",
      ingredients: "Edamame, mais, komkommer, rode ui, wortel (large bowl), sriracha mayo, jalapeños, sesam mix, gebakken ui"
    }
  ];

  const customBowlData = {
    bases: [
      { name: "Poké Bowl", prices: "(M) € 12,50  (L) € 15,00" },
      { name: "Poké Mix", prices: "(M) € 12,50  (L) € 15,00" },
      { name: "Poké Salade", prices: "(M) € 12,50  (L) € 15,00" },
      { name: "Poké Burrito", prices: "€ 12,00" }
    ],
    proteins: [
      { name: "Zalm", price: "(+ € 1,00)" },
      { name: "Gemarineerde zalm", price: "(+ € 1,00)" },
      { name: "Vegan zalm", price: "(+ € 1,00)" },
      { name: "Gemarineerde Tonijn", price: "(+ € 2,50)" },
      { name: "Garnaal", price: "" },
      { name: "Krokante garnaal", price: "(+ € 2,00)" },
      { name: "Gegrilde kip (halal)", price: "" },
      { name: "Krokante kip (halal)", price: "" },
      { name: "Teriyaki kip (halal)", price: "" },
      { name: "Vegan krokante kip", price: "(+ € 1,00)" },
      { name: "Tofu", price: "" }
    ],
    mixins: {
      komkommer: ["Avocado (+ € 1,00)", "Japanse Rettich", "Paprika"],
      edamame: ["Rode Ui", "Mango (+ € 0,50)", "Surimisticks"],
      zeewiersalade: ["Wortel", "Mais", "Cherry Tomaten"]
    },
    dressings: [
      { name: "Soja Dressing", price: "" },
      { name: "Wasabi Mayo", price: "" },
      { name: "Sesam Dressing", price: "" },
      { name: "Teriyaki Saus", price: "" },
      { name: "Sriracha Mayo", price: "" },
      { name: "Kewpi Mayo", price: "" }
    ],
    toppings: [
      { name: "Masago", price: "" },
      { name: "Furikake (Japanese seasoning mix)", price: "" },
      { name: "Gebakken Uitjes", price: "" },
      { name: "Zeewiervlokken", price: "" },
      { name: "Lente Uitjes", price: "" },
      { name: "Sesam-Mix", price: "" },
      { name: "Chili Vlokken", price: "" },
      { name: "Pink Ginger", price: "" },
      { name: "Jalapeños", price: "" },
      { name: "Kimchi", price: "" }
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="menu-decoration left-decoration">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&crop=center" alt="Food decoration" />
        </div>
        <h1 className="menu-title">MENU</h1>
        <div className="menu-decoration right-decoration">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&crop=center" alt="Food decoration" />
        </div>
      </div>

      <div className="menu-tabs">
        <button
          className={`menu-tab ${activeTab === 'custom' ? 'active' : ''}`}
          onClick={() => setActiveTab('custom')}
        >
          MAAK JE EIGEN BOWL
        </button>
        <button
          className={`menu-tab ${activeTab === 'signature' ? 'active' : ''}`}
          onClick={() => setActiveTab('signature')}
        >
          SIGNATURE BOWLS
        </button>
      </div>

      <div className="menu-content">
        {activeTab === 'signature' && (
          <div className="signature-bowls">
            <div className="bowls-grid">
              {signatureBowls.map((bowl, index) => (
                <div key={index} className="bowl-card">
                  <h3 className="bowl-name">{bowl.name}</h3>
                  <p className="bowl-price">{bowl.price}</p>
                  <p className="bowl-ingredients">{bowl.ingredients}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'custom' && (
          <div className="custom-bowl">
            <div className="step-section">
              <div className="step-header">
                <span className="step-number">1</span>
                <h3 className="step-title">Kies een basis</h3>
              </div>
              <div className="step-content">
                <div className="basis-options">
                  {customBowlData.bases.map((base, index) => (
                    <div key={index} className="basis-item">
                      <span className="basis-name">{base.name}</span>
                      <span className="basis-prices">{base.prices}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="step-section">
              <div className="step-header">
                <span className="step-number">2</span>
                <h3 className="step-title">Kies 1 favoriete proteïne</h3>
              </div>
              <div className="step-content">
                <div className="protein-grid">
                  {customBowlData.proteins.map((protein, index) => (
                    <div key={index} className="protein-item">
                      <span className="protein-name">{protein.name}</span>
                      {protein.price && <span className="protein-price">{protein.price}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="step-section">
              <div className="step-header">
                <span className="step-number">3</span>
                <h3 className="step-title">Kies 4 mix-ins</h3>
                <p className="step-subtitle">Poké Burrito 3 mix-ins, Large bowl 5 mix-ins. Extra mix-ins: + € 0,75</p>
              </div>
              <div className="step-content">
                <div className="mixins-grid">
                  <div className="mixin-column">
                    <h4>Komkommer</h4>
                    {customBowlData.mixins.komkommer.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <div className="mixin-column">
                    <h4>Edamame</h4>
                    {customBowlData.mixins.edamame.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <div className="mixin-column">
                    <h4>Zeewiersalade</h4>
                    {customBowlData.mixins.zeewiersalade.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="step-section">
              <div className="step-header">
                <span className="step-number">4</span>
                <h3 className="step-title">Kies 1 favoriete dressing</h3>
                <p className="step-subtitle">Alle dressings zijn met zorg samengesteld. Extra dressing: + € 0,70</p>
              </div>
              <div className="step-content">
                <div className="dressing-grid">
                  {customBowlData.dressings.map((dressing, index) => (
                    <div key={index} className="dressing-item">
                      <span className="dressing-name">{dressing.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="step-section">
              <div className="step-header">
                <span className="step-number">5</span>
                <h3 className="step-title">Kies 3 toppings</h3>
                <p className="step-subtitle">Extra topping: + € 0,60</p>
              </div>
              <div className="step-content">
                <div className="toppings-grid">
                  {customBowlData.toppings.map((topping, index) => (
                    <div key={index} className="topping-item">
                      <span className="topping-name">{topping.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;