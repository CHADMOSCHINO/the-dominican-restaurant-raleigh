import { BusinessInfo, MenuItem, Review } from './types';
import { Utensils, Clock, MapPin, Truck } from 'lucide-react';

export const BUSINESS_INFO: BusinessInfo = {
  name: "The Dominican Restaurant",
  address: "3601 Capital Blvd suite 107",
  cityStateZip: "Raleigh, NC 27604",
  locationNote: "Across from Chuck E. Cheese",
  phone: "(919) 977-0029",
  managementPhone: "(646) 323-5532",
  onlineOrderLink: "https://www.clover.com/online-ordering/the-dominican-restaurant-raleigh",
  mapEmbedUrl: "https://maps.google.com/maps?q=3601+Capital+Blv+suite+107+Raleigh+NC+27604&t=&z=15&ie=UTF8&iwloc=&output=embed",
  // Public asset served by Vite/Netlify
  logo: "/dominicanrestaurantlogo.png"
};

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Menu', href: '#menu' },
  { name: 'Order Delivery/Pickup', href: 'https://www.clover.com/online-ordering/the-dominican-restaurant-raleigh' },
  { name: 'Gallery', href: '#gallery' },
];

export const FEATURES = [
  {
    icon: Utensils,
    title: "Authentic Flavor",
    description: "Traditional recipes passed down through generations."
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Fresh food served with the speed you need for lunch or dinner."
  },
  {
    icon: Truck,
    title: "Catering Available",
    description: "Bring the taste of the DR to your next event."
  }
];

export const POPULAR_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Mofongo con Camarones",
    description: "Signature mashed fried plantains with garlic and pork cracklings, topped with savory garlic shrimp.",
    price: "$18.99",
    category: "Mofongo",
    image: "https://picsum.photos/seed/mofongo_shrimp/800/600"
  },
  {
    id: 2,
    name: "Dominican Chimi Burger",
    description: "Authentic Dominican street-style burger with seasoned beef, cabbage, tomatoes, and special sauce.",
    price: "$12.50",
    category: "Popular",
    image: "https://picsum.photos/seed/burger_chimi/800/600"
  },
  {
    id: 3,
    name: "Pernil Asado",
    description: "Slow-roasted pork shoulder, marinated for 24 hours. Juicy inside with a perfect crispy skin.",
    price: "$15.99",
    category: "Popular",
    image: "https://picsum.photos/seed/pork_roast/800/600"
  },
  {
    id: 4,
    name: "Pollo Guisado",
    description: "Tender chicken stewed in a rich, homemade tomato-based sauce with authentic island spices.",
    price: "$14.50",
    category: "Popular",
    image: "https://picsum.photos/seed/stew_chicken/800/600"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    text: "The best Dominican food in the Triangle! The mofongo is absolutely incredible."
  },
  {
    id: 2,
    author: "David R.",
    rating: 5,
    text: "Feels just like home. The service is fast and the staff is super friendly."
  },
  {
    id: 3,
    author: "Elena G.",
    rating: 5,
    text: "A hidden gem on Capital Blvd. The Pernil is juicy and the beans are perfect."
  }
];

