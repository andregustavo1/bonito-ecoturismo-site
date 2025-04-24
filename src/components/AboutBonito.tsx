
import { useState } from 'react';

const AboutBonito = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      alt: "Rio cristalino em Bonito"
    },
    {
      url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800",
      alt: "Formação rochosa em Bonito"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800",
      alt: "Vegetação nativa de Bonito"
    },
    {
      url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800",
      alt: "Trilha em Bonito"
    }
  ];

  const features = [
    {
      title: "Águas cristalinas de visibilidade incrível",
      description: "Rios transparentes que proporcionam experiências únicas de flutuação e mergulho."
    },
    {
      title: "Conservação ambiental rigorosa",
      description: "Destino modelo em ecoturismo sustentável e preservação da natureza."
    },
    {
      title: "Experiências únicas de flutuação",
      description: "Observe a vida aquática em seu habitat natural com total segurança."
    },
    {
      title: "Diversidade de atrativos naturais",
      description: "De grutas impressionantes a cachoeiras deslumbrantes em meio à natureza preservada."
    }
  ];

  return (
    <section id="sobre-bonito" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">Conheça o Paraíso do Ecoturismo</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <p className="text-gray-700 mb-8 leading-relaxed">
              Bonito, localizado na Serra da Bodoquena em Mato Grosso do Sul, é considerado um dos principais destinos de ecoturismo do Brasil. Com suas águas cristalinas, cachoeiras, grutas e abundante vida selvagem, o destino proporciona experiências inesquecíveis em meio à natureza preservada. Cada passeio é cuidadosamente planejado para oferecer conforto e segurança, permitindo que você desfrute de momentos únicos em cenários deslumbrantes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-primary font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 animate-fade-in-left">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg cursor-pointer relative"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutBonito;
