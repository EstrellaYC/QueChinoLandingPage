import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Inscribirme', href: '#enrollment' },
  { name: 'Clase de prueba', href: '#trial' },
  { name: 'Curso grabado', href: '#curso' },
  { name: 'Intérprete', href: '#interpretation' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 px-4'
            : 'py-4 px-4 sm:py-6 sm:px-6'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-4xl bg-white/90 backdrop-blur-xl rounded-full shadow-brand px-4 sm:px-6 py-2 sm:py-3'
              : 'max-w-7xl px-4'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/logo.png"
                alt="¡QuéChino!"
                className="h-16 w-auto sm:h-20 transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold text-[#503733] rounded-full transition-all duration-300 hover:bg-[#ebcd8e]/30 hover:text-[#834b41]"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#enrollment')}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#834b41] text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 hover:bg-[#503733] hover:shadow-lg hover:scale-105"
              >
                ¡Empieza ya!
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 sm:p-3 text-[#503733] rounded-lg hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl sm:rounded-3xl shadow-brand-lg p-4 sm:p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-3 text-left text-[#503733] font-semibold rounded-xl transition-all duration-300 hover:bg-[#fef1e8] hover:text-[#834b41] text-base"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#enrollment')}
              className="mt-4 px-6 py-3 bg-[#834b41] text-white font-bold rounded-full transition-all duration-300 hover:bg-[#503733] text-base"
            >
              ¡Empieza ya!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
