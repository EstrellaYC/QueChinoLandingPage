import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Clases personalizadas',
  'Material de estudio incluido',
  'Horarios flexibles',
  'Soporte continuo',
];

export default function Enrollment() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { rotateX: 30, y: 60, opacity: 0 },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="enrollment"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#fef1e8' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 float-animation" style={{ backgroundColor: '#eeb0a1' }} />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-30 float-animation" style={{ backgroundColor: '#ebcd8e', animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#834b41' }}>
            Quiero inscribirme
          </span>
        </div>

        {/* Main Card */}
        <div
          ref={cardRef}
          className="relative bg-white rounded-[2.5rem] shadow-brand-lg overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          {/* Top gradient bar */}
          <div className="h-3" style={{ background: 'linear-gradient(to right, #eeb0a1, #ebcd8e, #834b41)' }} />
          
          <div className="p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#503733' }}>
                  ¿List@ para empezar?
                </h2>
                <p className="text-lg mb-8" style={{ color: '#503733cc' }}>
                  Completa el formulario y únete a nuestra comunidad de aprendizaje. ¡Te esperamos!
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#ebcd8e' }} />
                      <span style={{ color: '#503733cc' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - CTA */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="rounded-3xl p-8 w-full max-w-sm" style={{ backgroundColor: '#ffffff' }}>
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#834b4120' }}>
                      <FileText className="w-10 h-10" style={{ color: '#834b41' }} />
                    </div>
                    <p className="text-sm mb-1" style={{ color: '#50373399' }}>Formulario de inscripción</p>
                    <p className="font-bold" style={{ color: '#503733' }}>Google Forms</p>
                  </div>

                  <a
                    href="https://forms.gle/iKyRbZ4PduJWXCog7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full px-8 py-4 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#834b41' }}
                  >
                    Ir al formulario
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm" style={{ color: '#50373399' }}>
                    <Sparkles className="w-4 h-4" style={{ color: '#ebcd8e' }} />
                    <span>Gratis y sin compromiso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: '#ebcd8e' }} />
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#eeb0a1' }} />
        </div>
      </div>
    </section>
  );
}
