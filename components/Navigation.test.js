import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Given the Navigation is rendered', () => {
  test('it should display a Home link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Home')).toHaveAttribute('href', '/');
  });

  test('it should display a Information link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Information')).toBeInTheDocument();
    expect(getByText('Information')).toHaveAttribute(
      'href',
      '/information/main-page',
    );
  });

  test('it should display a Notable Companies link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Notable Companies')).toBeInTheDocument();
    expect(getByText('Notable Companies')).toHaveAttribute(
      'href',
      '/2020/notable-companies',
    );
  });

  test('it should display a Sponsor link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Sponsor')).toBeInTheDocument();
    expect(getByText('Sponsor')).toHaveAttribute(
      'href',
      '/2020/sponsor',
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
