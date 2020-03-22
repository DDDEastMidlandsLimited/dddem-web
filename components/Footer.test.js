import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Given the Footer is rendered', () => {
  test('it should display the Code of Conduct', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Code of Conduct')).toBeInTheDocument();
    expect(getByText('Code of Conduct')).toHaveAttribute(
      'href',
      '/code-of-conduct',
    );
  });

  test('it should display the Code of Conduct', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Contact')).toHaveAttribute('href', '/contact');
  });
});
