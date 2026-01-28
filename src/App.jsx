// Main App Component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import Theory from './pages/Theory';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Test from './pages/Test';
import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

console.log("App.jsx loading...");

function App() {
  console.log("App rendering...");
  return (
    <ThemeProvider>
      <Router>
        <BackgroundBlobs />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/theory/:id" element={<Theory />} />
            <Route path="/test/:id" element={<Test />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

console.log("App component defined.");

export default App;
