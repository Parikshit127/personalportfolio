import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import PrivacyPolicy
import NotFound from './pages/NotFound'; // Import NotFound

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add privacy policy route */}
            <Route path="*" element={<NotFound />} /> {/* Add catch-all 404 route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
