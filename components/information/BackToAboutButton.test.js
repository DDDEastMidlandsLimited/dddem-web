import React from 'react';
import { render } from '@testing-library/react';
import BackToAboutButton from './BackToAboutButton';

describe('Given the Back To Conference Crew button is rendered', () => {
  test('it should display a link', () => {
    const { getByText } = render(<BackToAboutButton />);
    expect(getByText('Back To About')).toBeInTheDocument();
    expect(getByText('Back To About')).toHaveAttribute(
      'href',
      '../../back-to-about/#organisers',
    );
  });
});
