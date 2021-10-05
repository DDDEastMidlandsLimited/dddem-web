import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Given the Navigation is rendered', () => {
  test('it should display a Home link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Home')).toHaveAttribute('href', '/');
  });

  test('it should display a Speakers link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Speakers')).toBeInTheDocument();
    expect(getByText('Speakers')).toHaveAttribute(
      'href',
      '/2021/speakers/speakergrid',
    );
  });

  test('it should display a Notable Companies link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Notable Companies')).toBeInTheDocument();
    expect(getByText('Notable Companies')).toHaveAttribute(
      'href',
      '/2021/notable-companies',
    );
  });

  test('it should display a Hacktober link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Hacktober')).toBeInTheDocument();
    expect(getByText('Hacktober')).toHaveAttribute(
      'href',
      '/2021/hacktober',
    );
  });

  test('it should display a Blog link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Blog')).toBeInTheDocument();
    expect(getByText('Blog')).toHaveAttribute(
      'href',
      'https://blog.dddeastmidlands.com/',
    );
  });

  test('it should display a Code of Conduct link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Code of Conduct')).toBeInTheDocument();
    expect(getByText('Code of Conduct')).toHaveAttribute(
      'href',
      '/code-of-conduct',
    );
  });
});
