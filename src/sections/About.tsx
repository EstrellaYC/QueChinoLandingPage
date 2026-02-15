import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Briefcase, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Briefcase, value: '6+', label: 'Años de experiencia' },
  { icon: Users, value: '150K+', label: 'LaChinos en comunidad' },
  { icon: Award, value: '50+', label: 'Clientes satisfechos' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats animation
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
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
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#fef1e8' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#834b41' }}>
            ¿Quién soy?
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-brand-lg">
              <img
                src="/baimu.png"
                alt="Baimu - Fundador de ¡QuéChino!"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(80, 55, 51, 0.3), transparent)' }} />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-brand-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#834b41' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#50373399' }}>De</p>
                  <p className="font-bold" style={{ color: '#503733' }}>Xalapa, Veracruz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="lg:pl-8">
            <h2 className="animate-item text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#503733' }}>
              ¡Hola! Soy <span style={{ color: '#834b41' }}>Baimu</span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#503733cc' }}>
              <p className="animate-item">
                Un chico de <strong style={{ color: '#503733' }}>Xalapa, Veracruz</strong> que a los <span className="font-bold" style={{ color: '#834b41' }}>19 años</span> comenzó a estudiar el idioma Chino Mandarín sin muchas expectativas… sin saber que cambiaría mi vida para siempre.
              </p>

              <p className="animate-item">
                A los <span className="font-bold" style={{ color: '#834b41' }}>21</span> empecé a trabajar como <strong>intérprete Chino-Español</strong> para empresas chinas abriendo mercado en México, desempeñándome en una amplia variedad de industrias: ventas, construcción, cadena de suministro, entre muchas otras.
              </p>

              <p className="animate-item">
                A los <span className="font-bold" style={{ color: '#834b41' }}>23</span>, decidí empezar a compartir mi experiencia a través de redes sociales, con el objetivo de demostrar que <strong style={{ color: '#834b41' }}>el Chino Mandarín cambia vidas</strong>, y que estudiarlo no tiene por qué ser tan difícil como se cree.
              </p>

              <p className="animate-item">
                Actualmente llevo más de <span className="font-bold" style={{ color: '#834b41' }}>6 años</span> de experiencia profesional en México y LATAM como intérprete para empresas de renombre como <strong>OPPO, KUKA HOME y Huawei</strong>.
              </p>

              <div className="animate-item rounded-2xl p-6 mt-6" style={{ backgroundColor: '#ffffff' }}>
                <p style={{ color: '#503733' }}>
                  Y con la ayuda de mi esposa <strong style={{ color: '#834b41' }}>Yuchen</strong>, una china de Shanghái apasionada por el mundo LaChino y con más de 9 años de experiencia con el español, decidimos darle vida a este proyecto para demostrar algo muy simple:
                </p>
                <p className="text-xl font-bold mt-3 text-center" style={{ color: '#834b41' }}>
                  Chinos y latinos tenemos más en común de lo que crees.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid sm:grid-cols-3 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item bg-white rounded-3xl p-8 shadow-brand text-center transition-all duration-300 hover:shadow-brand-lg hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#ebcd8e40' }}>
                <stat.icon className="w-8 h-8" style={{ color: '#834b41' }} />
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#834b41' }}>{stat.value}</div>
              <div style={{ color: '#50373399' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
