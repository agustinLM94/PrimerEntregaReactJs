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
      <img className='img-card' src={producto.imagen} alt={producto.nombre} />
      <h2 className='title-card'>{producto.nombre}</h2>
      <p className='precio-card'>${producto.precio}</p>
      <p className='descripcion-card'>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`} className='link-card'>Ver más</Link>
      <button onClick={handleAgregar} className='button-card'>Add to cart</button>
    </div>
  );
};
