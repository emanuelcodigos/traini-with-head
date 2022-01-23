import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { crearRutinaContext, tuRutina, creandoTuRutina } from '../context/crearRutinaContext';

import { CrearRutina } from "../pages/CrearRutina";
import { CrearRutinaDia } from "../pages/CrearRutinaDia";
import { DescripcionRutinaCreada } from '../pages/DescripcionRutinaCreada';


export const DashboardRoutes = () => {

    const [stateRutina, setStateRutina] = useState({entrenamientos: []});

    const creandoTuRutina = (data) => {

        setStateRutina({
            ...stateRutina,
            ...data
        });
    }

    const establecerEntrenamientos = (data) => {
        
        setStateRutina({ 
            ...stateRutina,
            entrenamientos: [ 
                ...stateRutina.entrenamientos.filter(entreno => entreno.nro !== data.nro),
                data
            ]
        });
    }

    return (
        <crearRutinaContext.Provider
            value={{
                stateRutina,
                creandoTuRutina,
                establecerEntrenamientos
            }}
        >
            <Routes>
                <Route path="crear" element={<CrearRutina />} />
                <Route path="crear/entrenamientos" element={<CrearRutinaDia/>} />
                <Route path="crear/descripcion" element={<DescripcionRutinaCreada/>} />
            </Routes>
        </crearRutinaContext.Provider>
    )
}


