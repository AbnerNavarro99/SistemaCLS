export const RegistrarEvento = (evento) => {
    return (dispatch,
        getState,
        {
            // getFirebase,
            getFirestore
        }) => {
            const firestore = getFirestore();
           
            firestore.collection('Eventos').add(evento).
            then(() => {
                dispatch({
                    type: 'REGISTER_EVENT_SUCCESS'
                })
            }).catch((err) => {
                dispatch({
                    type: 'REGISTER_EVENT_ERROR', err
                })
            });
    }
}

