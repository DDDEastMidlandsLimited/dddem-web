import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Given the Navigation is rendered', () => {
  test('it should display a Home link', () => {
    const { getByRole } = render(<Navigation />);
    const homeLink = getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('it should display a Past Events link', async () => {
    const { getByRole, findByRole } = render(<Navigation />);
    const pastEventsLink = getByRole('button', { name: 'Past Events' });
    expect(pastEventsLink).toBeInTheDocument();
    fireEvent.click(pastEventsLink);
    const pastSpeakersLink = await findByRole('link', { name: 'Past Speakers' });
    expect(pastSpeakersLink).toHaveAttribute(
      'href',
      '/pastconferences/pastspeakers/pastspeakergrid',
    );
    const pastPhotosLink = await findByRole('link', { name: 'Past Photos' });
    expect(pastPhotosLink).toHaveAttribute(
      'href',
      '/pastconferences/album',
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
    const { getByRole } = render(<Navigation />);
    const codeOfConductLink = getByRole('link', { name: 'Code of Conduct' });
    expect(codeOfConductLink).toBeInTheDocument();
    expect(codeOfConductLink).toHaveAttribute(
      'href',
      '/code-of-conduct',
    );
  });
});
