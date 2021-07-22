import React from 'react';
import { render } from 'react-dom';
import { firebase } from '../lib/firebase';
import App from './App';
import './styles/app.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
