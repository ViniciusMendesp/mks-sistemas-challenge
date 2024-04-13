import { api } from '@/pages/lib/axios';

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  quantity: number; 
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export type GetProductsResponse = Product[];

export async function useGetProducts() {
  try {
    const response = await api.get<{ products: Product[] }>('/products', {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'name',
        orderBy: 'ASC',
      },
    });

    return response.data.products;
  } catch (error) {
    throw new Error('Erro ao obter produtos');
  }
}