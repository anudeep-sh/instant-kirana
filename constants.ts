
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All', icon: '🛒' },
  { id: 'fruits', name: 'Fruits & Veggies', icon: '🍎' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'staples', name: 'Atta, Rice & Dal', icon: '🌾' },
  { id: 'snacks', name: 'Snacks & Sweets', icon: '🍬' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'household', name: 'Household', icon: '🧹' }
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
    name: 'Banana Robusta',
    category: 'fruits',
    price: 60,
    unit: '1 Dozen',
    image: 'https://images.unsplash.com/photo-1571771894821-ad99026107b8?w=500&q=80',
    description: 'Rich in potassium, perfect for a quick snack.'
  },
  {
    id: 'f4',
    name: 'Organic Spinach',
    category: 'fruits',
    price: 30,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80',
    description: 'Farm fresh iron-rich green leaves.'
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
    id: 'd2',
    name: 'Amul Paneer',
    category: 'dairy',
    price: 90,
    originalPrice: 105,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',
    description: 'Fresh and soft cottage cheese.'
  },
  {
    id: 'd3',
    name: 'Farm Fresh Brown Eggs',
    category: 'dairy',
    price: 95,
    unit: '6 Pieces',
    image: 'https://images.unsplash.com/photo-1582722872445-44ad5c73362d?w=500&q=80',
    description: 'High protein eggs from free-range hens.'
  },

  // Staples
  {
    id: 'st1',
    name: 'Aashirvaad Shudh Chakki Atta',
    category: 'staples',
    price: 245,
    originalPrice: 280,
    unit: '5kg',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    description: 'Whole wheat flour for soft rotis.'
  },
  {
    id: 'st2',
    name: 'Daawat Rozana Basmati Rice',
    category: 'staples',
    price: 450,
    unit: '5kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    description: 'Fragrant long-grain rice for daily cooking.'
  },
  {
    id: 'st3',
    name: 'Tata Salt',
    category: 'staples',
    price: 28,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?w=500&q=80',
    description: 'Desh ka Namak, vacuum evaporated.'
  },

  // Snacks & Sweets
  {
    id: 's1',
    name: 'Haldiram Soan Papdi',
    category: 'snacks',
    price: 120,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1589113103553-49684c310452?w=500&q=80',
    description: 'Traditional flaky Indian sweet.',
    isFestive: true
  },
  {
    id: 's2',
    name: 'Lay\'s Classic Salted',
    category: 'snacks',
    price: 20,
    unit: '50g',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&q=80',
    description: 'World\'s favorite potato chips.'
  },
  {
    id: 's3',
    name: 'Cadbury Dairy Milk Silk',
    category: 'snacks',
    price: 175,
    originalPrice: 190,
    unit: '150g',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80',
    description: 'Smooth and creamy chocolate bar.'
  },

  // Beverages
  {
    id: 'bv1',
    name: 'Coca Cola',
    category: 'beverages',
    price: 40,
    unit: '750ml',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80',
    description: 'Refreshing carbonated soft drink.'
  },
  {
    id: 'bv2',
    name: 'Nescafe Classic Coffee',
    category: 'beverages',
    price: 165,
    unit: '50g',
    image: 'https://images.unsplash.com/photo-1559056191-7417f245831e?w=500&q=80',
    description: 'Instant coffee powder for a perfect start.'
  },
  {
    id: 'bv3',
    name: 'Real Fruit Power Orange',
    category: 'beverages',
    price: 110,
    originalPrice: 125,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&q=80',
    description: '100% orange juice with no added preservatives.'
  },

  // Household
  {
    id: 'h1',
    name: 'Surf Excel Matic Liquid',
    category: 'household',
    price: 230,
    originalPrice: 260,
    unit: '1 Litre',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&q=80',
    description: 'Top-load laundry detergent for tough stains.'
  },
  {
    id: 'h2',
    name: 'Dettol Liquid Handwash',
    category: 'household',
    price: 99,
    unit: '200ml',
    image: 'https://images.unsplash.com/photo-1603533866384-29762a346535?w=500&q=80',
    description: 'Germ protection handwash.'
  },
  {
    id: 'h3',
    name: 'Vim Dishwash Liquid',
    category: 'household',
    price: 55,
    unit: '250ml',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=500&q=80',
    description: 'Power of 100 lemons for clean dishes.'
  }
];
