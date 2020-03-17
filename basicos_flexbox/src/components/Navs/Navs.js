import React from 'react';
import './index.css';

const Navs = () => {
    return (
        <div className="contenedor">

            <h1>Menú Sencillo</h1>
            <nav className="sencillo">
                <ul>
                    <li><a href="http://localhost:3000/">Inicio</a></li>
                    <li><a href="http://localhost:3000/">Nosotros</a></li>
                    <li><a href="http://localhost:3000/">Servicios</a></li>
                    <li><a href="http://localhost:3000/">Contacto</a></li>
                    <li><a href="http://localhost:3000/">Tienda Virtual</a></li>
                    <li><a href="http://localhost:3000/">Asistencia</a></li>
                </ul>
            </nav>

            <h2>Con Iconos</h2>
            <nav className="iconos">
                <ul>
                    <li><a href="http://localhost:3000/">Inicio</a></li>
                    <li><a href="http://localhost:3000/">Contacto</a></li>
                    <li><a href="http://localhost:3000/">Tienda Virtual</a></li>
                    <li><a href="http://localhost:3000/">Asistencia</a></li>
                </ul>
            </nav>

            <h2>Dropdown Menu</h2>
            <nav className="dropdown">
                <ul>
                    <li><a href="http://localhost:3000/">Inicio</a></li>
                    <li><a href="http://localhost:3000/">Nosotros</a>
                        <ul>
                            <li><a href="http://localhost:3000/">Misión</a></li>
                            <li><a href="http://localhost:3000/">Visión</a></li>
                            <li><a href="http://localhost:3000/">Valores</a></li>
                        </ul>
                    </li>
                    <li><a href="http://localhost:3000/">Tienda Virtual</a>
                        <ul>
                            <li><a href="http://localhost:3000/">Producto 1</a></li>
                            <li><a href="http://localhost:3000/">Producto 2</a></li>
                            <li><a href="http://localhost:3000/">Producto 3</a></li>
                        </ul>
                    </li>
                    <li><a href="http://localhost:3000/">Asistencia</a></li>
                </ul>
            </nav>

            <h2>Redes Sociales</h2>
            <nav id="iconos">
                <ul>
                    <li>
                        <a href="http://facebook.com"><span> Facebook</span></a>
                    </li>
                    <li>
                        <a href="http://twitter.com"><span> Twitter</span></a>
                    </li>
                    <li>
                        <a href="http://youtube.com"><span> YouTube</span></a>
                    </li>
                    <li>
                        <a href="http://instagram.com"><span> Instagram</span></a>
                    </li>
                    <li>
                        <a href="http://pinterest.com"><span> Pinterest</span></a>
                    </li>
                </ul>
            </nav>

            <h2>Dropdown Menu con Redes Sociales</h2>
            <nav id="iconos">
                <ul>
                    <li><a href="http://localhost:3000/">Inicio</a></li>
                    <li><a href="http://localhost:3000/">Nosotros</a>
                        <ul>
                            <li><a href="http://localhost:3000/">Misión</a></li>
                            <li><a href="http://localhost:3000/">Visión</a></li>
                            <li><a href="http://localhost:3000/">Valores</a></li>
                        </ul>
                    </li>
                    <li><a href="http://localhost:3000/">Tienda Virtual</a>
                        <ul>
                            <li><a href="http://localhost:3000/">Producto 1</a></li>
                            <li><a href="http://localhost:3000/">Producto 2</a></li>
                            <li><a href="http://localhost:3000/">Producto 3</a></li>
                        </ul>
                    </li>
                    <li><a href="http://localhost:3000/">Asistencia</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="http://facebook.com"><span> Facebook</span></a>
                    </li>
                    <li>
                        <a href="http://twitter.com"><span> Twitter</span></a>
                    </li>
                    <li>
                        <a href="http://youtube.com"><span> YouTube</span></a>
                    </li>
                    <li>
                        <a href="http://instagram.com"><span> Instagram</span></a>
                    </li>
                    <li>
                        <a href="http://pinterest.com"><span> Pinterest</span></a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navs;