import React from 'react';

const CallToAction: React.FC = () => {
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
    <section className="py-16 md:py-24 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 z-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für dein tägliches Tech-Update?</h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
          Abonniere TechMail noch heute und sei immer bestens informiert über die Welt der Technologie. 
          Verpasse keine wichtigen News mehr!
        </p>
        <button
          onClick={() => scrollToSection('pricing')}
          className="bg-white hover:bg-gray-100 text-sky-600 font-semibold py-3 px-8 rounded-full text-lg inline-block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Zu den Plänen
        </button>
      </div>
    </section>
  );
};

export default CallToAction;