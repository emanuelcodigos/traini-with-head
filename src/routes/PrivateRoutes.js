import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {firebaseContext} from '../firebase/index';


export const PrivateRoutes = ({children}) => {

    const {autenticado} = useContext(firebaseContext);
    
    if(autenticado){
        if(autenticado.ok){
            return children;
        }else{
            <Navigate to="/"/>
        }
    }

    return <h1>Cargando</h1>

}
