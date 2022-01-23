import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const ContenedorEjercicio = styled.li`
   
   color: var(--negro);
   margin: auto;
   width: 90%;
   padding-bottom: 1rem;
   border-bottom: 1px solid var(--grisOscuro);

   h3{
      padding: 0; margin: .3rem;
      text-transform: uppercase;
      font-weigth: 700;
   }
   p{
      margin: 0;
      text-align: center;
   }

`;

export const DescripcionEjercicio = ({ ejercicio }) => {

   return (
      <ContenedorEjercicio>
         <h3>{ejercicio.nombre}</h3>
         <p>
            {
               ejercicio.series.map(serie => (
                  ` [${serie.data.cantidad} - ${serie.data.modo}] `
               ))
            }
         </p>
      </ContenedorEjercicio>
   )
}
