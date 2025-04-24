
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const links = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre Bonito', href: '#sobre-bonito' },
    { name: 'Passeios', href: '#passeios' },
    { name: 'O que inclui', href: '#o-que-inclui' },
    { name: 'Datas', href: '#datas' },
    { name: 'Investimento', href: '#investimento' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <footer className="bg-primary text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mercosul Turismo</h3>
            <p className="text-white text-opacity-80 text-sm max-w-xs">
              Experiências exclusivas de ecoturismo com pacotes rodoviários e aéreos, nacionais e internacionais.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/5566997122590" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity text-sm"
                >
                  WhatsApp: (66) 99712-2590
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@mercosulturismo.com.br"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity text-sm"
                >
                  E-mail: contato@mercosulturismo.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/mercosulturismo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity text-sm"
                >
                  Instagram: @mercosulturismo
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-60 text-sm">
            © 2025 Mercosul Turismo. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-white bg-opacity-10 rounded-full p-3 hover:bg-opacity-20 transition-all"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
