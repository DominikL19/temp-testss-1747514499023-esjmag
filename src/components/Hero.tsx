import React from 'react';

const Hero: React.FC = () => {
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
    <header className="pt-32 pb-16 md:pt-48 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              TechMail: Deine tägliche
            </span>
            <br className="hidden md:block" /> Dosis Technik-News.
          </h1>
        </div>
        
        <div className="animate-slideUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Erhalte täglich die wichtigsten Nachrichten und Analysen zu Smartphones, Apple, 
            Google, Android, iOS und den neuesten Tech-Trends direkt in dein Postfach.
          </p>
        </div>
        
        <div className="animate-scaleIn opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 px-8 rounded-full text-lg inline-block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Jetzt Abonnieren
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="bg-white hover:bg-gray-50 text-sky-600 font-semibold py-3 px-8 rounded-full text-lg inline-block border border-sky-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
        
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <p className="text-sm text-gray-500 mt-6">Jederzeit kündbar.</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;