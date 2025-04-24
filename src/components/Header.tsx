
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // WhatsApp URL
  const whatsappUrl = "https://wa.me/5566997122590?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pacotes%20para%20Bonito.";

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300',
        scrolled 
          ? 'bg-primary bg-opacity-95 shadow-md' 
          : 'bg-transparent'
      )}
    >
      <div className="lg:container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="img/logo.png" className='w-44' alt="" />
        </a>

        <nav className="hidden lg:flex space-x-8">
          {['Início', 'Sobre Bonito', 'Passeios', 'O que inclui', 'Datas', 'Investimento', 'Contato'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-white opacity-90 hover:opacity-100 transition-opacity font-montserrat"
            >
              {item}
            </a>
          ))}
        </nav>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white py-2 px-5 rounded-lg font-montserrat font-medium
          hover:bg-opacity-90 transition-colors duration-300"
        >
          Reserve já
        </a>
      </div>
    </header>
  );
};

export default Header;
