
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';
import { CartProvider } from '@/context/CartContext';

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = 'Tara Kape! Coffee Shop';
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
        <Footer />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
};

export default Index;
