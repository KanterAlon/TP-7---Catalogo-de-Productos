import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProducto from '../components/CardProducto'

function Productos() {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const url = categoria
      ? `https://dummyjson.com/products/category/${categoria}`
      : 'https://dummyjson.com/products'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductos(data.products || []))
      .catch(() => setProductos([]))
  }, [categoria])

  return (
    <section>
      <h1>Productos {categoria && `- ${categoria}`}</h1>
      <div className="grid">
        {productos.map((p) => (
          <CardProducto key={p.id} producto={p} />
        ))}
      </div>
    </section>
  )
}

export default Productos
