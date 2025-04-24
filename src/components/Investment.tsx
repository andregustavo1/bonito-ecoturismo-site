
const Investment = () => {
  const whatsappUrl = "https://wa.me/5566997122590?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pacotes%20para%20Bonito.";

  return (
    <section id="investimento" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">Investimento</h2>
        <p className="section-subtitle animate-fade-in">Sua experiência inesquecível a partir de R$ 2.590,00 por pessoa</p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 card p-8 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M2 17h2v.5H3v1h1v.5H2"></path>
                <path d="M6 17h1.5v2h.5v-2h1v-1H6Z"></path>
                <path d="M18 18v1h2v-1h-1v-.5h1V17h-2v.5h1Z"></path>
                <path d="M22 2 2 22"></path>
                <path d="M18 14h2V3H8v1"></path>
                <path d="M14 12v-2a2 2 0 1 0-4 0v2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">À Vista</h3>
            <p className="text-center mb-6 text-gray-600">Transferência bancária ou Pix com 5% de desconto</p>
            <div className="text-center text-2xl font-bold text-primary mb-4">R$ 2.460,00</div>
            <div className="text-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Reservar
              </a>
            </div>
          </div>
          
          <div className="flex-1 card p-8 animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '200ms' }}>
            <div className="bg-accent bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Parcelado</h3>
            <p className="text-center mb-6 text-gray-600">Cartão de crédito ou boleto bancário em até 12 vezes</p>
            <div className="text-center text-2xl font-bold text-accent mb-4">12x R$ 215,83</div>
            <div className="text-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Reservar
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8 animate-fade-in">
          * Os preços podem sofrer alterações sem aviso prévio. Consulte as condições vigentes no momento da sua reserva.
        </p>
      </div>
    </section>
  );
};

export default Investment;
