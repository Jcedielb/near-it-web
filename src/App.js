// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Alarmas from './pages/alarmas';
import Grupos from './pages/grupos';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/alarmas" element={<Alarmas />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
