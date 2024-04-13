import { CartProvider } from '@/context/cartContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Container } from '.';

const queryClient = new QueryClient();

describe('Container', () => {
  it('renders correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
         <Container />
        </CartProvider>
      </QueryClientProvider>
    );
  });
});
