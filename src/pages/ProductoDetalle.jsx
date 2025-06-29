import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductoDetalle.css'

function ProductoDetalle() {
  const { idProducto } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${idProducto}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch(() => setProducto(null))
  }, [idProducto])

  if (!producto) return <p>Cargando...</p>

  return (
    <section className="product-detail">
      <h1>{producto.title}</h1>
      <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
    </section>
  )
}

export default ProductoDetalle