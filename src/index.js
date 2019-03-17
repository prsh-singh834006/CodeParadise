import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import { initialize } from './initializePushNotification';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './static/scss/index.scss';
import { FireBaseContext } from './firebaseContext';

AOS.init();

const firebase = initialize();

ReactDOM.render(
  <FireBaseContext.Provider value={firebase}>
    <App />
  </FireBaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
