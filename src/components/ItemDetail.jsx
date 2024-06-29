import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ producto }) => {
  
  const {carrito, agregarAlCarrito} = useContext(CartContext);

  const handleAgregar = () => {
    agregarAlCarrito(producto);
  };

  return (
    <div className='container-item-detail'>
      <img className='img-card' src={producto.imagen} alt={producto.nombre} />
      <h1 className='title-card'>{producto.nombre}</h1>
      <p className='descripcion.card'>{producto.descripcion}</p>
      <p className='precio-card'>${producto.precio}</p>
      <button onClick={handleAgregar} className='link-card'>Add to cart</button>
    </div>
  );
};
