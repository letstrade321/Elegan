
import React from 'react';
import IntroOverlay from '@/components/IntroOverlay';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <IntroOverlay />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
