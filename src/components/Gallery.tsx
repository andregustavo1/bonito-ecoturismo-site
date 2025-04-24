
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      url: "/img/2.png",
      alt: "Rio cristalino em Bonito",
      width: "full" // full width on mobile, half on larger screens
    },
    {
      url: "/img/4.png",
      alt: "Formações rochosas em Bonito",
      width: "half"
    },
    {
      url: "/img/6.png",
      alt: "Flutuação em águas cristalinas",
      width: "half"
    },
    {
      url: "/img/8.png",
      alt: "Flora local",
      width: "half"
    },
    {
      url: "/img/10.png",
      alt: "Trilha na natureza",
      width: "half"
    },
    {
      url: "/img/7.png",
      alt: "Cachoeira natural em Bonito",
      width: "full"
    },
  ];

  return (
    <section id="galeria" className="section bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title text-white animate-fade-in">Momentos Inesquecíveis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-lg cursor-pointer animate-fade-in ${
                image.width === 'full' ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <p>{images[selectedImage].alt}</p>
            </div>
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
            
            {/* Navigation Arrows */}
            {selectedImage > 0 && (
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}
            
            {selectedImage < images.length - 1 && (
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
