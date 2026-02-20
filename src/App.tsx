import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './styles/mobile.css';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Benefits from './sections/Benefits';
import Enrollment from './sections/Enrollment';
import TrialClass from './sections/TrialClass';
import Interpretation from './sections/Interpretation';
import Footer from './sections/Footer';
import CourseProduct from './sections/CourseProduct';
import Success from './pages/Success';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 首页组件（包含所有 sections）
const HomePage = () => {
  useEffect(() => {
    // 首页加载时刷新 ScrollTrigger
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Enrollment />
      <TrialClass />
      <CourseProduct />
      <Interpretation />
    </>
  );
};

// 取消页面
const CancelPage = () => (
  <div 
    className="min-h-screen flex items-center justify-center p-4"
    style={{ backgroundColor: '#fef1e8' }}
  >
    <div 
      className="rounded-3xl shadow-xl p-8 max-w-md w-full text-center"
      style={{ backgroundColor: '#ffffff', border: '2px solid #E8D5C4' }}
    >
      <div className="text-6xl mb-4">😔</div>
      <h2 
        className="text-2xl font-bold mb-4"
        style={{ color: '#5D4037' }}
      >
        Pago Cancelado
      </h2>
      <p 
        className="mb-6"
        style={{ color: '#8D6E63' }}
      >
        El proceso de pago fue cancelado. No te preocupes, 
        puedes intentarlo de nuevo cuando quieras.
      </p>
      <a 
        href="/#curso" 
        className="inline-block py-3 px-6 rounded-xl font-semibold transition-colors"
        style={{ 
          backgroundColor: '#8B5E3C', 
          color: '#ffffff',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6D4C41'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B5E3C'}
      >
        ← Volver al curso
      </a>
    </div>
  </div>
);

// 布局组件：根据路由决定是否显示 Navbar 和 Footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/success' || location.pathname === '/cancel';
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fef1e8' }}>
      {!isStandalonePage && <Navbar />}
      <main>
        {children}
      </main>
      {!isStandalonePage && <Footer />}
    </div>
  );
};

function App() {
  useEffect(() => {
    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<CancelPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;