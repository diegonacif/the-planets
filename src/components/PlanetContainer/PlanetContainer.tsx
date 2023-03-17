import { FC } from 'react';
import planetImg from '../../assets/earth.png';
import '../../App.scss';

interface IPlanetData {
    planet: string;
    resume: string;
    internalStructure: string;
    surfaceGeology: string;
    rotationTime: number;
    revolutionTime: number;
    radius: number;
    averageTemp: number
}

export const PlanetContainer:FC<IPlanetData> = (planet) => {
  return (
    <div className="planet-container">
      <section className="image-wrapper">
        <img src={planetImg} alt="" />
      </section>
      <section className="main-wrapper">
        <h1>{planet.planet}</h1>
        <p>{planet.resume}</p>
        <span>Fonte: Wikipedia</span>
        <div className="inner-content-links">
          <div className="inner-link selected">
            <span>01</span>
            <h4>Visão Geral</h4>
          </div>
          <div className="inner-link">
            <span>02</span>
            <h4>Estrutura Interna</h4>
          </div>
          <div className="inner-link">
            <span>03</span>
            <h4>Superfície</h4>
          </div>
        </div>
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
