import React from 'react';
import { Facebook, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-bold text-white mb-4">
              Tech<span className="text-sky-400">Mail</span>
            </h5>
            <p className="text-sm mb-4">
              Dein täglicher Newsletter für die neuesten Nachrichten und Analysen aus der Tech-Welt.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Github"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">TechMail</h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Über TechMail
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Preise
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Blog (bald)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Archiv (Abonnenten)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Unternehmen</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Über uns (bald)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Rechtliches</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} TechMail. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;