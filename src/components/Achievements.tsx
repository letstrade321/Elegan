
import React from 'react';
import { Separator } from '@/components/ui/separator';

const awards = [
  {
    year: '2024',
    title: 'Interior Design Excellence Award',
    organization: 'International Design Association'
  },
  {
    year: '2023',
    title: 'Best Luxury Residential Design',
    organization: 'Architecture & Design Magazine'
  },
  {
    year: '2022',
    title: 'Innovation in Commercial Spaces',
    organization: 'Commercial Interior Design Awards'
  },
  {
    year: '2021',
    title: 'Sustainable Design Award',
    organization: 'Green Building Council'
  },
  {
    year: '2020',
    title: 'Designer of the Year',
    organization: 'Home & Decor Excellence'
  }
];

const featureIn = [
  'Architectural Digest',
  'Elle Decor',
  'Vogue Living',
  'Interior Design Magazine',
  'Luxe Interiors + Design'
];

const Achievements = () => {
  return (
    <section className="elegant-container bg-elegant-taupe/5">
      <div className="text-center mb-16">
        <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Our Achievements</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Recognition of our commitment to excellence in interior design
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Awards */}
        <div>
          <h3 className="text-2xl font-playfair font-medium mb-8 text-elegant-taupe">Awards & Recognition</h3>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div key={index}>
                <div className="flex items-start">
                  <span className="text-elegant-gold font-playfair font-bold text-xl w-16">{award.year}</span>
                  <div>
                    <h4 className="font-playfair text-lg text-elegant-charcoal">{award.title}</h4>
                    <p className="text-sm text-elegant-charcoal/70">{award.organization}</p>
                  </div>
                </div>
                {index < awards.length - 1 && <Separator className="my-6 bg-elegant-gold/20" />}
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured In */}
        <div>
          <h3 className="text-2xl font-playfair font-medium mb-8 text-elegant-taupe">Featured In</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureIn.map((publication, index) => (
              <div 
                key={index} 
                className="border border-elegant-gold/30 p-6 flex items-center justify-center text-center hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <span className="text-elegant-charcoal font-playfair">{publication}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-playfair font-medium mb-4 text-elegant-taupe">Client Satisfaction</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 text-center">
              <div className="bg-white p-6 shadow-sm">
                <span className="block text-3xl font-playfair font-bold text-elegant-gold">98%</span>
                <span className="text-elegant-charcoal/70">Client Return Rate</span>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <span className="block text-3xl font-playfair font-bold text-elegant-gold">250+</span>
                <span className="text-elegant-charcoal/70">Projects Completed</span>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <span className="block text-3xl font-playfair font-bold text-elegant-gold">15+</span>
                <span className="text-elegant-charcoal/70">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
