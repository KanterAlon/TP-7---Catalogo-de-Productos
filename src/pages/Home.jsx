
import React from 'react';
import './Home.css';

const Home = () => (
  <div className="layout">
    

    <section className="hero">
      <div className="hero-content container">
        <h1 className="hero-title">Bienvenido a Mi Tienda Futurista</h1>
        <p className="hero-subtitle">Descubre innovación sin límites.</p>
        <a href="#products" className="btn btn-primary">Explorar Ahora</a>
      </div>
    </section>

    <section id="features" className="features container">
      <div className="feature">
        <img src="https://source.unsplash.com/400x400/?technology" alt="Innovación" />
        <h2>Innovación</h2>
        <p>La tecnología más avanzada al alcance de tu mano.</p>
      </div>
      <div className="feature">
        <img src="https://source.unsplash.com/400x400/?design" alt="Diseño" />
        <h2>Diseño</h2>
        <p>Estética vanguardista con funcionalidad superior.</p>
      </div>
      <div className="feature">
        <img src="https://source.unsplash.com/400x400/?performance" alt="Rendimiento" />
        <h2>Rendimiento</h2>
        <p>Potencia y eficiencia para cada desafío.</p>
      </div>
    </section>

    <section id="products" className="products container">
      <h2 className="section-title">Nuestros Productos</h2>
      <div className="grid">
        {/* Ejemplo de Product Card */}
        <div className="card-producto">
          <img src="https://source.unsplash.com/300x300/?product" alt="Producto 1" />
          <h3>Producto 1</h3>
          <p>Descripción breve del producto 1.</p>
          <a href="#" className="btn btn-outline">Más información</a>
        </div>
        {/* Repite según necesidad */}
      </div>
    </section>

    <footer className="footer container">
      <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  </div>
);

export default Home;