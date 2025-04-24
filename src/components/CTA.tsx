
const CTA = () => {
  const whatsappUrl = "https://wa.me/5566997122590?text=Olá!%20Gostaria%20de%20reservar%20um%20pacote%20para%20Bonito.";
  
  return (
    <section 
      className="py-24 px-6 md:px-12 lg:px-24 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      
      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          Pronto para Descobrir Bonito?
        </h2>
        <p className="text-xl text-white mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Reserve seu lugar em uma de nossas próximas expedições
        </p>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block text-lg animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Reservar Agora
        </a>
      </div>
    </section>
  );
};

export default CTA;
