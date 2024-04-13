import { useCart } from '@/context/cartContext';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Cart } from '.';

jest.mock('@/context/cartContext', () => ({
  useCart: jest.fn(),
}));

describe('Cart component', () => {
  const mockCartItems = [
    {
      id: '1',
      photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
      name: 'Product 1',
      price: '10.00',
      quantity: 2,
    },
    {
      id: '2',
      photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
      name: 'Product 2',
      price: '15.00',
      quantity: 1,
    },
  ];

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: mockCartItems,
      removeFromCart: jest.fn(),
      addToCart: jest.fn(),
    });
  });

  test('renders cart items correctly', () => {
    const { getByText } = render(<Cart cartItems={mockCartItems} addToCart={jest.fn()} removeFromCart={jest.fn()} onClose={jest.fn()} />);
    mockCartItems.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(`R$${item.price}`)).toBeInTheDocument();
    });
  });

  test('disables "Finalizar compra" button when cart is empty', () => {
    (useCart as jest.Mock).mockReturnValue({ cartItems: [], removeFromCart: jest.fn(), addToCart: jest.fn() });
    const { getByText } = render(<Cart cartItems={[]} addToCart={jest.fn()} removeFromCart={jest.fn()} onClose={jest.fn()} />);
    const finalizeButton = getByText('Finalizar compra');
    expect(finalizeButton).toBeDisabled();
  });

  test('enables "Finalizar compra" button when cart is not empty', () => {
    const { getByText } = render(<Cart cartItems={mockCartItems} addToCart={jest.fn()} removeFromCart={jest.fn()} onClose={jest.fn()} />);
    const finalizeButton = getByText('Finalizar compra');
    expect(finalizeButton).toBeEnabled();
  });

  test('opens modal when "Finalizar compra" button is clicked', () => {
    const { getByText } = render(<Cart cartItems={mockCartItems} addToCart={jest.fn()} removeFromCart={jest.fn()} onClose={jest.fn()} />);
    const finalizeButton = getByText('Finalizar compra');
    fireEvent.click(finalizeButton);
    expect(getByText('Pedido Confirmado')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    const { getByText, queryByText } = render(<Cart cartItems={mockCartItems} addToCart={jest.fn()} removeFromCart={jest.fn()} onClose={jest.fn()} />);
    const finalizeButton = getByText('Finalizar compra');
    fireEvent.click(finalizeButton);
    const closeButton = getByText('Fechar');
    fireEvent.click(closeButton);
    expect(queryByText('Pedido Confirmado')).not.toBeInTheDocument();
  });
});
