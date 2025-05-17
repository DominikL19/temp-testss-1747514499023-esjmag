import React, { useEffect, useRef } from 'react';
import { Mail, Star, Menu } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (featureRef.current) {
              featureRef.current.classList.add('opacity-100', 'translate-y-0', 'scale-100');
              featureRef.current.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={featureRef} 
      className="bg-white p-8 rounded-xl shadow-lg opacity-0 translate-y-8 scale-95 transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 card-glow"
    >
      <div className="flex items-center justify-center rounded-full w-12 h-12 mb-6 bg-gradient-to-br from-sky-400 to-sky-600 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Tägliche Updates",
      description: "Verpasse keine wichtigen Tech-News mehr. Wir liefern dir jeden Morgen eine prägnante Zusammenfassung.",
      delay: 0
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Nur Technik, kein Spam",
      description: "Genieße deine Nachrichten werbefrei und ohne unnötigen Spam. Nur die Inhalte, die dich wirklich interessieren.",
      delay: 100
    },
    {
      icon: <Menu className="w-6 h-6" />,
      title: "Einfach & Übersichtlich",
      description: "Unsere Newsletter sind klar strukturiert und angenehm zu lesen – perfekt für den schnellen Überblick.",
      delay: 200
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Das bietet Dir TechMail</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">Deine Vorteile auf einen Blick, um immer top informiert zu sein.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;