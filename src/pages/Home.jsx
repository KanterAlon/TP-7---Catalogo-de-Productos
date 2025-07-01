import React, { useEffect, useState } from 'react';
import './Home.css';

const slides = [
  {
    img:
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Innovación sin límites'
  },
  {
    img:
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Diseño vanguardista'
  },
  {
    img:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Rendimiento superior'
  }
]

const Home = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="layout">
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Bienvenido a nuestra tienda de productos.</h1>
          <p className="hero-subtitle">Descubrí los mejores productos innovadores sin límites.</p>
          <a href="productos" className="btn btn-primary">Explorar Ahora</a>
        </div>
      </section>

      <section className="carousel container">
        <button className="arrow left" onClick={prevSlide}>&#10094;</button>
        <div className="slides">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
              <img src={slide.img} alt={slide.caption} loading="lazy" />
              <p className="caption">{slide.caption}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>&#10095;</button>
      </section>

      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;