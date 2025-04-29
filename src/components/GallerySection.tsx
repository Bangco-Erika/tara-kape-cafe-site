
import React from 'react';

const galleryImages = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Coffee shop interior"
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Coffee brewing"
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Coffee beans"
  },
  {
    id: 4,
    src: "/gallery-4.jpg",
    alt: "Latte art"
  },
  {
    id: 5,
    src: "/gallery-5.jpg",
    alt: "Coffee with dessert"
  },
  {
    id: 6,
    src: "/gallery-6.jpg",
    alt: "Coffee machine"
  }
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md h-64"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
