import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Counter from '.';

describe('Counter', () => {
  test('renders with initial quantity', () => {
    const quantity = 5;
    const { getByText } = render(<Counter quantity={quantity} />);
    expect(getByText(quantity.toString())).toBeInTheDocument();
  });

  test('calls onIncrement when increment button is clicked', () => {
    const onIncrementMock = jest.fn();
    const { getByLabelText } = render(<Counter quantity={0} onIncrement={onIncrementMock} />);
    const incrementButton = getByLabelText('Increment');
    fireEvent.click(incrementButton);
    expect(onIncrementMock).toHaveBeenCalled();
  });

  test('calls onDecrement when decrement button is clicked', () => {
    const onDecrementMock = jest.fn();
    const { getByLabelText } = render(<Counter quantity={1} onDecrement={onDecrementMock} />);
    const decrementButton = getByLabelText('Decrement');
    fireEvent.click(decrementButton);
    expect(onDecrementMock).toHaveBeenCalled();
  });

  test('does not call onDecrement when decrement button is clicked and quantity is 0', () => {
    const onDecrementMock = jest.fn();
    const { getByLabelText } = render(<Counter quantity={0} onDecrement={onDecrementMock} />);
    const decrementButton = getByLabelText('Decrement');
    fireEvent.click(decrementButton);
    expect(onDecrementMock).not.toHaveBeenCalled();
  });
});
