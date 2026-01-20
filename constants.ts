
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All', icon: '🛒' },
  { id: 'fruits', name: 'Fruits & Veggies', icon: '🍎' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'bakery', name: 'Bakery', icon: '🍞' },
  { id: 'sweets', name: 'Sweets & Snacks', icon: '🍬' },
  { id: 'staples', name: 'Staples', icon: '🌾' }
];

export const PRODUCTS: Product[] = [
  // Fruits & Veggies
  {
    id: 'f1',
    name: 'Fresh Alphonso Mangoes',
    category: 'fruits',
    price: 800,
    unit: '1 Dozen',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80',
    description: 'King of fruits, sweet and aromatic.',
    isFestive: true
  },
  {
    id: 'f2',
    name: 'Washington Red Apples',
    category: 'fruits',
    price: 180,
    originalPrice: 220,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=500&q=80',
    description: 'Crunchy, sweet, and juice-packed red apples.'
  },
  {
    id: 'f7',
    name: 'Exotic Hass Avocados',
    category: 'fruits',
    price: 299,
    unit: '2 Pieces',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80',
    description: 'Creamy, nutrient-dense avocados perfect for toast.'
  },
  {
    id: 'f8',
    name: 'Baby Spinach Pack',
    category: 'fruits',
    price: 45,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80',
    description: 'Tender baby spinach leaves, pre-washed.'
  },
  {
    id: 'f9',
    name: 'Dragon Fruit (Pitaya)',
    category: 'fruits',
    price: 140,
    unit: '1 Piece',
    image: 'https://images.unsplash.com/photo-1527324688101-046653a04e28?w=500&q=80',
    description: 'Vibrant pink dragon fruit with sweet white flesh.'
  },
  {
    id: 'f10',
    name: 'Bell Pepper Trio',
    category: 'fruits',
    price: 110,
    unit: '3 Pieces',
    image: 'https://images.unsplash.com/photo-1566385101042-1a000c1267c4?w=500&q=80',
    description: 'Red, yellow, and green bell peppers for colorful meals.'
  },
  {
    id: 'f3',
    name: 'Organic Bananas',
    category: 'fruits',
    price: 60,
    unit: '1 Dozen',
    image: 'https://images.unsplash.com/photo-1571771894821-ad996211fdf4?w=500&q=80',
    description: 'Naturally ripened, energy-packed organic bananas.'
  },
  {
    id: 'f4',
    name: 'Green Broccoli',
    category: 'fruits',
    price: 90,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&q=80',
    description: 'Fresh farm broccoli, rich in vitamins.'
  },

  // Dairy & Eggs
  {
    id: 'd1',
    name: 'Organic Whole Milk',
    category: 'dairy',
    price: 65,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1550583724-125581fe2f8a?w=500&q=80',
    description: 'Fresh organic farm milk with zero preservatives.'
  },
  {
    id: 'd7',
    name: 'Unsweetened Almond Milk',
    category: 'dairy',
    price: 240,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80',
    description: 'Premium plant-based milk for health conscious users.'
  },
  {
    id: 'd8',
    name: 'Fresh Mozzarella Balls',
    category: 'dairy',
    price: 280,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=500&q=80',
    description: 'Authentic soft mozzarella for pizzas and salads.'
  },
  {
    id: 'd9',
    name: 'Set Thick Curd',
    category: 'dairy',
    price: 40,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
    description: 'Traditional thick and creamy set curd.'
  },
  {
    id: 'd2',
    name: 'Farm Fresh Brown Eggs',
    category: 'dairy',
    price: 96,
    originalPrice: 110,
    unit: '12 Pieces',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&q=80',
    description: 'High-protein, farm-fresh brown eggs.'
  },
  {
    id: 'd3',
    name: 'Malai Paneer',
    category: 'dairy',
    price: 110,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',
    description: 'Soft and fresh malai paneer for your curries.'
  },

  // Bakery
  {
    id: 'b1',
    name: 'Sourdough Bread',
    category: 'bakery',
    price: 120,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?w=500&q=80',
    description: 'Artisanal sourdough bread with a crispy crust.'
  },
  {
    id: 'b6',
    name: 'Butter Croissants',
    category: 'bakery',
    price: 180,
    unit: '2 Pieces',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80',
    description: 'Flaky, buttery, golden brown French croissants.'
  },
  {
    id: 'b7',
    name: 'Blueberry Bagels',
    category: 'bakery',
    price: 150,
    unit: '4 Pieces',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?w=500&q=80',
    description: 'Freshly baked bagels with real blueberries.'
  },
  {
    id: 'b2',
    name: 'Chocolate Chip Muffins',
    category: 'bakery',
    price: 140,
    unit: '2 Pieces',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80',
    description: 'Moist muffins loaded with chocolate chips.'
  },

  // Sweets & Snacks
  {
    id: 's1',
    name: 'Kaju Katli',
    category: 'sweets',
    price: 550,
    originalPrice: 650,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1589119634710-86716a506822?w=500&q=80',
    description: 'Premium cashew fudge with silver leaf.',
    isFestive: true
  },
  {
    id: 's7',
    name: '70% Dark Chocolate',
    category: 'sweets',
    price: 195,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&q=80',
    description: 'Rich artisanal dark chocolate for true cocoa lovers.'
  },
  {
    id: 's8',
    name: 'Premium Trail Mix',
    category: 'sweets',
    price: 350,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1509911596717-3d76c649688c?w=500&q=80',
    description: 'Healthy mix of nuts, seeds, and dried berries.'
  },
  {
    id: 's2',
    name: 'Gulab Jamun Pack',
    category: 'sweets',
    price: 150,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80',
    description: 'Soft and spongy milk dumplings in sugar syrup.',
    isFestive: true
  },

  // Staples
  {
    id: 'st1',
    name: 'Basmati Rice - Long Grain',
    category: 'staples',
    price: 550,
    originalPrice: 650,
    unit: '5kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    description: 'Premium aged Basmati rice with rich aroma.',
    isFestive: true
  },
  {
    id: 'st7',
    name: 'Extra Virgin Olive Oil',
    category: 'staples',
    price: 890,
    originalPrice: 1100,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80',
    description: 'First cold-pressed olive oil for healthy cooking.'
  },
  {
    id: 'st8',
    name: 'Organic White Quinoa',
    category: 'staples',
    price: 240,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    description: 'High-protein superfood grain, gluten-free.'
  },
  {
    id: 'st9',
    name: 'Red Split Lentils (Masoor Dal)',
    category: 'staples',
    price: 115,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1585827145647-59425f448fea?w=500&q=80',
    description: 'Essential kitchen staple, high in protein.'
  },
  {
    id: 'st2',
    name: 'Premium Sharbati Atta',
    category: 'staples',
    price: 260,
    unit: '5kg',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    description: 'Whole wheat flour for soft rotis.'
  },
  {
    id: 'st3',
    name: 'Pure Cow Ghee',
    category: 'staples',
    price: 650,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=500&q=80',
    description: 'Traditional aroma and taste of pure cow ghee.'
  }
];
