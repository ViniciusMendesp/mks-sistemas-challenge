import Image from 'next/image';
import * as S from './styles';

import ShoppingBag from "/public/icons/shopping-bag.svg";

interface CardProductsProps {
  photo: string
  name: string
  price: string
  description: string
  onBuy: () => void;
  isAddedToCart: boolean;
}

export function CardProducts({ photo, name, price, description, onBuy, isAddedToCart }: CardProductsProps) {
  return (
    <S.Wrapper>
       <S.ImageWrapper>
        <S.ImageNext src={photo} alt='ilustração do produto' width={1000} height={1000} />
      </S.ImageWrapper>
      <S.DetailsProducts>
        <S.DetailsNameAndValue>
          <S.Name>{name}</S.Name>
          <S.Price>R${price}</S.Price>
        </S.DetailsNameAndValue>
        <S.Description>{description}</S.Description>
      </S.DetailsProducts>
        <S.BuyButton onClick={onBuy} disabled={isAddedToCart}>
          <Image src={ShoppingBag} alt='Sacola de compras' />
          Comprar
        </S.BuyButton> 
    </S.Wrapper>
  );
}