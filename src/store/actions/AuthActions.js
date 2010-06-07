export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.correo,
            credentials.contrasenha
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR' }, err)
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR' }, err)
        })
    }
}

export const signUp = (nuevoUsuario) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            nuevoUsuario.correo,
            nuevoUsuario.contrasenha
        ).then((resp) => {
            return firestore.collection('usuarios').doc(resp.user.uid).set({
                nombres: nuevoUsuario.nombres,
                apellidos: nuevoUsuario.apellidos,
                cedula: nuevoUsuario.cedula,
                telefono: nuevoUsuario.telefono,
                correo: nuevoUsuario.correo,
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' })
            })
        }).catch((err) =>{
            dispatch({type:'SIGNUP_ERROR', err})
        })
    }
}
