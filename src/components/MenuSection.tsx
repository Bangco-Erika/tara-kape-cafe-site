
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: "coffee-1",
    name: "Classic Espresso",
    description: "Our signature espresso with rich flavor and perfect crema, brewed with freshly ground beans",
    price: 120,
    image: "/menu-1.jpg"
  },
  {
    id: "coffee-2",
    name: "Caramel Macchiato",
    description: "Espresso with steamed milk and sweet caramel drizzle, topped with a delicate milk foam",
    price: 150,
    image: "/menu-2.jpg"
  },
  {
    id: "coffee-3",
    name: "Iced Coffee",
    description: "Cold brewed coffee poured over ice with a splash of milk and a hint of sweetness",
    price: 180,
    image: "/menu-3.jpg"
  },
  {
    id: "coffee-4",
    name: "Oreo Frappe",
    description: "Blended coffee with crushed Oreos, milk, and ice topped with whipped cream and cookie crumbles",
    price: 195,
    image: "/menu-4.jpg"
  },
  {
    id: "coffee-5",
    name: "Hazelnut Latte",
    description: "Espresso with steamed milk and rich hazelnut flavor, finished with a light dusting of cinnamon",
    price: 165,
    image: "/menu-5.jpg"
  },
  {
    id: "coffee-6",
    name: "Barako Americano",
    description: "Strong Filipino Barako coffee served Americano style with hot water to highlight its bold flavor",
    price: 145,
    image: "/menu-6.jpg"
  }
];

const MenuSection: React.FC = () => {
  const { addItem } = useCart();
  
  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };
  
  return (
    <section id="menu" className="py-16 bg-coffee-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-coffee-dark">{item.name}</h3>
                  <span className="font-semibold text-coffee">₱{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button 
                  onClick={() => handleAddToCart(item)} 
                  className="w-full bg-coffee hover:bg-coffee-dark text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
