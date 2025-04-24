
import { useEffect, useRef, useState } from 'react';

const Inclusions = () => {
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

  const inclusions = [
    {
      title: "Transporte Completo",
      description: "Ônibus leito turismo ida e volta e transporte local"
    },
    {
      title: "Hospedagem com Conforto",
      description: "Acomodações selecionadas com café da manhã"
    },
    {
      title: "Alimentação",
      description: "Café da manhã no hotel e almoços nos passeios Estância Mimosa e Rio da Prata"
    },
    {
      title: "Passeios Exclusivos",
      description: "Todos os passeios mencionados no roteiro com equipamentos"
    },
    {
      title: "Segurança",
      description: "Seguro viagem e equipamentos de proteção individual"
    },
    {
      title: "Serviço de Bordo",
      description: "Lanches, snacks, água, suco e refrigerante durante o percurso"
    },
    {
      title: "Guias Especializados",
      description: "Profissionais locais com amplo conhecimento da região"
    },
    {
      title: "Suporte Completo",
      description: "Acompanhamento durante toda a viagem"
    }
  ];

  return (
    <section id="o-que-inclui" className="section bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">O Que Está Incluso</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {inclusions.map((item, index) => (
            <div 
              key={index}
              className={`card p-6 hover:shadow-md transition-all duration-500 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
