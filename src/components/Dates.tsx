
import { useEffect, useRef, useState } from 'react';

const Dates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const dates = [
    {
      month: "Maio",
      year: "2025",
      season: "Outono",
      highlight: "Período de águas baixas, visibilidade excelente"
    },
    {
      month: "Agosto",
      year: "2025",
      season: "Inverno",
      highlight: "Clima ameno, ideal para trilhas"
    },
    {
      month: "Dezembro",
      year: "2025",
      season: "Verão",
      highlight: "Alta temporada, natureza exuberante"
    }
  ];

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case 'Outono':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 17V3"></path>
            <path d="m6 11 6 6 6-6"></path>
            <path d="M19 21H5"></path>
          </svg>
        );
      case 'Inverno':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20"></path>
            <path d="M12 2v20"></path>
            <path d="m4.93 4.93 14.14 14.14"></path>
            <path d="m19.07 4.93-14.14 14.14"></path>
          </svg>
        );
      case 'Verão':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="datas" className="section bg-secondary" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">Próximas Expedições</h2>
        
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {dates.map((date, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg border-t-4 border-accent flex-1 max-w-sm mx-auto md:mx-0 transition-all duration-500 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-accent mb-4">
                {getSeasonIcon(date.season)}
              </div>
              <h3 className="text-3xl font-bold font-montserrat text-primary">{date.month}</h3>
              <p className="text-xl text-neutral mb-4">{date.year}</p>
              <p className="text-sm font-medium text-primary mb-2">{date.season}</p>
              <p className="text-gray-600">{date.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dates;
