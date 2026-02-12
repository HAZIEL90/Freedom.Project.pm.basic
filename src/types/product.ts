export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: 'sneakers' | 'men' | 'women';
  sizes: string[];
  stock: number;
  created_at: string;
}

export type Category = 'sneakers' | 'men' | 'women';
