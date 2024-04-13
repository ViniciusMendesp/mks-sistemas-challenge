import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SkeletonCardProducts } from '.';

describe('SkeletonCardProducts', () => {
  it('renders skeleton items correctly', () => {
    const { container } = render(<SkeletonCardProducts />);

    // Atualize o seletor para corresponder à classe gerada por styled-components
    const skeletonItems = container.querySelectorAll('.sc-AxjAm');
    expect(skeletonItems.length).toBe(8);

    // Verifica se cada elemento de esqueleto possui as propriedades de estilo corretas
    skeletonItems.forEach((item) => {
      expect(item).toHaveStyle('width: 280px');
      expect(item).toHaveStyle('height: 355.83px');
      expect(item).toHaveStyle('background-color: gray');
      expect(item).toHaveStyle('border-radius: 8px');
    });
  });
});