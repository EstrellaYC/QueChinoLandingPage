import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Video, Clock, Users, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const details = [
  { icon: Clock, text: '45 minutos de clase' },
  { icon: Users, text: 'Grupos reducidos' },
  { icon: Star, text: '100% gratuito' },
];

export default function TrialClass() {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trial"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/online-class.jpg"
          alt="Clase en línea"
          className="w-full h-full obTrialject-cover"
          style={{ filter: 'blur(2px)', opacity: 0.8 }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(80, 55, 51, 0.8)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(131, 75, 65, 0.4), transparent)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center">
          {/* Section Header */}
          <div className="animate-item inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span className="text-xs sm:text-sm font-semibold text-white/90">Clase de prueba (Zoom)</span>
          </div>

          <h2 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Prueba antes de <span style={{ color: '#ebcd8e' }}>decidir</span>
          </h2>

          <p className="animate-item text-base sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-md sm:max-w-2xl mx-auto">
            Entra a nuestra clase de prueba gratuita y experimenta nuestro método de enseñanza. ¡Sin compromiso!
          </p>

          {/* Play Button */}
          <div className="animate-item relative inline-block mb-8 sm:mb-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full pulse-ring" style={{ backgroundColor: 'rgba(131, 75, 65, 0.3)' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full pulse-ring" style={{ backgroundColor: 'rgba(131, 75, 65, 0.2)', animationDelay: '0.5s' }} />
            </div>

            <a
              href="https://discord.gg/a429Kb3wra"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 sm:w-32 h-24 sm:h-32 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:shadow-[0_0_60px_rgba(131,75,65,0.5)] group"
              style={{ backgroundColor: '#834b41' }}
            >
              <Play className="w-8 sm:w-12 h-8 sm:h-12 text-white ml-1 sm:ml-2 transition-transform duration-300 group-hover:scale-110" fill="white" />
            </a>
          </div>

          {/* Details */}
          <div className="animate-item flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <detail.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#ebcd8e' }} />
                <span className="text-xs sm:text-sm text-white/90 font-medium">{detail.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-item flex flex-col sm:flex-row gap-4 justify-center">
            {/* Saturday Morning Button */}
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Clase+de+Prueba+de+Chino+%28Discord%29&dates=20260221T160000Z/20260221T170000Z&details=Enlace+Discord%3A+https%3A%2F%2Fdiscord.gg%2FVAZeCeM7%3Fevent%3D1472678218623356990&location=https%3A%2F%2Fdiscord.gg%2FVAZeCeM7%3Fevent%3D1472678218623356990"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white font-bold rounded-full transition-all duration-300 hover:shadow-xl group text-sm sm:text-base"
              style={{ color: '#503733' }}
            >
              <Video className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              Sábado 10-11am
            </a>

            {/* Saturday Evening Button */}
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Clase+de+Prueba+de+Chino+%28Discord%29&dates=20260222T010000Z/20260222T020000Z&details=Enlace+Discord%3A+https%3A%2F%2Fdiscord.gg%2FVAZeCeM7%3Fevent%3D1472678873488691451&location=https%3A%2F%2Fdiscord.gg%2FVAZeCeM7%3Fevent%3D1472678873488691451"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white font-bold rounded-full transition-all duration-300 hover:shadow-xl group text-sm sm:text-base"
              style={{ color: '#503733' }}
            >
              <Video className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              Sábado 7-8pm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
