import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';


import { crearRutinaContext } from '../context/crearRutinaContext';
import { firebaseContext } from '../firebase/index';
import { DescripcionPorDia } from '../components/crear/DescripcionPorDia';


const arrDescripcionDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes','Sabado','Domingo'];

export const DescripcionRutinaCreada = () => {

    const { stateRutina } = useContext(crearRutinaContext);
    const { firebase, autenticado } = useContext(firebaseContext);
    const navigate = useNavigate();

    const { entrenamientos } = stateRutina;
    const [stateDiasOrdenados, setstateDiasOrdenados] = useState([]);
    const [stateEntrenamientos, setStateEntrenamientos] = useState([]);

    const [stateRutinaBuscada, setStateRutinaBuscada] = useState({});
    const {id, rutina} = stateRutinaBuscada;
    
    useEffect(() => {
        if (Object.keys(stateRutina).length === 0) {
            navigate('/crear');
        }
    }, []);

    useEffect(() => {
        const entrenamientosOrdenados = Object.keys(entrenamientos);

        setstateDiasOrdenados(entrenamientosOrdenados.sort());
        setStateEntrenamientos(Object.entries(entrenamientos));
    }, []);

    
    const handleSave = async () => {
        if (autenticado) {
            if (autenticado.ok) {

                try {
                    const uid = autenticado.usuario.uid;
                    const id = uuidv4();

                    await firebase.crearRutina(uid, { rutina: stateRutina, id, fecha: new Date()});
                } catch (error) {
                    Swal.fire('Error', error.message, 'error');
                }

            }
        } else {
            Swal.fire('Error', 'Debes registrarte', 'error');
        }
    }

    const handleConsultar = async() => {
        const uid = autenticado.usuario.uid;
        const resp = await firebase.consultarRutina(uid, '1ecfd056-50c4-4548-8cab-7336e2440481');

        if(resp.ok){
            setStateRutinaBuscada({...resp.data});
            console.log({...resp.data});
        }
    }

    useEffect( () => {
        handleConsultar();
        
    }, []);


    return (
        <div>
            <h1>Tu rutina</h1>
            <br/><br/><br/>
            {
                (rutina) && 
                rutina.entrenamientos.map(entreno => (
                    <DescripcionPorDia key={entreno.nro} entrenamiento={entreno}/>
                ))
            }


            
        

            
        </div>
    )
}
