import React, { Fragment } from 'react';
import './index2.css'

const FlexGrow2 = () => {

    return (
        
        <Fragment>
        
            <h1>Flex Grow y Flex</h1>

            <div className="contenedor">
                <main className="nosotros">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sunt a, veniam nulla eius veritatis alias culpa similique odio tenetur unde iure, voluptates necessitatibus, deserunt ea ullam dicta fuga? Est.</p>
                

                    <h3>Servicios</h3>

                    <div className="servicios">
                        <div className="servicio">
                            <h3>Servicio 1</h3>
                        </div>
                        <div className="servicio doble">
                            <h3>Servicio 2</h3>
                        </div>
                        <div className="servicio">
                            <h3>Servicio 3</h3>
                        </div>
                    </div>
                </main>

                <aside className="sidebar">
                    <h2>Contenido Lateral</h2>
                </aside>
            </div>

        
        </Fragment>
    );

}

export default FlexGrow2; 