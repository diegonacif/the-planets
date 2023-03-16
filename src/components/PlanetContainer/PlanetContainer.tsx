import planetImg from '../../assets/earth.png';
import '../../App.scss';

export const PlanetContainer = () => {
  return (
    <div className="planet-container">
      <section className="image-wrapper">
        <img src={planetImg} alt="" />
      </section>
      <section className="main-wrapper">
        <h1>TERRA</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et amet dolor voluptates alias! Suscipit, culpa eum! Autem repellat consequuntur veritatis vero temporibus quo animi, sed nemo dolorum error possimus saepe!</p>
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
          <span>0.99 dias</span>
        </div>
        <div className="info-card">
          <h5>TEMPO DE TRANSLAÇÃO</h5>
          <span>365.26 dias</span>
        </div>
        <div className="info-card">
          <h5>RAIO</h5>
          <span>6371 KM</span>
        </div>
        <div className="info-card">
          <h5>TEMPERATURA MÉDIA</h5>
          <span>16ºC</span>
        </div>
      </section>
    </div>
  )
}
