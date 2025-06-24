import { Link } from 'react-router-dom'

function CardProducto({ producto }) {
  return (
    <div className="card-producto">
      <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
    </div>
  )
}

export default CardProducto