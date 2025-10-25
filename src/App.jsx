import { useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  // Ensure each fresh load starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Subtle background gradient accents */}
      <div className="pointer-events-none fixed inset-0 opacity-80 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-200 via-sky-200 to-indigo-200 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-rose-200 via-fuchsia-200 to-purple-200 blur-3xl" />
      </div>

      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
