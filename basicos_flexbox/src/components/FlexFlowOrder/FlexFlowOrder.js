import React from 'react';
import './index.css'

const FlexFlowOrder = () => {

    return (
        
        <div className="contenedor">

            <h1>FlexFlowOrder</h1>

            <div className="contenedor-flex">

                <div className="elemento-flex elemento-1">
                    <h2>Servicio 1</h2>
                </div>

                <div className="elemento-flex elemento-2">
                    <h2>Servicio 2</h2>
                </div>

                <div className="elemento-flex elemento-3">
                    <h2>Servicio 3</h2>
                </div>

            </div> 

        </div>
    );

}

export default FlexFlowOrder;