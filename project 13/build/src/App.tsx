import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { DoctorSearch } from './components/doctor-search';
import { Services } from './components/services';
import { Footer } from './components/footer';
import { Auth } from './pages/Auth';
import { FindDoctors } from './pages/FindDoctors';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Features />
                <DoctorSearch />
                <Services />
              </main>
            } />
            <Route path="/auth" element={<Auth />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;