import React from 'react';
import { render } from '@testing-library/react';
import ExternalLink from './ExternalLink';

describe('Given the Footer is rendered', () => {
  test('it should display the logo and the Title passed through', () => {
    const { getByText } = render(
      <ExternalLink
        href="/home"
        target="_blank"
        category="logo"
        eventType="Event Name"
      >
        Test Link
      </ExternalLink>,
    );
    expect(getByText('Test Link')).toBeInTheDocument();
    expect(getByText('Test Link')).toHaveAttribute('href', '/home');
    expect(getByText('Test Link')).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
