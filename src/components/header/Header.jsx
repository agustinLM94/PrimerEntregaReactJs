import React from 'react';
import { NavBar } from './NavBar';
import CartWidget from './CartWidget'; 

export const Header = (props) => {
  return (
    <header className="header">
        <h1>Rulo-petshop</h1>
        <NavBar />
        < CartWidget />
    </header>
  );
}

