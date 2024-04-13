import Counter from "../counter";
import * as S from "./styles";

export interface AddToCardProps {
  photo: string
  name: string
  price: string
  quantity: number
}

interface CartProductsProps {
  photo: string
  name: string
  price: string
  quantity: number
  onAddToCart: (product: AddToCardProps, quantity: number) => void;
  onRemoveFromCart: () => void
}

export function CartProducts({  photo, name, price, quantity, onAddToCart, onRemoveFromCart }: CartProductsProps) {
  const incrementQuantity = () => {
    onAddToCart({
      photo,
      name,
      price,
      quantity,
    }, quantity + 1);
  };

  const decrementQuantity = () => {
    onRemoveFromCart();
  };

  return (
    <S.Wrapper>
      <S.WrapperImageNext>
        <S.ImageNext src={photo} alt='ilustração do produto' width={1000} height={1000} />
      </S.WrapperImageNext>
      <S.WrapperDetails>
        <S.Name>{name}</S.Name>
        <Counter
          quantity={quantity}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}  
        />
        <S.Price>R${price}</S.Price>
      </S.WrapperDetails>
    </S.Wrapper>
  );
}