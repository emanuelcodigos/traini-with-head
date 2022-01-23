import { useState } from "react"
import styled from '@emotion/styled';

export const Formulario = styled.form`
   width: 95%;
   max-width: 500px;
   margin: auto;
   padding: 1.5rem;
   color: var(--blanco);
   align-items: center;
   background-color: var(----grisClaro);

`;

export const DivLabel = styled.div`
   
   margin: 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;

   label{
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
   }
`; 
export const Input = styled.input`
   width: 100%;
   border-style: none;
   padding: 1.5rem;
   border-radius: 5px;
   border: 1px solid var(--gris2);
`;

export const Select = styled.select`
   width: 100%;
   border-style: none;
   padding: 1.5rem;
   border-radius: 5px;
   border: 1px solid var(--gris2);
`;

export const SelectMasInput = styled.div`
   margin: auto;
   display: grid;
   align-items: center;
   grid-template-columns: 60% 40%;
`;

export const TextArea = styled.textarea`
    padding: 1.5rem;
    width: 100%;
    min-height: 150px;
    border-style:none;
    border: 1px solid var(--gris2);
    border-radius: 5px;
`;

export const BotonSubmit = styled.button`
   margin: 2rem auto;
   width: 95%;
   border-style: none;
   border-radius: 8px;
   display: block;
   padding: 1.5rem;
   background-color: var(--amarillo);
   font-size: 2rem;
   font-weight: 700;
   color: var(--blanco);
   text-transform: uppercase;
`;

export const DivBotonesBackNext = styled.div`
   margin: 2rem auto;
   width: 95%;
   display: grid;
   grid-template-columns: 50% 50%;
   align-items: center;

   button{
      margin: 0 .5rem;
      width: 95%;
      border-style: none;
      border-radius: 8px;
      padding: 1.5rem;
      background-color: var(--azul);
      font-size: 2rem;
      font-weight: 700;
      color: var(--blanco);
      text-transform: uppercase;

   }
`;

export const ContenedorCheckBox = styled.div`
   display: grid;
   grid-template-columns: 33% 33% 33%;
   max-width: 90%;
`;
export const CheckBox = styled.div`
   display: flex;
   align-items: center;
   margin: 0 1rem;
   input{
    border-style: none;
    border-radius: 8px;
    padding: 1.5rem;
    margin-right: 1rem;
   };
   label{
       margin: 0;
       font-size: 2.1rem;
       font-weight: 700;
   }

`;

export const Titulo = styled.div`
width: 95%;
max-width: 500px;
paddig: 1.5rem;
margin: auto;
margin-top: 4rem;
h1{
    margin: 1rem auto;
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--amarillo);
}
h2{
    font-size: 3rem;
    font-weight: 700;
    margin: 0 2rem;

    span{
        font-weight: 900;
    }
}
`;
export const formLayouts = () => {
    return [Formulario,DivLabel, Input, Select,SelectMasInput, TextArea,CheckBox, BotonSubmit,ContenedorCheckBox, DivBotonesBackNext];
}

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}