import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { Home } from './pages/Home';
import { PropertyDetail } from './pages/PropertyDetail';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="aureum-theme">
      <Router>
        <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-amber-500 selection:text-white transition-colors duration-300">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/property/:slug" element={<PropertyDetail />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
