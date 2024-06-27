import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ producto }) => {
  
  const {carrito, agregarAlCarrito} = useContext(CartContext);

  const handleAgregar = () => {
    agregarAlCarrito(producto);
  };

  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button onClick={handleAgregar}>Add to cart</button>
    </div>
  );
};
