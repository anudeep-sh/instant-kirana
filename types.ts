
export interface Product {
  id: string;
  name: string;
  brand: string; // Added brand field
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
  color: string; // Added color for logo-style backgrounds
}

export type Location = {
  name: string;
  lat?: number;
  lng?: number;
};