export interface ProductProps {
  id: string;
  name: string;
  price: string;
  description: string;
  banner: string;
  created_at: string;
  updated_at: string;
  category_id: string;
}

export interface OrderDetailsProps {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  name: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItemProps {
  id: string;
  amount: number;
  product_id: string;
  order_id: string;
  created_at: string;
  updated_at: string;
  product: ProductProps;
  order: OrderDetailsProps;
}
