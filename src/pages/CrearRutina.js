import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsQuestionOctagonFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

import {crearRutinaContext} from '../context/crearRutinaContext';
import { useForm, Formulario, DivLabel, Input, Select, SelectMasInput, TextArea, CheckBox, BotonSubmit,ContenedorCheckBox,Titulo } from '../hooks/useForm';


export const CrearRutina = () => {

    const {tuRutina,creandoTuRutina} = useContext(crearRutinaContext);
    const navigate = useNavigate();

    const [formValues, handleInputChange] = useForm({ objetivo: '', duracion: '', duracionModo: '', descripcion: '' });
    const {objetivo, duracion, duracionModo, descripcion} = formValues;

    const [stateDiasEntrenamiento, setStateDiasEntrenamiento] = useState([]);
    
   
    const addDiaEntrenamiento = ({target}) => {
       
        if(target.checked){
            if(!stateDiasEntrenamiento.includes(target.value)){
                setStateDiasEntrenamiento([ 
                    ...stateDiasEntrenamiento,
                    target.value
                ]);
            }
        }else{
            if(stateDiasEntrenamiento.includes(target.value)){
                setStateDiasEntrenamiento(
                    stateDiasEntrenamiento.filter(dia => dia !== target.value)
                );
            }
        }
    }

    const handleSiguiente = (e) => {
        e.preventDefault();
        
        if(objetivo.trim() === '' || duracion.trim() === '' || duracionModo.trim() === ''){
            return Swal.fire('Error', 'Completa todos los campos', 'error');
        };
        if(stateDiasEntrenamiento.length === 0){
            return Swal.fire('Error', 'Selecciona al menos un dia de entrenamiento', 'error');
        }



        function ordenar ( a, b ){ return a - b; }
        
        const data = {
            ...formValues,
            diasEntrenamiento: stateDiasEntrenamiento.sort( ordenar )
        }
        creandoTuRutina(data);
        navigate('/crear/entrenamientos');


    }


    return (
        <>
            <br/><br/>
            <Titulo><h1>Crea tu rutina</h1></Titulo>

            <Formulario onSubmit={handleSiguiente}>
                <div>
                    <DivLabel>
                        <label>Objetivo</label>
                        <BsQuestionOctagonFill size='2rem' color='white' />
                    </DivLabel>
                    <Select onChange={handleInputChange} name='objetivo'>
                        <option>Ganancia masa muscular</option>
                        <option>Perdida de grasa</option>
                        <option>Rendimiento fisico</option>
                    </Select>
                </div>

                <div>
                    <DivLabel>
                        <label>Duracion</label>
                        <BsQuestionOctagonFill size='2rem' color='white' />
                    </DivLabel>
                    <SelectMasInput>
                        <Input type='number' placeholder='Cantidad' onChange={handleInputChange} name='duracion' />
                        <Select onChange={handleInputChange} name='duracionModo'>
                            <option>Semanas</option>
                            <option>Dias</option>
                            <option>Meses</option>
                        </Select>

                    </SelectMasInput>
                </div>

                <div>
                    <DivLabel>
                        <label>{`Descripcion (*opcional)`}</label>
                        <BsQuestionOctagonFill size='2rem' color='white' />
                    </DivLabel>
                    <TextArea placeholder='ejemplo: Mi objetivo es haber ganado 5kg de masa muscular al finalizar esta rutina' />
                </div>

                <div>

                    <ContenedorCheckBox>
                        <CheckBox>
                            <input type='checkbox' id='lunes' value='0' onChange={addDiaEntrenamiento}/>
                            <label htmlFor='lunes'>Lunes</label>
                        </CheckBox>
                        <CheckBox>
                            <input type='checkbox' id='martes' value='1' onChange={addDiaEntrenamiento}/>
                            <label htmlFor='martes'>Martes</label>
                        </CheckBox>
                        <CheckBox>
                            <input type='checkbox' id='miercoles' value='2' onChange={addDiaEntrenamiento}/>
                            <label htmlFor='miercoles'>Miercoles</label>
                        </CheckBox>
                        <CheckBox>
                            <input type='checkbox' id='jueves' value='3' onChange={addDiaEntrenamiento}/>
                            <label htmlFor='jueves'>Jueves</label>
                        </CheckBox>
                        <CheckBox>
                            <input type='checkbox' id='viernes' value='4' onChange={addDiaEntrenamiento}/>
                            <label htmlFor='viernes'>Viernes</label>
                        </CheckBox>
                        <CheckBox>
                            <input type='checkbox' id='sabado' value='5' onChange={addDiaEntrenamiento} />
                            <label htmlFor='sabado'>Sabado</label>
                        </CheckBox>
                        <CheckBox>
                            <input type='checkbox' id='domingo' value='6' onChange={addDiaEntrenamiento} />
                            <label htmlFor='domingo'>Domingo</label>
                        </CheckBox>
                    </ContenedorCheckBox>
                </div>
                <BotonSubmit type='submit'>Siguiente</BotonSubmit>
            </Formulario>
        </>
    )
}
