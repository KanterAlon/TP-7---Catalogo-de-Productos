import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProducto from '../components/CardProducto'
import CardCategoria from '../components/CardCategoria'
import { fetchCategories } from '../utils/api'

function Productos() {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    if (categoria) {
      fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(res => res.json())
        .then(data => setProductos(data.products || []))
        .catch(() => setProductos([]))
    } else {
      fetchCategories()
        .then(setCategorias)
        .catch(() => setCategorias([]))
    }
  }, [categoria])

  return categoria ? (
    <section>
      <h1>Productos - {categoria}</h1>
      <div className="grid">
        {productos.map(p => (
          <CardProducto key={p.id} producto={p} />
        ))}
      </div>
    </section>
  ) : (
    <section>
      <h1>Categorías</h1>
      <div className="grid">
        {categorias.map(cat => (
          <CardCategoria key={cat.slug} categoria={cat} />
        ))}
      </div>
    </section>
  )
}

export default Productos
