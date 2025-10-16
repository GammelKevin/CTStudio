export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  features: string[];
  popular: boolean;
  imageUrl?: string;
}

export interface Order {
  id: string;
  email: string;
  name?: string;
  total: number;
  status: OrderStatus;
  createdAt: Date;
}

export type OrderStatus = "PENDING" | "PAID" | "PROCESSING" | "COMPLETED" | "CANCELLED";
