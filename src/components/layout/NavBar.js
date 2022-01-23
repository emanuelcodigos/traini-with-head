import React, { useRef, useContext } from 'react';
import styled from '@emotion/styled';
import {CgDetailsMore} from 'react-icons/cg';

import { firebaseContext} from '../../firebase/index';


const ContenedorNav = styled.div`
   position: fixed;
   z-index:99999;
   width: 200px;
   height: 100vh;
   top:0;
   background-color: var(--grisOscuro);
   padding: 0;

   transition: all 200ms linear;

   ul{
       margin-top: 5rem;
   }
   li{
       list-style:none;
       color: rgba(230,230,230, .9);
       text-align: center;
       padding: 15px 10px;
       border-bottom: 1px solid rgba(100,100,100, .3);
   }

`;

const DivToggle = styled.div`

padding:2rem;
cursor: pointer;
position: absolute;
left: 200px;

div{
    align-items:center;
    border-radius: 10px;
    padding: 1rem;
    background-color: var(--grisOscuro);
}
`;

export const Navbar = () => {
    
    const {autenticado} = useContext(firebaseContext);

    const btnRef = useRef(null);
    
    const handleOcultar = () => {
        btnRef.current.classList.toggle('activeNav');
    }
 
    return (

        <>
            <ContenedorNav ref={btnRef} className="navInicial">
                <DivToggle onClick={handleOcultar}>
                    {/*<span>&#9776;</span>*/}
                    <div><CgDetailsMore size='4rem' color='white'/></div>
                </DivToggle>

                <ul>
                    {
                        (autenticado) && 
                        <>
                        {(autenticado.ok) && <li>{`Hola, ${autenticado.usuario.displayName}`}</li>}
                        </>
                    }
                    <li>Cronometro</li>
                    <li>Mi cuenta</li>
                    <li>Ayuda</li>
                </ul>
            </ContenedorNav>
        </>
    )
}
