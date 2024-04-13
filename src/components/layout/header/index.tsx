import { CartButton } from "@/components/ui/cart-button";
import { useCart } from "@/context/cartContext";
import { useState } from "react";
import { Cart } from "../cart";
import * as S from "./styles";

export function Header() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalQuantityInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>MKT
          <S.Span>Sistemas</S.Span>
        </S.Title>
        <CartButton quantityOfProducts={totalQuantityInCart} onClick={handleToggleCart} />
      </S.Header>
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          onClose={handleCloseCart}
        />
      )}
    </S.Wrapper>
  )
}