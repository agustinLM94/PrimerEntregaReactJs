import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import { Header } from "./components/header/Header";
import NotFound from "./components/NotFound";
import { ItemListContainer } from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { CartContext, CartProvider } from "./context/CartContext";
import {Checkout} from "./components/Checkout";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer  />} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/finalizar-compra" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;



