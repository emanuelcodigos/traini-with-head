import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { BsQuestionOctagonFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

import { crearRutinaContext } from '../context/crearRutinaContext';
import { useForm, Formulario, DivLabel, Input, BotonSubmit, DivBotonesBackNext, Titulo } from '../hooks/useForm';
import { RepeticionCrear } from '../components/crear/RepeticionCrear';
import { ordenarArreglo } from '../hooks/useHelpers';


const descripcionDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];


export const CrearRutinaDia = () => {

    const { stateRutina, stateRutina: { diasEntrenamiento }, establecerEntrenamientos } = useContext(crearRutinaContext);

    const [stateDiaActual, setStateDiaActual] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(stateRutina).length === 0) {
            navigate('/crear');
        }
    }, []);

    const [stateEjercicioActual, setStateEjercicioActual] = useState(0);
    const [stateEjercicios, setstateEjercicios] = useState([]);

    const [stateNroSeries, setStateNroSeries] = useState([1]);

    //nueva manera de hacer la series
    const [stateArrSeries, setstateArrSeries] = useState([]);

    const [formValues, handleInputChange, reset] = useForm({ nombreEjercicio: '' });
    const { nombreEjercicio } = formValues;

    const agregarSerie = (serie) => {
        setstateArrSeries([
            ...stateArrSeries.filter(serieFil => serieFil.nro !== serie.nro),
            serie
        ]);
    }

    const setNumeroDeSeries = ({ target }) => {

        if (target.value <= 15) {
            const arr = new Array(target.value);
            for (let i = 0; i < target.value; i++) {
                arr[i] = 1;
            }
            setStateNroSeries(arr);
            setstateArrSeries([]);
        }
    }

    const handleContinuar = () => {

        if (stateDiaActual < (diasEntrenamiento.length)) {

            if (Object.keys(stateEjercicios).length === 0) {
                return Swal.fire('Error', 'Crea al menos un ejercicio para este dia', 'error');
            }

            const dia = diasEntrenamiento[stateDiaActual];

            establecerEntrenamientos({ nro: dia, data: [ ...stateEjercicios ] });

            setstateEjercicios([]);
            setStateDiaActual(ant => ant + 1);
            setStateEjercicioActual(0);
        } else {
            Swal.fire({
                title: 'Terminaste tu rutina?',
                text: "Luego de aceptar podras ver tu rutina finalizada",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2e85aa',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            }).then(() => {
                navigate('/crear/descripcion');
            })
        }
    }

    const handleVolver = () => {

        if (stateDiaActual > 0) {
            setstateEjercicios([]);

            setStateDiaActual(ant => ant - 1);
            setStateEjercicioActual(1);
        }
    }

    const handleAgregarEjercicio = (e) => {
        e.preventDefault();

        if (stateEjercicioActual > 20) {
            return Swal.fire('Error', 'Maximo 20 ejercicios por dia', 'error');
        }

        if (nombreEjercicio.trim() === '' || stateNroSeries.length === 0) {
            return Swal.fire('Error', ' Completa todos los campos', 'error');
        }

        if (stateArrSeries.length !== stateNroSeries.length) {
            return Swal.fire('Error', ' Completa todos las series', 'error');
        }

        const dataEjercicio = {
            nro: stateEjercicioActual,
            nombre: nombreEjercicio,
            nroSeries: stateNroSeries.length,
            series: ordenarArreglo(stateArrSeries)
        }

        setstateEjercicios([
            ...stateEjercicios.filter(ejer => ejer.nro !== dataEjercicio.nro),
            dataEjercicio
        ]);

        setStateEjercicioActual(ant => ant + 1);

        reset();
        setstateArrSeries([]);
        setStateNroSeries([]);

    }


    return (
        <>
            <br /><br />
            <Titulo>
                {/* <h1>Dia 1: {descripcionDias[diasEntrenamiento[stateDiaActual]]}</h1> */}
                <h1>Crea tu Rutina</h1>
                <h2>{`Dia ${stateDiaActual + 1}: `}<span>{descripcionDias[diasEntrenamiento[stateDiaActual]]}</span></h2>

            </Titulo>
            <Formulario onSubmit={handleAgregarEjercicio}>
                <div>
                    <DivLabel>
                        <label>Ejercicio n° {stateEjercicioActual + 1}</label>
                        <BsQuestionOctagonFill size='2rem' color='white' />
                    </DivLabel>
                    <Input type='text' placeholder='Nombre del ejercicio'
                        value={nombreEjercicio}
                        name='nombreEjercicio'
                        onChange={handleInputChange}
                    />

                </div>
                <div>
                    <DivLabel>
                        <label>Series</label>
                        <BsQuestionOctagonFill size='2rem' color='white' />
                    </DivLabel>
                    <Input type='number'
                        placeholder='Cantidad de iteraciones'
                        onChange={setNumeroDeSeries} />

                </div>
                <DivLabel>
                    <label>Ejecucion</label>
                    <BsQuestionOctagonFill size='2rem' color='white' />
                </DivLabel>
                {
                    stateNroSeries.map((serie, i) => (
                        <RepeticionCrear key={i} id={i} addSerie={agregarSerie} />
                    ))
                }

                <BotonSubmit type='submit'>Agregar ejercicio</BotonSubmit>
                <DivBotonesBackNext>
                    <button type='button' onClick={handleVolver}>Volver</button>
                    <button type='button' onClick={handleContinuar}>Continuar</button>
                </DivBotonesBackNext>
            </Formulario>
        </>
    )
}
