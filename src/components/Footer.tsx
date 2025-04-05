
import React from 'react';
import Logo from './Logo';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-elegant-charcoal text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-6 text-white/70">
              Transforming ordinary spaces into extraordinary experiences with sophisticated interior design solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-medium mb-6 text-elegant-gold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-white/70 hover:text-elegant-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-medium mb-6 text-elegant-gold">Services</h3>
            <ul className="space-y-3">
              {['Residential Design', 'Commercial Spaces', 'Hospitality Design', 'Custom Furniture', 'Project Management'].map((service, index) => (
                <li key={index} className="text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-medium mb-6 text-elegant-gold">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for design inspiration and updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-white/10 border border-white/20 px-4 py-2 flex-1 text-white placeholder:text-white/50"
              />
              <button className="bg-elegant-gold px-4 hover:bg-elegant-gold/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50">© {currentYear} Elegant Interiors by Shivam. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-white/50 hover:text-elegant-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-elegant-gold transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
