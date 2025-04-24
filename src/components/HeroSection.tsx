
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000",
      alt: "Rio cristalino em Bonito, MS"
    },
    {
      url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=2000",
      alt: "Formação rochosa em Bonito, MS"
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000",
      alt: "Paisagem natural de Bonito, MS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const whatsappUrl = "https://wa.me/5566997122590?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pacotes%20para%20Bonito.";

  return (
    <section id="início" className="w-full h-screen relative overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <img
            src={slide.url}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            É Mais que Bonito, é Lindo!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-xl">
            Descubra as águas cristalinas e a natureza intocada de Bonito - MS
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            Conhecer Pacotes
          </a>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === index ? 'bg-accent' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2 text-white z-30 hover:bg-opacity-50 transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2 text-white z-30 hover:bg-opacity-50 transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
