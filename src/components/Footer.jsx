import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer_top">
            <div>
                <h2>RULO PETSHOP</h2>
                <p> Siempre al cuidado de los animales.</p>
            </div>
            <div class="direccion">
                <p>UBICACION: ENTRE RIOS 2425</p>
                <p>RULOPETSHOP@GMAIL.COM</p>
            </div>
        </div>
        <div class="footer_bottom">
            <div>
                <p>©copyright.Todos los derechos reservados 2024</p>
            </div>
            <div class="icons">
                <ul>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                </ul>
            </div>
        </div>
            
    </footer>
  )
}

export default Footer