import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, BookOpen, Heart, Building2, Users, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: MessageCircle,
    title: 'Explicamos en español real',
    description: 'Como lo diría un latino, sin complicaciones ni tecnicismos confusos.',
    color: '#eeb0a1',
  },
  {
    icon: BookOpen,
    title: 'Método práctico',
    description: 'Aprendes chino para la vida, no para sufrir. Enfoque en situaciones reales.',
    color: '#ebcd8e',
  },
  {
    icon: Heart,
    title: 'Acompañamiento cercano',
    description: 'Sin pena, sin presión, sin aburrimiento. Un ambiente amigable y relajado.',
    color: '#834b41',
  },
  {
    icon: Building2,
    title: 'Experiencia real',
    description: 'Trabajando con empresas chinas como OPPO, KUKA HOME y Huawei.',
    color: '#503733',
  },
  {
    icon: Users,
    title: 'Comunidad LaChino',
    description: 'Aquí aprendes con gente como tú. Más de 150,000 miembros.',
    color: '#ebcd8e',
  },
  {
    icon: Globe,
    title: 'Puente cultural',
    description: 'Chinos y latinos tenemos más en común de lo que crees.',
    color: '#eeb0a1',
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.benefit-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { 
            y: 60, 
            opacity: 0,
            scale: 0.9,
            rotation: (i) => (i % 2 === 0 ? -3 : 3),
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
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
      id="benefits"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#ebcd8e30' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/chinese-pattern.jpg"
          alt="Chinese pattern"
          className="w-full h-full object-cover"
          style={{ opacity: 0.05 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#834b41' }}>
            ¿Por qué aprender con nosotros?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4" style={{ color: '#503733' }}>
            Nuestras <span style={{ color: '#834b41' }}>ventajas</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group bg-white rounded-3xl p-8 shadow-brand transition-all duration-500 hover:shadow-brand-lg hover:scale-105 hover:-translate-y-2"
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: `${benefit.color}30` }}
              >
                <benefit.icon 
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: benefit.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#834b41]" style={{ color: '#503733' }}>
                {benefit.title}
              </h3>
              <p style={{ color: '#50373399' }}>
                {benefit.description}
              </p>

              {/* Hover accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: benefit.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
