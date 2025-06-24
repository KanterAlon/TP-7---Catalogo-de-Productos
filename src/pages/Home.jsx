import React from 'react';
import './Home.css';

const Home = () => (
  <div className="layout">
    

    <section className="hero">
      <div className="hero-content container">
        <h1 className="hero-title">Bienvenido a nuestra tienda de productos.</h1>
        <p className="hero-subtitle">Descubrí los mejores productos innovadores sin límites.</p>
        <a href="productos" className="btn btn-primary">Explorar Ahora</a>
      </div>
    </section>

    <section id="features" className="features container">
      <div className="feature">
        <img src="src\assets\innovation.png" alt="Innovación" loading="lazy" />
        <h2>Innovación</h2>
        <p>La tecnología más avanzada al alcance de tu mano.</p>
      </div>
      <div className="feature">
        <img src="src\assets\design.png" alt="Diseño" loading="lazy" />
        <h2>Diseño</h2>
        <p>Estética vanguardista con funcionalidad superior.</p>
      </div>
      <div className="feature">
        <img src="src\assets\performance.png" alt="Rendimiento" loading="lazy" />
        <h2>Rendimiento</h2>
        <p>Potencia y eficiencia para cada desafío.</p>
      </div>
    </section>


    <footer className="footer container">
      <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  </div>
);

export default Home;