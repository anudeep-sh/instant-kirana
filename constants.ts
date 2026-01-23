
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Storefront', icon: '🏛️', color: 'bg-blue-100 text-blue-600' },
  { id: 'fruits', name: 'Fresh Harvest', icon: '🌽', color: 'bg-emerald-100 text-emerald-600' },
  { id: 'dairy', name: 'Dairy & Cheese', icon: '🧀', color: 'bg-amber-100 text-amber-600' },
  { id: 'bakery', name: 'Patisserie', icon: '🥐', color: 'bg-orange-100 text-orange-600' },
  { id: 'sweets', name: 'Gourmet Snacks', icon: '🍿', color: 'bg-rose-100 text-rose-600' },
  { id: 'staples', name: 'Fine Staples', icon: '🍚', color: 'bg-indigo-100 text-indigo-600' }
];

export const BRANDS = [
  { name: 'Organic Valley', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501c27?w=200&h=100&fit=crop&q=80' },
  { name: 'Blue Tokai', logo: 'https://images.unsplash.com/photo-1559056191-7417f245831e?w=200&h=100&fit=crop&q=80' },
  { name: 'Amul Artisan', logo: 'https://images.unsplash.com/photo-1550583724-125581f77833?w=200&h=100&fit=crop&q=80' },
  { name: 'Lindt & Sprüngli', logo: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=200&h=100&fit=crop&q=80' },
  { name: 'Nature\'s Path', logo: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=200&h=100&fit=crop&q=80' }
];

export const PRODUCTS: Product[] = [
  // --- FRUITS ---
  {
    id: 'f1',
    name: 'Premium Sun-Kissed Mangoes',
    brand: 'Maruti Gold',
    category: 'fruits',
    price: 950,
    unit: '12 Units',
    image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&q=80',
    description: 'Hand-picked export quality alphonso mangoes.',
    isFestive: true
  },
  {
    id: 'f2',
    name: 'Royal Gala Apples',
    brand: 'Washington Orchards',
    category: 'fruits',
    price: 240,
    originalPrice: 280,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&q=80',
    description: 'Crisp, aromatic apples from the valleys.'
  },
  {
    id: 'f3',
    name: 'Organic Hass Avocados',
    brand: 'Organic Valley',
    category: 'fruits',
    price: 320,
    unit: '2 Units',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80',
    description: 'Perfectly ripe, creamy avocados for your morning toast.'
  },
  {
    id: 'f4',
    name: 'Exotic Dragon Fruit',
    brand: 'Maruti Farms',
    category: 'fruits',
    price: 180,
    unit: '1 Unit',
    image: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=800&q=80',
    description: 'Nutrient-rich pink dragon fruit with white flesh.'
  },
  {
    id: 'f5',
    name: 'Wild Forest Blueberries',
    brand: 'Berry Bliss',
    category: 'fruits',
    price: 450,
    unit: '125g',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&q=80',
    description: 'Hand-picked wild blueberries, bursting with antioxidants.'
  },

  // --- DAIRY ---
  {
    id: 'd1',
    name: 'Artisan Burrata Cheese',
    brand: 'The Cheese Collective',
    category: 'dairy',
    price: 450,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1634487359989-3e906335dd37?w=800&q=80',
    description: 'Creamy artisanal cheese, made fresh daily.'
  },
  {
    id: 'd11',
    name: 'Grass-Fed Ghee',
    brand: 'Maruti Farms',
    category: 'dairy',
    price: 850,
    unit: '500ml',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80',
    description: 'Traditional Bilona method clarified butter.'
  },
  {
    id: 'd3',
    name: 'Truffle-Infused Butter',
    brand: 'Artisan Gourmet',
    category: 'dairy',
    price: 580,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80',
    description: 'Churned butter infused with black summer truffles.'
  },
  {
    id: 'd4',
    name: 'Classic Greek Yogurt',
    brand: 'The Dairy Co.',
    category: 'dairy',
    price: 120,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    description: 'Thick, creamy, and packed with probiotics.'
  },

  // --- BAKERY ---
  {
    id: 'b1',
    name: 'Rustic Walnut Sourdough',
    brand: 'Bakehouse 42',
    category: 'bakery',
    price: 180,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    description: 'Slow-fermented sourdough with roasted walnuts.'
  },
  {
    id: 'b2',
    name: 'Pain au Chocolat',
    brand: 'La Parisienne',
    category: 'bakery',
    price: 150,
    unit: '1 Unit',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&q=80',
    description: 'Buttery, flaky pastry filled with dark chocolate.'
  },
  {
    id: 'b3',
    name: 'Artisan Baguette',
    brand: 'Bakehouse 42',
    category: 'bakery',
    price: 90,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?w=800&q=80',
    description: 'Traditional French baguette with a crisp crust.'
  },

  // --- SWEETS ---
  {
    id: 's11',
    name: 'Dark Cocoa Sea Salt Truffles',
    brand: 'Lindt & Sprüngli',
    category: 'sweets',
    price: 520,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=80',
    description: 'Exquisite 70% dark chocolate truffles.'
  },
  {
    id: 's2',
    name: 'Rose Petal Baklava',
    brand: 'The Levant',
    category: 'sweets',
    price: 640,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    description: 'Hand-layered filo pastry with honey and roses.'
  },
  {
    id: 's3',
    name: 'Roasted Almonds with Honey',
    brand: 'Maruti Gold',
    category: 'sweets',
    price: 420,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?w=800&q=80',
    description: 'Slow-roasted almonds glazed in wildflower honey.'
  },

  // --- STAPLES ---
  {
    id: 'st12',
    name: 'Single Estate Arabica',
    brand: 'Blue Tokai',
    category: 'staples',
    price: 680,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1559056191-7417f245831e?w=800&q=80',
    description: 'Micro-lot coffee beans, roasted to perfection.'
  },
  {
    id: 'st2',
    name: 'Cold Pressed Olive Oil',
    brand: 'Bertolli Reserve',
    category: 'staples',
    price: 1250,
    originalPrice: 1400,
    unit: '1L',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
    description: 'First press, cold extraction from Mediterranean olives.'
  },
  {
    id: 'st3',
    name: 'Aged Himalayan Basmati',
    brand: 'Maruti Reserve',
    category: 'staples',
    price: 480,
    unit: '2kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
    description: 'Extra long grain rice, aged for 2 years for superior aroma.'
  },
  {
    id: 'st4',
    name: 'Hand-Harvested Sea Salt',
    brand: 'Maldon Heritage',
    category: 'staples',
    price: 350,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=800&q=80',
    description: 'Pyramidal salt flakes, perfect for finishing gourmet dishes.'
  }
];
