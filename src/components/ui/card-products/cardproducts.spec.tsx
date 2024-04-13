import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { CardProducts } from '.';

describe('CardProducts', () => {
  test('renders product data correctly', () => {
    const productName = 'Product Name';
    const productPrice = '10.00';
    const productDescription = 'Product Description';

    const { getByText } = render(
      <CardProducts
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp"
        name={productName}
        price={productPrice}
        description={productDescription}
        onBuy={() => {}}
        isAddedToCart={false}
      />
    );

    expect(getByText(productName)).toBeInTheDocument();
    expect(getByText(`R$${productPrice}`)).toBeInTheDocument();
    expect(getByText(productDescription)).toBeInTheDocument();
  });

  test('calls onBuy when buy button is clicked', () => {
    const onBuyMock = jest.fn();

    const { getByText } = render(
      <CardProducts
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp"
        name="Product Name"
        price="10.00"
        description="Product Description"
        onBuy={onBuyMock}
        isAddedToCart={false}
      />
    );

    fireEvent.click(getByText('Comprar'));
    expect(onBuyMock).toHaveBeenCalled();
  });

  test('disables buy button when product is added to cart', () => {
    const { getByText } = render(
      <CardProducts
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp"
        name="Product Name"
        price="10.00"
        description="Product Description"
        onBuy={() => {}}
        isAddedToCart={true} // Set isAddedToCart to true to simulate product already added to cart
      />
    );

    const buyButton = getByText('Comprar');
    expect(buyButton).toBeDisabled();
  });
});
