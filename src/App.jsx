// Main App Component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Theory from './pages/Theory';

import Test from './pages/Test';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  return (
    <Router>
      <BackgroundBlobs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/theory/:id" element={<Theory />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
