import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles/mobile.css';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Benefits from './sections/Benefits';
import Enrollment from './sections/Enrollment';
import TrialClass from './sections/TrialClass';
import Interpretation from './sections/Interpretation';
import Footer from './sections/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fef1e8' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Enrollment />
        <TrialClass />
        <Interpretation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
