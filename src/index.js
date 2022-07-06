import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './components/GlobalStyles';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
