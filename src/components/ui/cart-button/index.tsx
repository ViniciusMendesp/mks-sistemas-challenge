import * as S from './styles';

import Image from 'next/image';
import { useState } from 'react';
import CartIcon from '/public/icons/cart-icon.svg';

interface CartButtonProps {
  quantityOfProducts: number;
  onClick: () => void;
}

export function CartButton({ quantityOfProducts, onClick }: CartButtonProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCartOpen(!isCartOpen);
    onClick(); 
  };

  return (
    <S.Wrapper onClick={handleButtonClick}>
      <S.Content>
          <Image src={CartIcon} alt='Carrinho de compra'/>
        <S.QuantityOfProducts>{quantityOfProducts}</S.QuantityOfProducts>
      </S.Content>
    </S.Wrapper>
  );
}