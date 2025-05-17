import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-sky-600">
          Tech<span className="text-sky-500">Mail</span>
        </a>
        <div className="hidden lg:flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-sky-600 transition-colors"
          >
            Über TechMail
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-600 hover:text-sky-600 transition-colors"
          >
            Preise
          </button>
          <a 
            href="https://example.com/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-sky-600 transition-colors"
          >
            Login
          </a>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Jetzt Abonnieren
          </button>
        </div>
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-sky-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className={`lg:hidden px-6 pb-4 space-y-2 bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <button 
          onClick={() => scrollToSection('features')} 
          className="block w-full text-left text-gray-600 hover:text-sky-600 py-2"
        >
          Über TechMail
        </button>
        <button 
          onClick={() => scrollToSection('pricing')} 
          className="block w-full text-left text-gray-600 hover:text-sky-600 py-2"
        >
          Preise
        </button>
        <a 
          href="https://example.com/login" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block text-gray-600 hover:text-sky-600 py-2"
        >
          Login
        </a>
        <button 
          onClick={() => scrollToSection('pricing')} 
          className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Jetzt Abonnieren
        </button>
      </div>
    </nav>
  );
};

export default Navbar;