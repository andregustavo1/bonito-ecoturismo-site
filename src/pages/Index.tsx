
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutBonito from '@/components/AboutBonito';
import Tours from '@/components/Tours';
import Inclusions from '@/components/Inclusions';
import Gallery from '@/components/Gallery';
import Dates from '@/components/Dates';
import Investment from '@/components/Investment';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "Mercosul Turismo - Bonito-MS | Ecoturismo Premium";
  }, []);

  return (
    <>
      <ProgressBar />
      <Header />
      <HeroSection />
      <AboutBonito />
      <Tours />
      <Inclusions />
      <Gallery />
      <Dates />
      <Investment />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
};

export default Index;
