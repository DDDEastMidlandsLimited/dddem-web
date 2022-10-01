import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Given the Header is rendered', () => {
  test('it should display the logo and the Title passed through', () => {
    const { getByText, getByAltText } = render(
      <Header
        title={'DDD East Midlands'}
        banner="
      /static/banners/home.jpg"
      />,
    );
    expect(getByText('DDD East Midlands')).toBeInTheDocument();
    expect(getByAltText('DDD East Midlands Logo')).toHaveAttribute(
      'src',
    );
  });
});
