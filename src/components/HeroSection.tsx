
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-coffee-cream/30 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 md:pr-8 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-coffee-dark">
            Best Coffee
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 text-coffee">
            Make your day great with our special coffee!
          </h2>
          <p className="text-gray-600 mb-8 max-w-md md:max-w-xl">
            Welcome to our coffeeshop, where every bean tells a story and every cup sparks joy. Experience the finest brews in a cozy atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-coffee hover:bg-coffee-dark text-white">
              Order Now
            </Button>
            <Button variant="outline" className="border-coffee text-coffee hover:bg-coffee hover:text-white">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative rounded-full overflow-hidden bg-coffee-accent/20 p-4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
            <img 
              src="/hero-coffee.jpg" 
              alt="Coffee" 
              className="object-cover w-full h-full rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <a href="#about" className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-coffee rounded-full">
          <svg className="w-6 h-6 text-coffee mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
