export interface Producto {
  title: string;
  description:string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface ProductoConID extends Producto {
  id: number;
}

