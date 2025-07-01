import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Categorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map(slug => ({
          slug,
          name: slug.replace(/-/g, ' ')
        }))
        setCategorias(mapped)
      })
      .catch(() => setCategorias([]))
  }, [])

  return (
    <section>
      <h1>Categorías</h1>
      <ul>
        {categorias.map(cat => (
          <li key={cat.slug}>
            <Link to={`/productos/${cat.slug}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categorias