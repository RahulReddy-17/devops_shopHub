export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality noise-canceling headphones with 30-hour battery life",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Advanced fitness tracking and health monitoring smartwatch",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Electronics",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "3",
    name: "Minimalist Backpack",
    description: "Durable and stylish backpack perfect for daily commute",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Accessories",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with premium switches",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    category: "Electronics",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    description: "UV-protected polarized sunglasses with premium frames",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    category: "Accessories",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "6",
    name: "Portable Speaker",
    description: "Waterproof Bluetooth speaker with 360° sound",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    category: "Electronics",
    rating: 4.7,
    inStock: false,
  },
];
