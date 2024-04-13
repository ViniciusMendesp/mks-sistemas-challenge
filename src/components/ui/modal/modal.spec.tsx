import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Modal } from '.';

describe('Modal', () => {
  it('renders correctly when open', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} title="Test Title" description="Test Description" onClose={onClose} />
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const onClose = jest.fn();
    const { queryByText } = render(
      <Modal isOpen={false} title="Test Title" description="Test Description" onClose={onClose} />
    );

    expect(queryByText('Test Title')).not.toBeInTheDocument();
    expect(queryByText('Test Description')).not.toBeInTheDocument();
  });
});
