import React from 'react';
import './index.css';

const PracticaEjemplo = () => {
    return (
        <div className="contenedor">

            <header className="header-sitio">
                    <h1>Nombre Sitio</h1>
                    <nav>
                            <a href="">Inicio </a>
                            <a href="">Nosotros </a>
                            <a href="">Servicios </a>
                            <a href="">Portafolio </a>
                            <a href="">Contacto </a>
                    </nav>
            </header>


            <main className="contenedor-flex">
                <div className="principal">
                    <div className="servicios">
                        <div className="servicio elemento-1">
                            <h2>Servicio 1</h2>
                        </div>
                        <div className="servicio elemento-2">
                            <h2>Servicio 2</h2>
                        </div>
                        <div className="servicio elemento-3">
                            <h2>Servicio 3</h2>
                        </div>
                    </div>
                </div>

                <aside>
                    <h2>De nuestro blog</h2>
                    <ul>
                        <li><a href="#">Entrada 1</a></li>
                        <li><a href="#">Entrada 2</a></li>
                        <li><a href="#">Entrada 3</a></li>
                        <li><a href="#">Entrada 4</a></li>
                        <li><a href="#">Entrada 5</a></li>
                    </ul>
                </aside>
            </main>

            <footer>
                <p>Todos los derechos reservados</p>
            </footer>
    
        </div>
    );
}

export default PracticaEjemplo;