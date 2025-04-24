
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: <Phone size={20} />,
      label: "WhatsApp",
      info: "(66) 99712-2590",
      link: "https://wa.me/5566997122590"
    },
    {
      icon: <Mail size={20} />,
      label: "E-mail",
      info: "contato@mercosulturismo.com.br",
      link: "mailto:contato@mercosulturismo.com.br"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      info: "@mercosulturismo",
      link: "https://instagram.com/mercosulturismo"
    }
  ];

  return (
    <section id="contato" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title animate-fade-in">Embarque Nessa Aventura</h2>
        <p className="section-subtitle animate-fade-in">Estamos prontos para planejar sua viagem dos sonhos</p>
        
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-6 text-center hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center mx-auto mb-4">
                {contact.icon}
              </div>
              <h3 className="font-montserrat font-semibold mb-2">{contact.label}</h3>
              <p className="text-neutral">{contact.info}</p>
            </a>
          ))}
        </div>
        
        <p className="text-center text-neutral mt-16 animate-fade-in">
          Norte do Mato Grosso, atendimento para todo Brasil
        </p>
      </div>
    </section>
  );
};

export default Contact;
