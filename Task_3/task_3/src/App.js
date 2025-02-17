import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import PaletteList from './components/PaletteList';
import './styles/App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
