import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { CartButton } from '.';

describe('CartButton', () => {
  test('renders button correctly', () => {
    const { getByAltText } = render(<CartButton quantityOfProducts={0} onClick={() => {}} />);
    const cartButton = getByAltText('Carrinho de compra');
    expect(cartButton).toBeInTheDocument();
  });

  test('displays correct quantity of products', () => {
    const { getByText } = render(<CartButton quantityOfProducts={5} onClick={() => {}} />);
    const quantityText = getByText('5');
    expect(quantityText).toBeInTheDocument();
  });

  test('calls onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByAltText } = render(<CartButton quantityOfProducts={0} onClick={onClickMock} />);
    const cartButton = getByAltText('Carrinho de compra');
    fireEvent.click(cartButton);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('toggles cart state when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByAltText } = render(<CartButton quantityOfProducts={0} onClick={onClickMock} />);
    const cartButton = getByAltText('Carrinho de compra');
    fireEvent.click(cartButton);
    fireEvent.click(cartButton); // Click again to toggle back
    expect(onClickMock).toHaveBeenCalledTimes(2); // onClick should be called twice
  });
});
