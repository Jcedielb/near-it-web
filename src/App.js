// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Alarmas from './pages/alarmas';
import Grupos from './pages/grupos';
import NuevaAlarma from './pages/nueva-alarma';
import NuevoGrupo from './pages/nuevo-grupo';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/alarmas" element={<Alarmas />} />
          <Route path="/nueva-alarma" element={<NuevaAlarma />} />
          <Route path="/nuevo-grupo" element={<NuevoGrupo/>} />


        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
