import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Given the Navigation is rendered', () => {
  test('it should display a Home link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Home')).toHaveAttribute('href', '/');
  });

  test('it should display a Blog link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Blog')).toBeInTheDocument();
    expect(getByText('Blog')).toHaveAttribute(
      'href',
      'https://blog.dddeastmidlands.com/',
    );
  });

  test('it should display a Past Events link', async () => {
    const { getByText, findByText } = render(<Navigation />);
    const pastEventsLink = getByText('Past Events');
    expect(pastEventsLink).toBeInTheDocument();
    fireEvent.click(pastEventsLink);
    const pastSpeakersLink = await findByText('Past Speakers');
    expect(pastSpeakersLink).toHaveAttribute(
      'href',
      '/pastconferences/pastspeakers/pastspeakergrid',
    );
    const pastPhotosLink = await findByText('Past Photos');
    expect(pastPhotosLink).toHaveAttribute(
      'href',
      '/pastconferences/album',
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
