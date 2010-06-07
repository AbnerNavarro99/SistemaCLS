import AuthReducer from './AuthReducer';
import EventsReducer from './EventsReducer';
import DatesReducer from  './DatesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth : AuthReducer,
    date: DatesReducer,
    event: EventsReducer,
    firestore: firestoreReducer,
    firebase : firebaseReducer
})

export default RootReducer;