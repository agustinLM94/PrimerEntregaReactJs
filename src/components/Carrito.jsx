import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => {
        return (
          <Fragment key={prod.id}>
            <h1 className='title-carrito'>{prod.nombre}: ${prod.precio}</h1>
            <button onClick={() => { eliminarProducto(prod)}} className='button-eliminar'>❎</button>
          </Fragment>
        )
        
        })}
      {
        carrito.length > 0 ?
        <>
          <h2 className='titulo-total'>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito} className='button-card'>Vaciar carrito</button>
          <Link to="/finalizar-compra" className='link-card'>Finalizar compra</Link>
        </> :
        <h2 className='title-carrito-vacio'>Carrito vacío 🛒</h2>
      }
    </div>
  )
}

export default Carrito
