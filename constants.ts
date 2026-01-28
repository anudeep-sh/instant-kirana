
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
    id: 'f3',
    name: 'Zespri Golden Kiwi',
    category: 'fruits',
    price: 150,
    originalPrice: 200,
    unit: 'Pack of 3',
    image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&q=80',
    description: 'Sweet and golden inside, perfect for smoothies.'
  },
  {
    id: 'f4',
    name: 'Organic Pomegranate',
    category: 'fruits',
    price: 240,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&q=80',
    description: 'Juicy rubies full of health benefits.'
  },
  {
    id: 'f10',
    name: 'Fresh Blueberries',
    category: 'fruits',
    price: 299,
    originalPrice: 450,
    unit: '125g',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&q=80',
    description: 'Premium imported blueberries, rich in antioxidants.'
  },
  {
    id: 'f11',
    name: 'Exotic Dragon Fruit',
    category: 'fruits',
    price: 120,
    unit: '1 Unit',
    image: 'https://images.unsplash.com/photo-1527325679963-41f3a7457042?w=500&q=80',
    description: 'Vibrant pink dragon fruit with white flesh.'
  },
  {
    id: 'f6',
    name: 'Fresh Yellow Bananas',
    category: 'fruits',
    price: 60,
    originalPrice: 80,
    unit: '1 Dozen',
    image: 'https://images.unsplash.com/photo-1603833665858-e81b1c7e4660?w=500&q=80',
    description: 'Energy-rich Cavendish bananas.'
  },
  {
    id: 'f7',
    name: 'Farm Onions (Value Pack)',
    category: 'fruits',
    price: 145,
    originalPrice: 190,
    unit: '5kg',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=500&q=80',
    description: 'Fresh farm-picked red onions.'
  },
  {
    id: 'f12',
    name: 'Green Seedless Grapes',
    category: 'fruits',
    price: 130,
    originalPrice: 160,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369b41f8f?w=500&q=80',
    description: 'Sweet and crunchy table grapes.'
  },
  {
    id: 'f13',
    name: 'Premium Broccoli',
    category: 'fruits',
    price: 90,
    unit: '1 Unit',
    image: 'https://images.unsplash.com/photo-1452962446411-949430f90e66?w=500&q=80',
    description: 'Crispy green broccoli florets.'
  },

  // Dairy & Eggs
  {
    id: 'd1',
    name: 'Organic Whole Milk',
    category: 'dairy',
    price: 65,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1550583724-125581fe2f8a?w=500&q=80',
    description: 'Fresh organic farm milk.'
  },
  {
    id: 'd4',
    name: 'Fresh Farm Eggs (30)',
    category: 'dairy',
    price: 175,
    originalPrice: 210,
    unit: 'Tray of 30',
    image: 'https://images.unsplash.com/photo-1582722872445-44ad5c7c046e?w=500&q=80',
    description: 'High-protein white eggs.'
  },
  {
    id: 'd6',
    name: 'Amul Mozzarella Cheese',
    category: 'dairy',
    price: 245,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=500&q=80',
    description: 'Perfectly stretchy cheese for pizzas.'
  },
  {
    id: 'd7',
    name: 'Greek Yogurt (Blueberry)',
    category: 'dairy',
    price: 140,
    originalPrice: 170,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
    description: 'Thick and fruity probiotic yogurt.'
  },
  {
    id: 'd8',
    name: 'Fresh Malai Paneer',
    category: 'dairy',
    price: 110,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',
    description: 'Soft and creamy fresh cottage cheese.'
  },
  {
    id: 'd5',
    name: 'Pure Desi Ghee',
    category: 'dairy',
    price: 640,
    originalPrice: 720,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',
    description: 'Traditional clarified butter.'
  },

  // Bakery
  {
    id: 'b1',
    name: 'Sourdough Bread',
    category: 'bakery',
    price: 99,
    originalPrice: 150,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?w=500&q=80',
    description: 'Artisanal sourdough.'
  },
  {
    id: 'b6',
    name: 'Chocolate Chip Muffins',
    category: 'bakery',
    price: 140,
    originalPrice: 200,
    unit: 'Pack of 2',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&q=80',
    description: 'Moist muffins loaded with Belgian chocolate.'
  },
  {
    id: 'b7',
    name: 'Artisan Baguettes',
    category: 'bakery',
    price: 85,
    unit: '2 Units',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    description: 'Classic French-style crusty bread.'
  },
  {
    id: 'b8',
    name: 'Whole Wheat Pav',
    category: 'bakery',
    price: 40,
    unit: 'Pack of 6',
    image: 'https://images.unsplash.com/photo-1586773860418-d319663dd55c?w=500&q=80',
    description: 'Healthy whole wheat pav for Vada Pav or Bhaji.'
  },
  {
    id: 'b2',
    name: 'Butter Croissants',
    category: 'bakery',
    price: 180,
    originalPrice: 240,
    unit: 'Pack of 2',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80',
    description: 'Flaky and buttery.'
  },

  // Sweets & Snacks
  {
    id: 's1',
    name: 'Premium Gulab Jamun',
    category: 'sweets',
    price: 180,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80',
    description: 'Soft melt-in-the-mouth khoya balls.',
    isFestive: true
  },
  {
    id: 's2',
    name: 'Cashew Barfi',
    category: 'sweets',
    price: 450,
    originalPrice: 550,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1599490659223-efd072e7e97d?w=500&q=80',
    description: 'Pure Kaju Katli.',
    isFestive: true
  },
  {
    id: 's7',
    name: 'Roasted Cashews (W320)',
    category: 'sweets',
    price: 340,
    originalPrice: 480,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80',
    description: 'Large, crunchy roasted salted cashews.'
  },
  {
    id: 's8',
    name: 'Dark Chocolate Truffles',
    category: 'sweets',
    price: 499,
    originalPrice: 650,
    unit: '150g',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=500&q=80',
    description: 'Premium artisanal dark chocolate truffles.'
  },
  {
    id: 's4',
    name: 'Party Pack Nachos',
    category: 'sweets',
    price: 90,
    originalPrice: 120,
    unit: '150g',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80',
    description: 'Cheese flavored crunchy nachos.'
  },
  {
    id: 's5',
    name: 'Family Pack Oreos',
    category: 'sweets',
    price: 120,
    originalPrice: 150,
    unit: '300g',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80',
    description: 'Milk\'s favorite cookie.'
  },

  // Staples
  {
    id: 'st1',
    name: 'Daawat Basmati Rice',
    category: 'staples',
    price: 550,
    originalPrice: 700,
    unit: '5kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    description: 'Extra long grain.'
  },
  {
    id: 'st8',
    name: 'Extra Virgin Olive Oil',
    category: 'staples',
    price: 950,
    originalPrice: 1300,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80',
    description: 'First cold-pressed Spanish olive oil.'
  },
  {
    id: 'st9',
    name: 'Organic Quinoa',
    category: 'staples',
    price: 240,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    description: 'High-protein healthy superfood grain.'
  },
  {
    id: 'st10',
    name: 'Pure Himalayan Honey',
    category: 'staples',
    price: 280,
    originalPrice: 450,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80',
    description: '100% natural and unprocessed mountain honey.'
  },
  {
    id: 'st11',
    name: 'Unpolished Toor Dal',
    category: 'staples',
    price: 165,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80',
    description: 'Healthy, chemical-free protein.'
  },
  {
    id: 'st3',
    name: 'Refined Sunflower Oil',
    category: 'staples',
    price: 140,
    originalPrice: 180,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80',
    description: 'Light and healthy.'
  }
];
