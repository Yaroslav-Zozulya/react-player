import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './components/GlobalStyles';
import { Reader } from './Pages/Reader';
import { CreatePublication } from './Pages/CreatePublication';
import './index.css';
// import { App } from 'components/Player/App';
import publications from 'data/publications.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Reader items={publications} />} />
          <Route path="create" element={<CreatePublication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
