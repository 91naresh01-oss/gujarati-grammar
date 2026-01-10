import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Theory from './pages/Theory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/theory/:id" element={<Theory />} />
        <Route path="/test/:id" element={<div className="glass-card"><h1>Test Page Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
