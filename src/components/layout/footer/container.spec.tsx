import { render } from '@testing-library/react';
import { Footer } from '.';

describe('Footer', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer />);
    
    const footerText = getByText('MKS sistemas © Todos os direitos reservados');
    expect(footerText.textContent).toBe('MKS sistemas © Todos os direitos reservados');
  });
});
