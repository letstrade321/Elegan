
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Minimalist Villa',
    category: 'residential',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053'
  },
  {
    id: 2,
    title: 'Luxury Boutique Hotel',
    category: 'hospitality',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2027'
  },
  {
    id: 3,
    title: 'Contemporary Office Space',
    category: 'commercial',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069'
  },
  {
    id: 4,
    title: 'Chic Urban Apartment',
    category: 'residential',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070'
  },
  {
    id: 5,
    title: 'Elegant Restaurant Design',
    category: 'hospitality',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2073'
  },
  {
    id: 6,
    title: 'Modern Retail Space',
    category: 'commercial',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070'
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  return (
    <section id="portfolio" className="elegant-container">
      <div className="text-center mb-16">
        <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Our Portfolio</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Showcasing our finest work across residential, commercial, and hospitality spaces
        </p>
      </div>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-elegant-cream">
            <TabsTrigger 
              value="all" 
              className="text-elegant-charcoal data-[state=active]:text-elegant-gold data-[state=active]:border-b-2 data-[state=active]:border-elegant-gold rounded-none"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger 
              value="residential" 
              className="text-elegant-charcoal data-[state=active]:text-elegant-gold data-[state=active]:border-b-2 data-[state=active]:border-elegant-gold rounded-none"
            >
              Residential
            </TabsTrigger>
            <TabsTrigger 
              value="commercial" 
              className="text-elegant-charcoal data-[state=active]:text-elegant-gold data-[state=active]:border-b-2 data-[state=active]:border-elegant-gold rounded-none"
            >
              Commercial
            </TabsTrigger>
            <TabsTrigger 
              value="hospitality" 
              className="text-elegant-charcoal data-[state=active]:text-elegant-gold data-[state=active]:border-b-2 data-[state=active]:border-elegant-gold rounded-none"
            >
              Hospitality
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item group overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="gallery-info">
                  <h3 className="text-white font-playfair font-medium text-xl">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Portfolio;
