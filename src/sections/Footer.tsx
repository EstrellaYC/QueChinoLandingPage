import { Instagram, Youtube, Music, Mail, Heart, Linkedin, Hash, MessageCircle, Users, MessageSquare } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/baimucn', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@baimucn', label: 'YouTube' },
  { icon: Music, href: 'https://tiktok.com/@baimucn', label: 'TikTok' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jorgebenitezp/', label: 'LinkedIn' },
  { icon: Hash, href: 'https://www.threads.com/@baimucn', label: 'Threads' },
  { icon: MessageSquare, href: 'https://discord.gg/a429Kb3wra', label: 'Discord' },
];

const quickLinks = [
  { name: '¿Quién soy?', href: '#about' },
  { name: 'Ventajas', href: '#benefits' },
  { name: 'Inscribirme', href: '#enrollment' },
  { name: 'Clase de prueba', href: '#trial' },
  { name: 'Intérprete', href: '#interpretation' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#503733' }}>
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[20vw] font-bold text-white whitespace-nowrap">
          ¡QuéChino!
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="¡QuéChino!"
                className="h-16 w-auto sm:h-20"
              />
            </div>
            <p className="mb-6 max-w-md text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Aprender chino mandarín también puede ser divertido. Únete a nuestra comunidad de más de 150,000 LaChinos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Enlaces rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="transition-colors duration-300 text-sm sm:text-base"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Contacto</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:baimuxd@gmail.com"
                  className="flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/522283545551"
                  className="flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="http://nas.io/baimu"
                  className="flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <Users className="w-4 h-4" />
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs sm:text-sm text-center sm:text-left">
              © 2026 ¡QuéChino! Todos los derechos reservados.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs sm:text-sm flex items-center gap-1 text-center">
              Hecho con <Heart className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#eeb0a1' }} fill="#eeb0a1" /> para mi gente LaChino
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
