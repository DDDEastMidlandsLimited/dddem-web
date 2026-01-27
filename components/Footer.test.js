import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

jest.mock('@fortawesome/react-fontawesome');

describe('Given the Footer is rendered', () => {
  test('it should display the Code of Conduct Link', () => {
    const { getByText } = render(<Footer />);
    const codeOfConductLink = getByText('Code of Conduct');
    expect(codeOfConductLink).toBeInTheDocument();
    expect(codeOfConductLink.closest('a')).toHaveAttribute(
      'href',
      '/code-of-conduct',
    );
  });
});
