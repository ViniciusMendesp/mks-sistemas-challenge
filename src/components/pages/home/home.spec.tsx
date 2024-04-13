import { CartProvider } from '@/context/cartContext';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { HomePage } from '.';

describe('HomePage', () => {
  it('renders correctly', () => {
    render(
      <>
       <QueryClientProvider client={queryClient}>
        <CartProvider>
         <HomePage />
        </CartProvider>
      </QueryClientProvider>
      </>
    );
  });
});
