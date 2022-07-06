import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './components/GlobalStyles';
// import { App } from 'components/App';
import { Reader } from './components/Reader/Reader';
import publications from './data/publications.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Reader items={publications} />
  </React.StrictMode>
);
