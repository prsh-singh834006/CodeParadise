import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCVY2aU6fhFHRKLxSDW84Kwy67sURiQZFg',
  authDomain: 'test-753a7.firebaseapp.com',
  databaseURL: 'https://test-753a7.firebaseio.com',
  storageBucket: 'gs://test-753a7.appspot.com',
  messagingSenderId: '347154365256',
};

firebase.initializeApp(config);

export const initialize = () => {
  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
  FIREBASE_MESSAGING.usePublicVapidKey(
    'BFPHo3ah1Fpt-S7Tzw5dLA_AFnqpEYrzaeX7XTf_E5mlefV5aCvDex9gJC2jBsWC8N0rb89gZboXS_-mlQ76o-E'
  );

  FIREBASE_MESSAGING.requestPermission().then(() => handleTokenRefresh());

  const handleTokenRefresh = () => {
    return FIREBASE_MESSAGING.getToken()
      .then(currentToken => {
        console.log(currentToken);
        FIREBASE_DATABASE.ref('/user')
          .push({
            token: currentToken,
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  };

  FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);

  FIREBASE_MESSAGING.onMessage(data => {
    console.log('Message Received', data);
  });

  return FIREBASE_MESSAGING;
};
