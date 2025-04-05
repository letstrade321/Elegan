
import React from 'react';

const About = () => {
  return (
    <section id="about" className="elegant-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">About Elegant Interiors</h2>
          <p className="section-subtitle">Where Vision Meets Craftsmanship</p>
          <div className="space-y-4 text-elegant-charcoal/80">
            <p>
              Founded by Shivam with a passion for transformative spaces, Elegant Interiors has evolved into a distinguished design firm known for creating timeless, sophisticated environments that reflect each client's unique personality and lifestyle.
            </p>
            <p>
              Our philosophy centers on the perfect balance between aesthetics and functionality, creating spaces that are not only visually stunning but also practical for everyday living.
            </p>
            <p>
              With an expert team of designers, architects, and craftsmen, we approach each project with meticulous attention to detail and a commitment to exceeding expectations.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-playfair font-bold text-elegant-gold">15+</div>
              <p className="text-elegant-charcoal/70">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-elegant-gold">250+</div>
              <p className="text-elegant-charcoal/70">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-elegant-gold">18</div>
              <p className="text-elegant-charcoal/70">Design Awards</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-elegant-gold">35+</div>
              <p className="text-elegant-charcoal/70">Team Members</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2070"
              alt="Elegant Interior"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 border-2 border-elegant-gold -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
