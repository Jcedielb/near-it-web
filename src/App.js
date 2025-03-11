// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Alarmas from './pages/alarmas';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/alarmas" element={<Alarmas />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
