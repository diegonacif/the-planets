import { FC, SetStateAction, useEffect, useState } from 'react';
import mercuryImg from '../../assets/mercury.png';
import venusImg from '../../assets/venus.png';
import earthImg from '../../assets/earth.png';
import marsImg from '../../assets/mars.png';
import jupiterImg from '../../assets/jupiter.png';
import saturnImg from '../../assets/saturn.png';
import uranusImg from '../../assets/uranus.png';
import neptuneImg from '../../assets/neptune.png';
import plutoImg from '../../assets/pluto.png';
import { useWindowSize } from '../../hooks/useWindowSize';
import '../../App.scss';
import { Gear, Globe, Mountains } from '@phosphor-icons/react';

interface IPlanetData {
    planet: string;
    resume: string;
    internalStructure: string;
    surfaceGeology: string;
    rotationTime: number;
    revolutionTime: number;
    radius: number;
    averageTemp: number;
    currentMenu: string;
    setCurrentMenu: React.Dispatch<SetStateAction<string>>;
}

export const PlanetContainer:FC<IPlanetData> = (planet) => {
  const windowSize = useWindowSize();
  console.log(windowSize);

  return (
    <div className="planet-container">
      <section className="image-wrapper">
        <img 
          src={
            planet.planet === "Mercúrio" ?
            mercuryImg :
            planet.planet === "Vênus" ?
            venusImg :
            planet.planet === "Terra" ?
            earthImg :
            planet.planet === "Marte" ?
            marsImg :
            planet.planet === "Júpiter" ?
            jupiterImg :
            planet.planet === "Saturno" ?
            saturnImg :
            planet.planet === "Urano" ?
            uranusImg :
            planet.planet === "Netuno" ?
            neptuneImg :
            planet.planet === "Plutão" ?
            plutoImg :
            ""
          } 
          alt="" 
        />
      </section>
      <section className="main-wrapper">
        <div className="inner-content-text">
          <div className="inner-content-title">
            <h1>{planet.planet}</h1>
            {
              windowSize.width <= 850 &&
              <div className="inner-content-small-links">
                <div 
                  className={`inner-small-link ${planet.currentMenu === 'general' && 'selected'}`} 
                  onClick={() => planet.setCurrentMenu('general')}
                >
                  <Globe size={36} weight="duotone" />
                  {/* <h4>Visão Geral</h4> */}
                </div>
                <div 
                  className={`inner-small-link ${planet.currentMenu === 'internalStructure' && 'selected'}`} 
                  onClick={() => planet.setCurrentMenu('internalStructure')}
                >
                  <Gear size={36} weight="duotone" />
                  {/* <h4>Estrutura Interna</h4> */}
                </div>
                <div 
                  className={`inner-small-link ${planet.currentMenu === 'surface' && 'selected'}`} 
                  onClick={() => planet.setCurrentMenu('surface')}
                >
                  <Mountains size={36} weight="duotone" />
                  {/* <h4>Superfície</h4> */}
                </div>
              </div>
            }
          </div>
          <p>
            {
            planet.currentMenu === 'general' ?
            planet.resume :
            planet.currentMenu === 'internalStructure' ?
            planet.internalStructure :
            planet.currentMenu === 'surface' ?
            planet.surfaceGeology :
            'menu not found'
            }
          </p>
          <span>Fonte: Wikipedia</span>
        </div>
        {
          windowSize.width > 850 &&
          <div className="inner-content-links">
            <div 
              className={`inner-link ${planet.currentMenu === 'general' && 'selected'}`} 
              onClick={() => planet.setCurrentMenu('general')}
            >
              <span>01</span>
              <h4>Visão Geral</h4>
            </div>
            <div 
              className={`inner-link ${planet.currentMenu === 'internalStructure' && 'selected'}`} 
              onClick={() => planet.setCurrentMenu('internalStructure')}
            >
              <span>02</span>
              <h4>Estrutura Interna</h4>
            </div>
            <div 
              className={`inner-link ${planet.currentMenu === 'surface' && 'selected'}`} 
              onClick={() => planet.setCurrentMenu('surface')}
            >
              <span>03</span>
              <h4>Superfície</h4>
            </div>
          </div>
        }
      </section>
      <section className="info-cards-wrapper">
        <div className="info-card">
          <h5>TEMPO DE ROTAÇÃO</h5>
          <span>{planet.rotationTime} dias</span>
        </div>
        <div className="info-card">
          <h5>TEMPO DE TRANSLAÇÃO</h5>
          <span>{planet.revolutionTime} dias</span>
        </div>
        <div className="info-card">
          <h5>RAIO</h5>
          <span>{planet.radius} KM</span>
        </div>
        <div className="info-card">
          <h5>TEMPERATURA MÉDIA</h5>
          <span>{planet.averageTemp}ºC</span>
        </div>
      </section>
    </div>
  )
}
