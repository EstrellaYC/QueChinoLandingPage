import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mascot entrance animation - no floating
      gsap.fromTo(
        mascotRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
        }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.title-word') || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: 'power3.out',
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.8,
          ease: 'power2.out',
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 1,
          ease: 'back.out(1.7)',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToTrial = () => {
    const element = document.querySelector('#trial');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: '#fef1e8' }}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: '#ebcd8e' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#eeb0a1' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div ref={titleRef} className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="title-word block" style={{ color: '#503733' }}>Aprender</span>
                <span className="title-word block" style={{ color: '#834b41' }}>Chino</span>
                <span className="title-word block" style={{ color: '#eeb0a1' }}>Mandarín</span>
              </h1>
              
              <div className="title-word mt-4 inline-flex items-center gap-3">
                <span className="text-2xl sm:text-3xl lg:text-5xl font-handwriting" style={{ color: '#503733' }}>
                  también puede ser divertido
                </span>
              </div>
            </div>

            <div ref={subtitleRef} className="mb-8">
              <p className="text-base sm:text-lg max-w-md mx-auto lg:mx-0" style={{ color: '#503733cc' }}>
                Únete a nuestra comunidad de <span className="font-bold" style={{ color: '#834b41' }}>150,000+ LaChinos</span> y descubre que estudiar chino no tiene por qué ser difícil.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToTrial}
                className="group px-6 py-3 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                style={{ backgroundColor: '#834b41' }}
              >
                Clase de prueba gratis
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white font-bold rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center text-sm sm:text-base"
                style={{ color: '#503733' }}
              >
                Conoce mi historia
              </a>
            </div>
          </div>

          {/* Right Content - Mascot - No floating effect */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                ref={mascotRef}
                src="/mascot.png"
                alt="¡QuéChino! Mascot"
                className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#fef1e8"
          />
        </svg>
      </div>
    </section>
  );
}
