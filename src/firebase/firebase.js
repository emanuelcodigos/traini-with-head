import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, updateDoc, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { firebaseConfig } from './config';

class Firebase {
    constructor() {
        const app = initializeApp(firebaseConfig);
        getAnalytics(app);

        this.auth = getAuth();
        this.googlePovider = new GoogleAuthProvider();
        this.db = getFirestore();
        this.storage = getStorage();
    }


    async loginWithGoogle() {
        try {
            signInWithPopup(this.auth, this.googlePovider)
                .then(() => {
                    return { ok: true, msg: 'Registrado correctamente' };
                });
        } catch (error) {
            return error.message;
        }
    }

    async crearRutina(user, data) {

        const docRef = doc(this.db, 'usuarios', user);

        const resp = await updateDoc(docRef, {
            rutinas: arrayUnion({ ...data })
        });
    }

    async consultarRutina (uid, id) {

        const docRef = doc(this.db, 'usuarios', uid);
        const docSnap = await getDoc(docRef);
        
        if(docSnap.exists()) {
            
            const data = docSnap.data()['rutinas'];
            let resp = {ok: false, msg: 'La rutina no existe'};

            data.forEach(rutina => {

                if(rutina.id === id){
                    resp = {ok: true, data: {...rutina}};
                }
            });

            return resp;
        }
    }

}

export const firebase = new Firebase();