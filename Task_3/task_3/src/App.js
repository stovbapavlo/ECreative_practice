import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/App.css';
import Home from './pages/Home';
import PalettePage from './pages/PalettePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palette/:id" element={<PalettePage />} />
      </Routes>
    </div>
  );
};

export default App;
