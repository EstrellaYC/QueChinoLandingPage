import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Briefcase, 
  Users, 
  Factory, 
  Plane, 
  Handshake, 
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Briefcase, text: 'Negocios' },
  { icon: Users, text: 'Reuniones' },
  { icon: Factory, text: 'Fábricas' },
  { icon: Plane, text: 'Viajes' },
  { icon: Handshake, text: 'Negociaciones' },
];

const advantages = [
  '6+ años de experiencia profesional',
  'Especializado en empresas chinas',
  'Conocimiento de múltiples industrias',
  'Disponibilidad flexible',
];

export default function Interpretation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const serviceIcons = sectionRef.current?.querySelectorAll('.service-icon');
      if (serviceIcons) {
        gsap.fromTo(
          serviceIcons,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="interpretation"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#fef1e8' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#503733" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="animate-item inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#50373315' }}>
              <span className="text-sm font-semibold" style={{ color: '#503733' }}>Servicio de interpretación</span>
            </div>

            <h2 className="animate-item text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#503733' }}>
              ¿Necesitas <span style={{ color: '#834b41' }}>intérprete</span> Chino–Español?
            </h2>

            <p className="animate-item text-lg mb-8" style={{ color: '#503733cc' }}>
              Si necesitas interpretación para negocios, reuniones, fábricas, visitas, viajes o negociaciones… también puedo ayudarte.
            </p>

            {/* Services */}
            <div className="animate-item flex flex-wrap gap-3 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-icon flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  <service.icon className="w-4 h-4" style={{ color: '#834b41' }} />
                  <span className="text-sm font-medium" style={{ color: '#503733' }}>{service.text}</span>
                </div>
              ))}
            </div>

            {/* Advantages */}
            <div className="animate-item space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#ebcd8e' }} />
                  <span style={{ color: '#503733cc' }}>{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="animate-item">
            <div className="bg-white rounded-3xl shadow-brand-lg p-8 lg:p-10">

              <a
                href="https://wa.me/522283545551"
                className="group w-full px-8 py-4 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                style={{ backgroundColor: '#503733' }}
              >
                Solicitar servicio
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: '#fef1e8' }}>
                <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#50373399' }}>
                  <span>Empresas que confían:</span>
                </div>
                <div className="mt-3">
                  <img
                    src="/clients.png"
                    alt="Empresas que confían"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
