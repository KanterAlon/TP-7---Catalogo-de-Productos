import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]))
  }, [])

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quienes-somos">Quienes Somos</Link>
          </li>
          <li>
            Productos
            <ul className="dropdown">
              <li>
                <Link to="/productos">Ver todos</Link>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to={`/productos/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
