import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Reader } from './Reader/Reader';
// import { PublicationEditor } from './PublicationEditor/PublicationEditor';
// import { VideoPlayer } from './VideoPlayer/VideoPlayer';
import { Layout } from './Layout/Layout';
import { ListPage } from '../Pages/ListPage';
import '../index.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="preview" element={<div>preview</div>} />
        <Route path="list" element={<ListPage />} />
        <Route path="create" element={<div>create</div>} />
      </Route>
    </Routes>
  );
};
