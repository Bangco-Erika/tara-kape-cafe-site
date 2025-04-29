
import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { toggleCart, totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-coffee-dark font-bold text-2xl flex items-center">
          <span className="mr-2">☕</span>
          <span>Tara Kape!</span>
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart}
            className="mr-2 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-coffee text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <button 
            onClick={toggleMenu}
            className="text-coffee-dark p-2"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-coffee-dark hover:text-coffee transition-colors">Home</a></li>
            <li><a href="#about" className="text-coffee-dark hover:text-coffee transition-colors">About</a></li>
            <li><a href="#menu" className="text-coffee-dark hover:text-coffee transition-colors">Menu</a></li>
            <li><a href="#gallery" className="text-coffee-dark hover:text-coffee transition-colors">Gallery</a></li>
            <li><a href="#contact" className="text-coffee-dark hover:text-coffee transition-colors">Contact</a></li>
          </ul>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart}
            className="relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-coffee text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}>
          <div className="p-5 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <a href="#" className="text-coffee-dark font-bold text-2xl">☕ Tara Kape!</a>
              <button onClick={closeMenu} className="text-coffee-dark p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-6 text-lg">
              <li><a href="#" onClick={closeMenu} className="block py-2 text-coffee-dark hover:text-coffee">Home</a></li>
              <li><a href="#about" onClick={closeMenu} className="block py-2 text-coffee-dark hover:text-coffee">About</a></li>
              <li><a href="#menu" onClick={closeMenu} className="block py-2 text-coffee-dark hover:text-coffee">Menu</a></li>
              <li><a href="#gallery" onClick={closeMenu} className="block py-2 text-coffee-dark hover:text-coffee">Gallery</a></li>
              <li><a href="#contact" onClick={closeMenu} className="block py-2 text-coffee-dark hover:text-coffee">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
