import { CartProvider } from '@/context/cartContext';
import { render } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
  it('renders correctly', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    );
  });
});
