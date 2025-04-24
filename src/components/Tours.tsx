
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Tours = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const tours = [
    {
      id: 1,
      title: "Passeio de Bote Rio Formoso",
      description: "Adrenalina e paisagens deslumbrantes nas águas do Rio Formoso",
      image: "/img/7.png",
      highlights: ["Descidas emocionantes", "Águas cristalinas", "Contato direto com a natureza"]
    },
    {
      id: 2,
      title: "Flutuação Rio Sucuri",
      description: "Flutuação em águas cristalinas observando a vida aquática",
      image: "/img/8.png",
      highlights: ["Visibilidade incrível", "Diversidade de peixes", "Experiência relaxante"]
    },
    {
      id: 3,
      title: "Estância Mimosa",
      description: "Trilhas e cachoeiras em meio à vegetação nativa",
      image: "/img/9.png",
      highlights: ["8 cachoeiras deslumbrantes", "Trilhas sinalizadas", "Banho nas águas naturais"]
    },
    {
      id: 4,
      title: "Cachoeiras e Trilhas Serra da Bodoquena",
      description: "Imersão na natureza com vistas panorâmicas",
      image: "/img/10.png",
      highlights: ["Vistas panorâmicas", "Biodiversidade rica", "Cachoeiras exclusivas"]
    },
    {
      id: 5,
      title: "Gruta do Lago Azul",
      description: "Caverna com águas azul-turquesa de beleza surreal",
      image: "/img/11.png",
      highlights: ["Águas azul-turquesa", "Formações geológicas", "Patrimônio natural"]
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = current.clientWidth * 1.025;
      
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
      
      // Check scroll position after a small delay to ensure the scroll has completed
      setTimeout(() => {
        if (current) {
          setShowLeftArrow(current.scrollLeft > 0);
          setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 10);
        }
      }, 100);
    }
  };

  return (
    <section id="passeios" className="section bg-secondary">
      <div className="mx-auto">
        <h2 className="section-title animate-fade-in">Passeios Exclusivos</h2>
        <p className="section-subtitle animate-fade-in">Descubra as maravilhas naturais de Bonito</p>
        
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-opacity-90 transition-all -ml-4"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-opacity-90 transition-all -mr-4"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Tours Slider */}
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto space-x-6 py-8 px-2 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tours.map((tour, index) => (
              <div 
                key={tour.id} 
                className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(25%-2rem)] card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{tour.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Destaques:</h4>
                    <ul className="space-y-1">
                      {tour.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
