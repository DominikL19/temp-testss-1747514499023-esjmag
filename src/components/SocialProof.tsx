import React, { useEffect, useRef } from 'react';

const SocialProof: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the section is visible, animate the logos with delay
          logoRefs.current.forEach((logo, index) => {
            if (logo) {
              setTimeout(() => {
                logo.classList.add('opacity-100');
                logo.classList.remove('opacity-0', 'translate-y-4');
              }, 100 * index);
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Placeholder company logos - in a real app, these would be real logos
  const logoUrls = Array(6).fill(null).map((_, i) => 
    `https://via.placeholder.com/150x60/f0f0f0/cccccc?text=LeserLogo${i+1}`
  );

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Tausende zufriedene Leser vertrauen uns täglich
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logoUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Kundenlogo ${index + 1}`}
              className="mx-auto h-10 filter grayscale hover:grayscale-0 transition duration-300 opacity-0 translate-y-4 transform transition-all duration-500"
              ref={(el) => logoRefs.current[index] = el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;