import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriasRef = collection(db, 'categorias');
        const querySnapshot = await getDocs(categoriasRef);

        const categoriasData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCategories(categoriasData);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
        setError('Error al cargar las categorías. Por favor, intenta nuevamente más tarde.');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Dependencia vacía para ejecutar el efecto solo una vez al montar el componente

  if (loading) {
    return <p>Cargando categorías...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Inicio
          </NavLink>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <NavLink
              to={`/category/${category.id}`} 
              activeClassName="active"
              className="nav-link"
            >
              {category.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
