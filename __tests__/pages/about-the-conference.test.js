import React from 'react';
import { render } from '@testing-library/react';
import AboutTheConference from '../../pages/about-the-conference';

// Mock the next/head component
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

describe('About The Conference Page', () => {
  test('should render without crashing', () => {
    const { container } = render(<AboutTheConference />);
    expect(container).toBeInTheDocument();
  });

  test('should display page title', () => {
    const { getByText } = render(<AboutTheConference />);
    expect(getByText('Contents')).toBeInTheDocument();
  });

  test('should display main section headings', () => {
    const { getAllByText } = render(<AboutTheConference />);
    expect(
      getAllByText('What Was DDD East Midlands?')[0],
    ).toBeInTheDocument();
    expect(
      getAllByText('What did the DDD stand for?')[0],
    ).toBeInTheDocument();
    expect(
      getAllByText('The Conference Principles')[0],
    ).toBeInTheDocument();
    expect(
      getAllByText('The Organisation Committee')[0],
    ).toBeInTheDocument();
    expect(getAllByText('The Event Crew')[0]).toBeInTheDocument();
    expect(
      getAllByText('Promoting Inclusivity')[0],
    ).toBeInTheDocument();
  });

  test('should display conference description', () => {
    const { getByText } = render(<AboutTheConference />);
    expect(
      getByText(
        /The East Midlands tech scene was incredibly diverse/,
      ),
    ).toBeInTheDocument();
    expect(
      getByText(
        /We wanted to promote inclusivity, support and camaraderie/,
      ),
    ).toBeInTheDocument();
  });

  test('should display DDD principles', () => {
    const { getByText } = render(<AboutTheConference />);
    expect(
      getByText(
        /The event was hosted on a Saturday so that attendees did not have to take time from work/,
      ),
    ).toBeInTheDocument();
    expect(
      getByText(/Tickets to attend the event were free/),
    ).toBeInTheDocument();
  });

  test('should display additional principles', () => {
    const { getByText } = render(<AboutTheConference />);
    expect(
      getByText(/All talk submissions were anonymous/),
    ).toBeInTheDocument();
    expect(
      getByText(/There was a democratic selection process for talks/),
    ).toBeInTheDocument();
    expect(
      getByText(/The event was arranged with the community in mind/),
    ).toBeInTheDocument();
  });

  test('should display organiser information', () => {
    const { getByText } = render(<AboutTheConference />);
    expect(
      getByText(
        /The very first DDD East Midlands was organised by Moreton and Jessica/,
      ),
    ).toBeInTheDocument();
  });

  test('should display inclusivity information', () => {
    const { getAllByText } = render(<AboutTheConference />);
    expect(getAllByText('Accessibility Page')[0]).toBeInTheDocument();
    expect(
      getAllByText('Submission And Selection Process')[0],
    ).toBeInTheDocument();
    expect(
      getAllByText('Making speaking accessible')[0],
    ).toBeInTheDocument();
  });

  test('should contain navigation links in contents section', () => {
    const { container } = render(<AboutTheConference />);
    const aboutLink = container.querySelector('a[href="#about"]');
    const dddLink = container.querySelector('a[href="#ddd"]');
    const principlesLink = container.querySelector(
      'a[href="#principles"]',
    );

    expect(aboutLink).toBeInTheDocument();
    expect(dddLink).toBeInTheDocument();
    expect(principlesLink).toBeInTheDocument();
  });
});
