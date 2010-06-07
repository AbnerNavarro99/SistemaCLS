import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './config/FbConfig';
import {connect} from 'react-redux';
import createReduxStore from './store/createReduxStore';


const store = createReduxStore();

const rrfConfig = {
  userProfile: 'usuarios',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const mapStateToProps = (state) => ({
  authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
});

const WaitTillAuth = connect(mapStateToProps)(({ authIsLoaded }) => {
  if (!authIsLoaded) return <div className="padreSpinner"> <div className="lds-hourglass"></div> </div> ;
  return (
    <App />
  );
});

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <WaitTillAuth />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
