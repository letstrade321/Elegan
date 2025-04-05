
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Residential Design',
    description: 'Transform your home into a sanctuary that reflects your personal style while enhancing functionality and comfort.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070'
  },
  {
    title: 'Commercial Spaces',
    description: 'Create inspiring work environments that boost productivity while making a lasting impression on clients and visitors.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070'
  },
  {
    title: 'Hospitality Design',
    description: 'Craft memorable guest experiences through thoughtfully designed spaces that balance luxury, comfort, and practicality.',
    image: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=2074'
  },
  {
    title: 'Custom Furniture',
    description: 'Commission bespoke pieces that perfectly complement your space, ensuring a truly unique and personalized interior.',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070'
  }
];

const Services = () => {
  return (
    <section id="services" className="elegant-container bg-elegant-taupe/5">
      <div className="text-center mb-16">
        <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Our Design Services</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Comprehensive interior design solutions tailored to your unique needs and vision
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="text-xl font-playfair font-semibold mb-3 text-elegant-charcoal">{service.title}</h3>
              <p className="text-elegant-charcoal/70">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-elegant-taupe font-medium mb-6">Our comprehensive process includes:</p>
        <div className="flex flex-wrap justify-center gap-6">
          {['Consultation', 'Concept Development', 'Space Planning', 'Material Selection', 'Project Management', 'Installation'].map((step, index) => (
            <div key={index} className="px-6 py-3 border border-elegant-gold/30 text-elegant-charcoal hover:bg-elegant-gold/10 transition-colors duration-300">
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
