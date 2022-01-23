import React, { useEffect, useState } from 'react';
import { useForm, Input, Select,SelectMasInput } from '../../hooks/useForm';
import { ordenarArreglo } from '../../hooks/useHelpers';

export const RepeticionCrear = ({id, addSerie}) => {

    //const [stateRepeticion, setStateRepeticion] = useState({data: {}, modo:''})

    //const [values, handleInputChange] = useForm({data: '', modo:'Repeticiones'});
    const [values, setValues] = useState({cantidad: '', modo:'Repeticiones'});
    const {cantidad, modo} = values;

    const handleInputChange = ({ target }) => {
        
        setValues( ant => ({
            ...ant,
            [target.name]: target.value
        }));

        if(target.type === 'text'){
            addSerie({
                nro: id,
                data: {cantidad: target.value, modo}
            });

        }else{
            addSerie({
                nro: id,
                data: {cantidad, modo: target.value}
            });
        }

    }

    useEffect(() => {

    }, []);


    return (
        <SelectMasInput>
            <Input type='text' placeholder='ej: 15 X 60kg'
             onChange={handleInputChange}
             name='cantidad'
             values={cantidad}
            />
            <Select onChange={handleInputChange} name='modo' value={modo}>
                <option>-- selecciona --</option>
                <option>Repeticiones</option>
                <option>Segundos</option>
                <option>Minutos</option>
                <option>AMRAP</option>
            </Select>
        </SelectMasInput>
    )
}
