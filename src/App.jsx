import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teas from './pages/Teas';
import Contact from './pages/Contact';
import Tourism from './pages/Tourism';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router basename="/yanxu-tea">
      <div className="min-h-screen bg-white">
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teas" element={<Teas />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
