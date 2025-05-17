import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  isPopular?: boolean;
  isTrial?: boolean;
  delay: number;
}

const PricingCard: React.FC<PricingPlan> = ({
  id,
  title,
  price,
  period,
  features,
  buttonText,
  buttonColor,
  isPopular,
  isTrial,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (cardRef.current) {
              cardRef.current.classList.add('opacity-100', 'translate-y-0');
              cardRef.current.classList.remove('opacity-0', 'translate-y-10');
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const cardClasses = [
    'bg-white p-8 rounded-xl w-full lg:w-1/3 text-center',
    'opacity-0 translate-y-10 transform transition-all duration-700',
    isPopular ? 'highlight-pricing' : '',
    isTrial ? 'trial-card' : 'pricing-card-glow',
  ].filter(Boolean).join(' ');

  return (
    <div ref={cardRef} id={id} className={cardClasses}>
      {isPopular && (
        <div className="popular-badge">Beliebt</div>
      )}
      <h3 className="text-2xl font-semibold mb-2 text-sky-600">{title}</h3>
      <p className="text-4xl font-bold mb-1">{price}</p>
      <p className="text-gray-500 mb-6">{period}</p>
      <ul className="text-gray-600 space-y-2 mb-8 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </li>
        ))}
      </ul>
      <a
        href="https://example.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full ${buttonColor} text-white font-semibold py-3 px-6 rounded-full inline-block cta-button`}
      >
        {buttonText}
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: "trial-plan",
      title: "Kostenlos Testen",
      price: "0€",
      period: "für 14 Tage",
      features: [
        "Tägliche Updates",
        "Mit Werbung",
        "Endet automatisch"
      ],
      buttonText: "14 Tage testen",
      buttonColor: "bg-green-500 hover:bg-green-600",
      isTrial: true,
      delay: 0
    },
    {
      id: "monthly-plan",
      title: "Monatlich",
      price: "6,99€",
      period: "pro Monat",
      features: [
        "Tägliche Updates",
        "Ohne Werbung",
        "Jederzeit kündbar"
      ],
      buttonText: "Monatlich Abonnieren",
      buttonColor: "bg-sky-500 hover:bg-sky-600",
      delay: 100
    },
    {
      id: "yearly-plan",
      title: "Jährlich",
      price: "49,99€",
      period: "pro Jahr (ca. 4,17€/Monat)",
      features: [
        "<strong>Alle monatlichen Vorteile</strong>",
        "Exklusive Analysen",
        "Zugriff auf Archiv",
        "Über 35% gespart!"
      ],
      buttonText: "Jährlich Abonnieren",
      buttonColor: "bg-sky-500 hover:bg-sky-600",
      isPopular: true,
      delay: 200
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wähle Deinen Plan</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Starte kostenlos oder wähle direkt ein Abo, um TechMail vollumfänglich zu nutzen.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 mt-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Hast du einen Gutscheincode? <button className="text-sky-600 hover:underline">Hier eingeben</button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;