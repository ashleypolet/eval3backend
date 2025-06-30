import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import ZonaList from './components/Zona/ZonaList';
import ZonaCreate from './components/Zona/ZonaCreate';
import ZonaEdit from './components/Zona/ZonaEdit';

import GuiaList from './components/Guia/GuiaList';
import GuiaCreate from './components/Guia/GuiaCreate';
import GuiaEdit from './components/Guia/GuiaEdit';

import TourList from './components/Tour/TourList';
import TourCreate from './components/Tour/TourCreate';
import TourEdit from './components/Tour/TourEdit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/zonas" />} />
        <Route path="/zonas" element={<ZonaList />} />
        <Route path="/zonas/crear" element={<ZonaCreate />} />
        <Route path="/zonas/editar/:id" element={<ZonaEdit />} />
        <Route path="/guias" element={<GuiaList />} />
        <Route path="/guias/crear" element={<GuiaCreate />} />
        <Route path="/guias/editar/:id" element={<GuiaEdit />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/tours/crear" element={<TourCreate />} />
        <Route path="/tours/editar/:id" element={<TourEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
