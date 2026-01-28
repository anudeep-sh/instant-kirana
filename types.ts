
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  description: string;
  isFestive?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type Location = {
  name: string;
  lat?: number;
  lng?: number;
};

export interface User {
  name: string;
  email: string;
}

export type View = 'shop' | 'checkout' | 'login' | 'signup';