export const MENU_DATA = {
  daily: [
    { day: "Monday", items: [
        { name: "Pollo Guisado (Stew Chicken)", price: "$13.75" },
        { name: "Pollo al Horno (Roasted Chicken)", price: "$13.25" },
        { name: "Bacalao (Cod Fish)", price: "$14.25" },
        { name: "Cerdo Guisado (Stew Pork)", price: "$13.85" },
        { name: "Patimongo (Pig Trotters Tripe)", price: "SM $12 / LG $17" }
    ]},
    { day: "Tuesday", items: [
        { name: "Pollo Guisado", price: "$13.75" },
        { name: "Pollo al Horno", price: "$13.25" },
        { name: "Albóndigas (DR Meatballs)", price: "$13.85" },
        { name: "Pernil (Roasted Pork)", price: "$14.25" },
        { name: "Bistec Guisada", price: "$15.00" }
    ]},
    { day: "Wednesday", items: [
        { name: "Pollo Guisado", price: "$13.75" },
        { name: "Cerdo Guisado", price: "$13.85" },
        { name: "Cocido de Pata de Vaca (Beef Trotters)", price: "SM $12 / LG $17" },
        { name: "Pernil (Roasted Pork)", price: "$14.25" },
        { name: "Bacalao", price: "$14.25" }
    ]},
    { day: "Thursday", items: [
        { name: "Res Guisada (Stew Beef)", price: "$14.45" },
        { name: "Pollo al Horno", price: "$13.25" },
        { name: "Pollo Guisado", price: "$13.75" },
        { name: "Costilla al Horno (Roasted Ribs)", price: "$14.25" },
        { name: "Pernil (Roasted Pork)", price: "$14.25" }
    ]},
    { day: "Friday", items: [
        { name: "Mondongo (Tripe Soup)", price: "SM $12 / LG $17" },
        { name: "Pollo Guisado", price: "$13.85" },
        { name: "Pollo al Horno", price: "$13.25" },
        { name: "Pescado en Coco (Coconut Fish)", price: "$15.00" },
        { name: "Pernil", price: "$14.25" },
        { name: "Chivo Guisado (Goat Stew)", price: "$19.25" }
    ]},
    { day: "Saturday", items: [
        { name: "Sancocho", price: "SM $13 / LG $18" },
        { name: "Res Guisada", price: "$14.45" },
        { name: "Pollo Guisado", price: "$13.85" },
        { name: "Cerdo Guisado", price: "$13.85" },
        { name: "Bacalao", price: "$14.25" }
    ]},
    { day: "Sunday", items: [
        { name: "Rabo Guisado (Oxtails)", price: "$20.00" },
        { name: "Costilla al Horno", price: "$14.25" },
        { name: "Pollo Guisado", price: "$13.85" },
        { name: "Pernil", price: "$14.25" },
        { name: "Albóndigas", price: "$13.85" },
        { name: "Sancocho", price: "SM $13 / LG $18" }
    ]},
  ],
  mofongo: [
    { name: "Pollo Mofongo", price: "$16.25", description: "Chicken Mofongo" },
    { name: "Chicharrón Mofongo", price: "$15.00", description: "Fried Pig Skin Mofongo" },
    { name: "Bistec Mofongo", price: "$17.50", description: "Steak Mofongo" },
    { name: "Camarones Mofongo", price: "$21.25", description: "Shrimp Mofongo" },
    { name: "Pescado de Coco", price: "$21.00", description: "Coconut Fish Mofongo" },
    { name: "Churrasco Mofongo", price: "$22.00", description: "Skirt Steak Mofongo" }
  ],
  mains: [
    { name: "Pescado Bocachica", price: "$25.00", description: "Red Snapper" },
    { name: "Pescado Tropical", price: "$25 / $33", description: "Fish and Shrimp" },
    { name: "Pescado Frito", price: "$18.00", description: "Fried Tilapia Fish" },
    { name: "Filete de Pescado en Coco", price: "$17.00", description: "Fillet Fish in Coconut Sauce" },
    { name: "Camarones Fritos", price: "$15.00", description: "Fried Shrimp" },
    { name: "Camarones al Ajillo", price: "$15.00", description: "Garlic Sauce Shrimp" },
    { name: "Bistec Encebollado", price: "$18.25", description: "Steak and Onions" },
    { name: "Churrasco", price: "$28.00", description: "Skirt Steak" },
    { name: "Bandeja Paisa", price: "$27.00", description: "Colombian Platter" }
  ],
  street: [
    { name: "Chimi Burger", price: "$9.95", description: "Dominican Burger (Chicken or Beef)" },
    { name: "Yaroa", price: "$12.00", description: "Fries/Mash loaded with cheese & meat (Res/Pollo)" },
    { name: "Patacón", price: "$12.00", description: "Fried Green Plantain Sandwich" },
    { name: "Arepas Colombianas", price: "$6.00", description: "Beef, Chicken, or Chicharrón" },
    { name: "Empanadas", price: "$3.75 - $4.75", description: "Cheese, Beef, Chicken, or Mix" },
    { name: "Empanada Special", price: "3 for $10", description: "Any 3 empanadas" },
    { name: "Picalonga (For 2)", price: "$20.00", description: "Meat mix platter (Salami, Cheese, Chicken, Pork)" },
    { name: "Chicharrón de Cerdo", price: "$12 (1/2lb) / $20 (1lb)", description: "Fried Pig Skin" },
    { name: "Pica Pollo", price: "$12.85", description: "Fried Chicken w/ Side" }
  ],
  breakfast: [
    { name: "Mangú 3 Golpes", price: "$11 (Mini) / $14 (Reg)", description: "Mashed plantains, salami, cheese, eggs" },
    { name: "Quesadillas Quisqueyana", price: "$12.00", description: "Eggs, salami, cheese, avocado" },
    { name: "Ham & Cheese Sandwich", price: "$6.00", description: "Jamón y queso" },
    { name: "Bacon, Egg & Cheese", price: "$6.00", description: "" },
    { name: "El Completo Dominicano", price: "$8.00", description: "La Tripleta Sandwich" },
    { name: "Chicken Sub", price: "$8.00", description: "" }
  ],
  drinks: [
    { name: "Beer Bucket (Mon-Wed)", price: "6 for $25.00", description: "Heineken, Corona, Presidente, Modelo, Coors" },
    { name: "Batidas (Smoothies)", price: "$6.00 - $7.00", description: "Zapote, Lechoza, Island Green, Mixed Fruit" },
    { name: "Jugos Naturales", price: "$4.00", description: "Chinola, Tamarindo, Lemonade, Morir Soñando, Guava" },
    { name: "Coffee", price: "$2.00", description: "Cafe" },
    { name: "Postres (Desserts)", price: "$5.00", description: "Tres Leches, Flan" }
  ]
};