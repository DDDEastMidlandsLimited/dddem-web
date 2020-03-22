import React from 'react';
import { render } from '@testing-library/react';
import VenueButton from './VenueButton';

describe('Given the Venue button is rendered', () => {
  test('it should display a link', () => {
    const { getByText } = render(<VenueButton />);
    expect(
      getByText('View Printable Travel Guide'),
    ).toBeInTheDocument();
    expect(getByText('View Printable Travel Guide')).toHaveAttribute(
      'href',
      'https://s3.eu-west-2.amazonaws.com/ddd-pdf-downloads/NCCDirections.pdf',
    );
  });
});
