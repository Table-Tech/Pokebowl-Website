import React from 'react';
import './OverOns.css';

const OverOns: React.FC = () => {
  return (
    <div className="over-ons-page">
      <div className="over-ons-container">
        <div className="over-ons-content">
          <h1 className="over-ons-title">OVER ONS</h1>
          <h2 className="over-ons-subtitle">De eerste Hawaiiaanse Poké Bowl in Nederland</h2>

          <div className="over-ons-text">
            <p>
              Met een achtergrond in de accountancy en de ICT zul je misschien niet snel verwachten dat wij
              Benelux first Hawaiian Poké Bowl hebben geopend, maar het is toch echt zo! Tijdens een vakantie in
              New York liepen wij bij toeval langs een poké bowl zaak, waar hordes mensen voor de deur stonden.
              Wij hadden eerlijk gezegd nog nooit van het gerecht 'poké' gehoord en waren zó onder de indruk van
              de rijen, dat we dit uiteraard móésten proberen.
            </p>

            <p>
              Na de eerste hap dachten wij allebei hetzelfde: "Dit is verrukkkelijk! Waarom hebben we dit niet in
              Nederland?!". Vanaf dat moment liet het poké concept ons niet meer los. Bij thuiskomst hebben wij het
              internet afgestroind, met de nodige Hawaiianen gesproken en oneindig veel Poké Bowls gemaakt én
              uiteraard gegeten. Uiteindelijk was onze liefde voor Poké dusdanig groot, dat wij besloten hebben het
              roer om te gooien en onze eigen seafood shop – Poké Bowl Original – te openen.
            </p>

            <p>
              In augustus 2016 werd Benelux first Hawaiian Poké Bowl aan de Rotterdamse Hoogstraat een feit.
              Rijen dik stonden mensen voor de deur. Aangezien we hier niet van hadden durven dromen en de
              vestiging aan de Hoogstraat al snel uit zijn voegen groeide, werd het de hoogste tijd voor nóg een
              vestiging. Deze tweede Rotterdamse vestiging opende in augustus 2017 zijn deuren aan de Karel
              Doormanstraat. Inmiddels kun je ook aan de Jezusstraat in hartje Antwerpen én bij de Nieuwstraat in
              Eindhoven van de heerlijkste Poké gerechten genieten. Daarnaast hebben we nog een vestiging op een
              van de hipste plekken in Amsterdam, aan de Ferdinand Bolstraat. Recentelijk zijn we van ons eerste
              vestiging aan de Hoogstraat verhuisd naar de gezellige Pannekoekstraat.
            </p>

            <p>
              We zijn vastberaden om de allerbeste ingrediënten te serveren met dagverse vis naar keuze. Ons team
              werkt nauw samen met leveranciers om de beste vangst te garanderen. We hopen dat jullie, net zoals
              wij, kunnen genieten van dit prachtige gezonde gerecht uit Hawaï.
            </p>
          </div>
        </div>

        <div className="over-ons-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=600&fit=crop&crop=center"
            alt="Delicious Poké Bowl met verse ingrediënten"
            className="pokebowl-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OverOns;