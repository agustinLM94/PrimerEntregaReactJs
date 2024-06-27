import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  // Usando el hook useContext para acceder al contexto CartContext
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div>
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.nombre}: ${prod.precio}</h1>
        </div>
      ))}
      {}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar Carrito</button>
        </>
      ) : (
        <h2>Carrito vacío</h2>
      )}
    </div>
  );
};

export default Carrito;

