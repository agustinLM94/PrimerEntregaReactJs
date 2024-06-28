import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const calcularCantidad = () => {
    return carrito.length;
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarProducto = (producto) =>  {
    const productoEncontrado = carrito.find(prod => prod.id === producto.id);
    const indice= carrito.indexOf(productoEncontrado);

    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    setCarrito(nuevoCarrito);
  }

  
  return (
    <CartContext.Provider value={{carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto}}>
      {children}
    </CartContext.Provider>
  );
};
