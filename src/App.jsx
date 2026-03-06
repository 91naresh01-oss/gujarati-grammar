// Main App Component
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load all pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Chapters = React.lazy(() => import('./pages/Chapters'));
const Theory = React.lazy(() => import('./pages/Theory'));
const Test = React.lazy(() => import('./pages/Test'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PdfViewer = React.lazy(() => import('./pages/PdfViewer'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    minHeight: '60vh', fontSize: '1.2rem', color: '#3b82f6', fontWeight: 700
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px', height: '40px', border: '4px solid #e5e7eb',
        borderTop: '4px solid #3b82f6', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite', margin: '0 auto 15px'
      }} />
      લોડ થઈ રહ્યું છે...
    </div>
  </div>
);

function App() {

  return (
    <ThemeProvider>
      <Router>
        <BackgroundBlobs />
        <Navbar />
        <div className="app-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chapters" element={<Chapters />} />
              <Route path="/theory/:id" element={<Theory />} />
              <Route path="/test/:id" element={<Test />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/pdf-view" element={<PdfViewer />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}



export default App;
