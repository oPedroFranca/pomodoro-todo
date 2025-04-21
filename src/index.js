import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from '../src/pages/routes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();