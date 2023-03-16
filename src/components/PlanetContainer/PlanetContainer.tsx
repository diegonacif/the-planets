import planetImg from '../../assets/earth.png';
import '../../App.scss';

export const PlanetContainer = () => {
  return (
    <div className="planet-container">
      <section className="image-wrapper">
        <img src={planetImg} alt="" />
      </section>
      <section className="main-wrapper">
        <h1>Terra</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et amet dolor voluptates alias! Suscipit, culpa eum! Autem repellat consequuntur veritatis vero temporibus quo animi, sed nemo dolorum error possimus saepe!</p>
        <span>Fonte: Wikipedia</span>
        <div className="inner-content-links">
          <div className="inner-link">Visão Geral</div>
          <div className="inner-link">Estrutura Interna</div>
          <div className="inner-link">Superfície</div>
        </div>
      </section>
      <section className="info-cards-wrapper">
        <div className="info-card">
          <h5>Tempo de Rotação</h5>
          <span>0.99 dias</span>
        </div>
        <div className="info-card">
          <h5>Tempo de Translação</h5>
          <span>365.26 dias</span>
        </div>
        <div className="info-card">
          <h5>Raio</h5>
          <span>6371 KM</span>
        </div>
        <div className="info-card">
          <h5>Temperatura média</h5>
          <span>16ºC</span>
        </div>
      </section>
    </div>
  )
}
