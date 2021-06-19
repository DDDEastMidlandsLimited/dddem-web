import React from 'react';
import { render } from '@testing-library/react';
import SpeakersButton from './SpeakersButton';

describe('Given the Speakers button is rendered', () => {
  test('it should display a link', () => {
    const { getByText } = render(<SpeakersButton />);
    expect(
      getByText('Back To Speakers'),
    ).toBeInTheDocument();
    expect(getByText('Back To Speakers')).toHaveAttribute(
      'href',
      '../speakergrid',
    );
  });
});
