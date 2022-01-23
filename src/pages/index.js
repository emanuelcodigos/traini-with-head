import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import {FcInfo, FcPlus,FcSearch} from 'react-icons/fc';


import { NavFooter } from '../components/layout/NavFooter';



const ContenedorHeader = styled.div`
   padding-top: 1.5rem;
   padding-bottom: 1rem;
   background-color: var(--grisOscuro);
`;

const ImagenPerfil = styled.div`
margin: 0 1rem;
display: grid;
grid-template-columns: 80% 20%;

img{    
    width: 70px;
    border-radius: 10px;
    padding: .5rem;
    background-color: var(--grisOscuro);
    right: 0;
    cursor: pointer;
}
`;

const Titulo = styled.div`
    margin: 0 3rem;
    font-size: 2.3rem;
    color: var(--grisClaro);
    font-weight: 700;
    h1{
        color: var(--amarillo);
        margin: 0;
        margin-bottom: -1rem;
    }
`;

const ContenedorBody = styled.div`
   padding: 1rem;
   margin: auto;
   height: 100vh;
   background-color: var(--grisClaro);
   border-radius: 20px 20px 0 0;
   color: var(--grisOscuro);
`;
const ContendorTusRutinas = styled.div` 
width: 95%;
margin: auto;

   h3{
    font-weight: 700;
    font-size: 2rem;
   }

   div{
    display: flex;
    overflow-x: auto;
    cursor: pointer;
   }
`;


const CardRutina = styled.div`
   margin:  0 .5rem;
   min-width: 130px;
   max-width: 150px;
   border-radius: 8px;
   background-color: var(--blanco);

   img{
       height: 100%;
       width: 100%;
   }
`;

const ContenedorOperaciones = styled.div`
  margin: 3rem 2rem auto auto;
  width: 90%;
  max-width: 600px;
  align-items: center;
  display: grid;
  grid-template-columns: 60% 40%;
  color: var(--blanco);
`;
const InfoPersonal = styled.div`
   margin: auto;
   border-radius: 8px;
   background-color: var(--gris);
   height: 100%;
   width: 90%;

   div{
    margin: .4rem;
    display: flex;
    align-items: center;
    h4{
        margin: 0 .3rem;
        font-size: 2rem;
        font-weight: 700;
    }
   }
   p{
       margin: 0 1rem;
       margin-bottom: .4rem;

       span{
           font-weight: 600;
       }
   }
   button{
       border-style: none;
       width: 90%;
       display:block;
       margin: .6rem auto;
       padding: .8rem;
       background-color: var(--amarillo);
       border-radius: 5px;
       font-weight: 700;
       text-transform: uppercase;
       color: var(--blanco);
   }
`;

const Operaciones = styled.div`
  margin: auto;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 50% 50%;

`;

const Operacion = styled.div`
   padding: .5rem;
   margin: .5rem 0;
   border-radius: 8px;
   background-color: var(--gris3);
   min-height: 100px;
   width: 90%;
   max-width: 200px;
   position: relative;

   p{
       position: absolute;
       font-size: 2rem;
       font-weight: 700;
       margin: 0; padding: 0;
       bottom: 0;
       color: var(--grisOscuro);
   }
   div{
       position: absolute;
       right:0;
       margin: auto;
   }

`;

export const Home = () => {
    
    const navigate = useNavigate();

    const handleTienda = () => {
        navigate('/tienda');
    }

    const handleCrear = () => {
        navigate('/crear');
    }

    return (
        <div style={{margin:'auto'}}>
            
            <ContenedorHeader>
                <ImagenPerfil>
                    <div></div>
                    <img src='https://www.udoi.cl/wp-content/uploads/2016/10/user.png' />
                </ImagenPerfil>
                <Titulo><h1>Hola,</h1><h2>Emanuel</h2></Titulo>
            </ContenedorHeader>

            <ContenedorBody>
                <ContendorTusRutinas>
                    <h3>Tus Rutinas</h3>
                    <div>
                        <CardRutina><img src='https://i0.wp.com/powerbuildingoficial.com/wp-content/uploads/2019/09/min-calentamiento-activacion-liberacion-pbo.jpg?fit=646%2C720&ssl=1' /></CardRutina>
                        <CardRutina><img src='https://i0.wp.com/powerbuildingoficial.com/wp-content/uploads/2022/01/recu1.png?fit=452%2C733&ssl=1' /></CardRutina>
                        <CardRutina><img src='https://i0.wp.com/powerbuildingoficial.com/wp-content/uploads/2022/01/Recurso-42@2x.png?fit=453%2C733&ssl=1' /></CardRutina>
                    </div>

                </ContendorTusRutinas>
                <ContenedorOperaciones>
                    <InfoPersonal>
                        <div><FcInfo size='2.5rem'/><h4>Sobre vos</h4></div>
                        <p><span>Edad: </span>21 años</p>
                        <p><span>Peso: </span>80 kg</p>
                        <p><span>Altura: </span>179 cm</p>
                        <p><span>Objetivo: </span>Aumento masa muscular</p>
                        <button>Modificar</button>
                        
                    </InfoPersonal>
                    <Operaciones>
                        <Operacion onClick={handleTienda}>
                            <div><FcSearch size='6rem'/></div>
                            <p>Buscar Rutinas</p>
                           
                        </Operacion>
                        <Operacion onClick={handleCrear}>
                            <div><FcPlus size='6rem'/></div>
                            <p>Crear Rutina</p>
                        </Operacion>
                    </Operaciones>
                </ContenedorOperaciones>

                <NavFooter/>
            </ContenedorBody>
        </div>
    )
}
