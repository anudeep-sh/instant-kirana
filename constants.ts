
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
    id: 'f11',
    name: 'Exotic Blueberries',
    category: 'fruits',
    price: 250,
    unit: '125g',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&q=80',
    description: 'Fresh, antioxidant-rich blueberries imported from Peru.'
  },
  {
    id: 'f12',
    name: 'Organic Kale Leaves',
    category: 'fruits',
    price: 120,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=500&q=80',
    description: 'Superfood green kale, perfect for smoothies and salads.'
  },
  {
    id: 'f13',
    name: 'Button Mushrooms',
    category: 'fruits',
    price: 65,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?w=500&q=80',
    description: 'Fresh white button mushrooms, farm picked.'
  },
  {
    id: 'f14',
    name: 'Sun-ripened Cherry Tomatoes',
    category: 'fruits',
    price: 85,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1592841608619-bc0159284160?w=500&q=80',
    description: 'Sweet and juicy cherry tomatoes for gourmet salads.'
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
    id: 'd10',
    name: 'Greek Yogurt - Blueberry',
    category: 'dairy',
    price: 55,
    unit: '90g',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
    description: 'Probiotic-rich thick greek yogurt with real fruit.'
  },
  {
    id: 'd11',
    name: 'Salted Amul Butter',
    category: 'dairy',
    price: 255,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=500&q=80',
    description: 'The classic taste of India, perfect for pav and parathas.'
  },
  {
    id: 'd12',
    name: 'Grated Mozzarella Cheese',
    category: 'dairy',
    price: 195,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&q=80',
    description: 'Perfect melting mozzarella for your home-baked pizzas.'
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
    id: 'b8',
    name: 'Multigrain Brown Bread',
    category: 'bakery',
    price: 55,
    unit: '400g',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    description: 'Fiber-rich healthy brown bread for daily breakfast.'
  },
  {
    id: 'b9',
    name: 'French Baguette',
    category: 'bakery',
    price: 90,
    unit: '1 Unit',
    image: 'https://images.unsplash.com/photo-1597690544664-7c74301221f1?w=500&q=80',
    description: 'Traditional long, thin loaf of French bread.'
  },
  {
    id: 'b10',
    name: 'Cinnamon Rolls',
    category: 'bakery',
    price: 160,
    unit: '2 Pieces',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500&q=80',
    description: 'Sweet rolls seasoned with a cinnamon-sugar filling.'
  },

  // Sweets & Snacks
  {
    id: 's9',
    name: 'Roasted Salted Almonds',
    category: 'sweets',
    price: 299,
    unit: '200g',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80',
    description: 'Crunchy Californian almonds, lightly salted.'
  },
  {
    id: 's10',
    name: 'Classic Potato Chips',
    category: 'sweets',
    price: 40,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&q=80',
    description: 'Thin and crispy salted potato wafers.'
  },
  {
    id: 's11',
    name: 'Belgian Chocolate Cookies',
    category: 'sweets',
    price: 180,
    unit: '150g',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80',
    description: 'Decadent cookies with chunks of Belgian dark chocolate.'
  },
  {
    id: 's12',
    name: 'Nachos Cheese Flavor',
    category: 'sweets',
    price: 95,
    unit: '150g',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80',
    description: 'Zesty cheese flavored corn tortilla chips.'
  },

  // Staples
  {
    id: 'st10',
    name: 'Pure Himalayan Honey',
    category: 'staples',
    price: 340,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80',
    description: '100% natural and unprocessed mountain honey.'
  },
  {
    id: 'st11',
    name: 'Assam Tea Leaves',
    category: 'staples',
    price: 220,
    unit: '500g',
    image: 'https://images.unsplash.com/photo-1544787210-2211d6e3164a?w=500&q=80',
    description: 'Strong and aromatic CTC tea from Assam gardens.'
  },
  {
    id: 'st12',
    name: 'Arabica Coffee Beans',
    category: 'staples',
    price: 550,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1559056191-7417f245831e?w=500&q=80',
    description: 'Medium-dark roast whole beans for a perfect brew.'
  },
  {
    id: 'st13',
    name: 'Brown Basmati Rice',
    category: 'staples',
    price: 210,
    unit: '1kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    description: 'Healthy whole grain basmati rice with low GI.'
  },
  {
    id: 'st14',
    name: 'Organic Cold Pressed Coconut Oil',
    category: 'staples',
    price: 450,
    unit: '500ml',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c35dd6?w=500&q=80',
    description: 'Pure coconut oil extracted through cold pressing.'
  }
];
