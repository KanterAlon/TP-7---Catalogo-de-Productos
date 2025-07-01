import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../utils/api'
function Navbar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(err => {
        console.error(err)
        setCategories([])
      })
  }, [])

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
          <li><Link to="/categorias">Categorías</Link></li>
          <li>
            Productos
            <ul className="dropdown">
              {/* Enlace “Ver todos” con clave fija */}
              <li key="all">
                <Link to="/productos">Ver todos</Link>
              </li>
              {/* Map sobre objetos: key única y renderizado de name */}
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link to={`/productos/${cat.slug}`}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar