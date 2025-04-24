
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Ana Souza",
      text: "Uma experiência inesquecível! As águas cristalinas de Bonito são realmente impressionantes e o atendimento da Mercosul Turismo foi impecável do início ao fim. Super recomendo!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      text: "A viagem superou todas as expectativas. Os guias são extremamente capacitados e tornaram cada passeio uma verdadeira aula sobre a natureza local. Voltarei com certeza!",
      rating: 5
    },
    {
      name: "Mariana Santos",
      text: "Organização perfeita! Cada detalhe foi pensado para proporcionar conforto e segurança. A flutuação no Rio Sucuri foi uma das experiências mais incríveis da minha vida.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">O Que Dizem Nossos Viajantes</h2>
        
        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Quotation Mark */}
          <div className="absolute -top-10 left-0 text-primary opacity-20 text-8xl">"</div>
          
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden p-4">
            <div 
              className="transition-all duration-500 flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 p-6"
                >
                  <p className="text-gray-700 text-xl italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent' : 'text-gray-300'}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-primary text-white rounded-full p-2 hover:bg-opacity-90 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-accent scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-primary text-white rounded-full p-2 hover:bg-opacity-90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
