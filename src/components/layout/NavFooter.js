import React from 'react';
import styled from '@emotion/styled';
import {AiFillHome} from 'react-icons/ai';
import {RiTimerFill} from 'react-icons/ri';
import {FaNotesMedical} from 'react-icons/fa';


const ContenedorNav = styled.div`
   width: 95%;
   margin: auto;
   padding: 1rem;
   position: fixed;
   bottom: 5px;
   z-index: 9999;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: var(--grisOscuro);
   
   @media(min-width: 500px){
       display: none;
   }
`;

const BotonAccion = styled.button`
   font-size: 1.2rem;
   font-weight: 700;
   border-style: none;
   background-color: transparent;
   color: var(--blanco);
   display: flex;
   align-items: center;
   flex-direction: column;

   p{
       margin: 0; padding: 0;
       margin-top: .4rem;
   }

`;

export const NavFooter = () => {
    return (
        <ContenedorNav>
            <BotonAccion><AiFillHome size='2.5rem'/><p>Inicio</p></BotonAccion>
            <BotonAccion><RiTimerFill size='2.5rem'/><p>Reloj</p></BotonAccion>
            <BotonAccion><FaNotesMedical size='2.5rem'/><p>Notas</p></BotonAccion>
        </ContenedorNav>
    )
}
