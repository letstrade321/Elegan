
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-elegant-charcoal/30 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Elevate Your Space
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8 max-w-xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Transforming ordinary spaces into extraordinary experiences with sophisticated interior design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <ScrollLink to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>
              <Button className="bg-elegant-gold hover:bg-elegant-gold/90 text-white rounded-none px-8 py-6">
                View Our Work
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500}>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-elegant-charcoal rounded-none px-8 py-6">
                Contact Us
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
      
      {/* Decorative design element */}
      <div className="absolute bottom-10 right-10 hidden md:block z-20">
        <div className="w-20 h-20 border-2 border-elegant-gold/50 rotate-45" />
      </div>
    </section>
  );
};

export default Hero;
