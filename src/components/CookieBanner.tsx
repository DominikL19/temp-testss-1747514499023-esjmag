import React, { useEffect, useState } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookieConsentGiven') === 'true';
    
    if (!hasAcceptedCookies) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsentGiven', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50 flex flex-col sm:flex-row justify-between items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="text-sm mb-2 sm:mb-0">
        Diese Webseite verwendet Cookies, um Ihnen das beste Erlebnis zu bieten.
        <a href="/datenschutz" className="text-sky-400 hover:underline ml-1">
          Mehr erfahren
        </a>.
      </p>
      <button 
        onClick={acceptCookies}
        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
      >
        Akzeptieren
      </button>
    </div>
  );
};

export default CookieBanner;