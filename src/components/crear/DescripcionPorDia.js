import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useEffect } from 'react/cjs/react.development';
import { DescripcionEjercicio } from './DescripcionEjercicio';


const ListaEjercicios = styled.ul`
   width: 95%;
   max-width: 600px;
   padding: .3rem;
   margin: 1rem auto;
   background-color: var(--grisClaro);
   border-radius: 8px;

   h2{
       color: var(--blanco);
       padding: 1rem;
       border-radius: 8px;
       background-color: var(--amarillo);
   }
`

const descripcionDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

export const DescripcionPorDia = ({ entrenamiento }) => {


    const { nro, data } = entrenamiento;

    return (
        <>
            <ListaEjercicios>
                <h2>{descripcionDias[nro]}</h2>

                {
                    data.map(ejer => (

                        <DescripcionEjercicio
                            key={ejer.nro}
                            ejercicio={ejer}
                        />
                    ))
                }
            </ListaEjercicios>
        </>
    )
}
