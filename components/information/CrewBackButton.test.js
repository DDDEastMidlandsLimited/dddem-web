import React from 'react';
import { render } from '@testing-library/react';
import CrewBackButton from './CrewBackButton';

describe('Given the Back To Conference Crew button is rendered', () => {
  test('it should display a link', () => {
    const { getByText } = render(<CrewBackButton />);
    expect(getByText('Back To Conference Crew')).toBeInTheDocument();
    expect(getByText('Back To Conference Crew')).toHaveAttribute(
      'href',
      '../../organisers-and-crew/conference-crew-information/',
    );
  });
});
