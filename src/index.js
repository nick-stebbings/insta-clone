import React from 'react';
import { render } from 'react-dom';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

import App from './App';
import './styles/app.css';

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase, FieldValue}}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
