import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { CartProducts } from '.';

describe('CartProducts', () => {
  const mockProduct = {
    photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
    name: 'Product Name',
    price: '10.00',
    quantity: 2, // Definindo uma quantidade inicial de 2 para os testes
  };

  // Mock das funções onAddToCart e onRemoveFromCart
  const onAddToCartMock = jest.fn();
  const onRemoveFromCartMock = jest.fn();

  test('renders product details correctly', () => {
    const { getByText, getByAltText } = render(
      <CartProducts
        {...mockProduct}
        onAddToCart={onAddToCartMock}
        onRemoveFromCart={onRemoveFromCartMock}

      />
    );

    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(`R$${mockProduct.price}`)).toBeInTheDocument();
    expect(getByAltText('ilustração do produto')).toBeInTheDocument();
  });

  test('calls onAddToCart with incremented quantity when increment button is clicked', () => {
    const { getByLabelText } = render(
      <CartProducts
        {...mockProduct}
        onAddToCart={onAddToCartMock}
        onRemoveFromCart={onRemoveFromCartMock}

      />
    );

    const incrementButton = getByLabelText('Increment');
    fireEvent.click(incrementButton);

    expect(onAddToCartMock).toHaveBeenCalledWith(mockProduct, mockProduct.quantity + 1);
  });

  test('calls onRemoveFromCart when decrement button is clicked and quantity is greater than 1', () => {
    const { getByLabelText } = render(
      <CartProducts
        {...mockProduct}
        onAddToCart={onAddToCartMock}
        onRemoveFromCart={onRemoveFromCartMock}

      />
    );

    const decrementButton = getByLabelText('Decrement');
    fireEvent.click(decrementButton);

    expect(onRemoveFromCartMock).toHaveBeenCalled();
  });
});