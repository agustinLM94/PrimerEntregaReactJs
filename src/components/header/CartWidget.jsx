import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = (props) => {
  
  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className="carrito" to="/carrito">
      🛒 {calcularCantidad()}
    </Link>
  );
}

export default CartWidget;
