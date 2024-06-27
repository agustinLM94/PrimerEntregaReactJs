import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Item = ({ producto }) => {
 
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregar = () => {
    agregarAlCarrito(producto); 
  };

  return ( 
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`}>Ver más</Link>
      <button onClick={handleAgregar}>Add to cart</button>
    </div>
  );
};
