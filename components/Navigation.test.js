import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  test('it should display a Covid Precautions link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Covid Precautions')).toBeInTheDocument();
    expect(getByText('Covid Precautions')).toHaveAttribute(
      'href',
      '/2021/covid-precautions',
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

  test('it should display a Tickets link', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Tickets')).toBeInTheDocument();
    expect(getByText('Tickets')).toHaveAttribute(
      'href',
      'https://www.eventbrite.co.uk/e/ddd-east-midlands-2021-tickets-146129646707',
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
