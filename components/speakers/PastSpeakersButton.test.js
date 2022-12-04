import React from 'react';
import { render } from '@testing-library/react';
import PastSpeakersButton from './PastSpeakersButton';

describe('Given the Past Speakers button is rendered', () => {
  test('it should display a link', () => {
    const { getByText } = render(<PastSpeakersButton />);
    expect(getByText('Back To Past Speakers')).toBeInTheDocument();
    expect(getByText('Back To Past Speakers')).toHaveAttribute(
      'href',
      '../pastspeakergrid',
    );
  });
});
