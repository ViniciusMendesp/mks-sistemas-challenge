import * as S from "./styles";

interface CounterProps {
  onIncrement?: () => void;
  onDecrement?: () => void;
  quantity: number;
}

export function Counter({ onDecrement, onIncrement, quantity }: CounterProps){
  const handleIncrement = () => {
    if (onIncrement) {
      onIncrement();
    }
  };

  const handleDecrement = () => {
    if (quantity > 0 && onDecrement) {
      onDecrement();
    }
  };

  return (
    <S.Wrapper>
      <S.Label>Qtd:</S.Label>
      <S.WrapperButtons>
        <S.Button aria-label="Decrement" onClick={handleDecrement}>-</S.Button>
        <S.Value>{quantity}</S.Value>
        <S.Button aria-label="Increment" onClick={handleIncrement}>+</S.Button>
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default Counter;
