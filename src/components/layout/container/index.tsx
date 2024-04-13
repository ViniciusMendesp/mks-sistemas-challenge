import { useQuery } from '@tanstack/react-query';
import * as S from './styles';

import { CardProducts } from '@/components/ui/card-products';
import { SkeletonCardProducts } from '@/components/ui/skeleton';
import { useCart } from '@/context/cartContext';
import { Product, useGetProducts } from '@/pages/api/get-products';

export function Container() {
  const { data: responseData } = useQuery({
    queryKey: ['products'],
    queryFn: useGetProducts,
  });
  const products = responseData || [];
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <S.Wrapper>
       {responseData ? (
        products?.map((product: Product) => {
          const isAddedToCart = cartItems.some(item => item.id === product.id);
          return (
            <CardProducts
              key={product.id}
              photo={product.photo}
              description={product.description}
              price={product.price}
              name={product.name}
              onBuy={() => addToCart(product)}
              isAddedToCart={isAddedToCart}
            />
          );
        })
      ) : (
        <SkeletonCardProducts />
      )}
    </S.Wrapper>
  );
}
