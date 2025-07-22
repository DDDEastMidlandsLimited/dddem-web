import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../../pages/contact';

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

describe('Contact Page', () => {
  test('should render without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeInTheDocument();
  });

  test('should display page title', () => {
    const { getAllByText } = render(<Contact />);
    expect(getAllByText('Contact')[0]).toBeInTheDocument();
  });

  test('should display main contact information', () => {
    const { getAllByText, getByText } = render(<Contact />);
    expect(getAllByText('On The Day')[0]).toBeInTheDocument();
    expect(
      getByText(/The two best ways to get in contact with the organisers/),
    ).toBeInTheDocument();
  });

  test('should display contact methods', () => {
    const { getByText } = render(<Contact />);
    expect(getByText(/At the information desk/)).toBeInTheDocument();
    expect(getByText(/Through the volunteers/)).toBeInTheDocument();
  });

  test('should display social media information', () => {
    const { getAllByText, getByText } = render(<Contact />);
    expect(getAllByText('DDD East Midlands Accounts')[0]).toBeInTheDocument();
    expect(getByText('#DDDEM')).toBeInTheDocument();
    expect(getAllByText('@dddeastmidlands')[0]).toBeInTheDocument();
    expect(getByText('DDD East Midlands Limited')).toBeInTheDocument();
  });

  test('should display organiser contact information', () => {
    const { getAllByText } = render(<Contact />);
    expect(getAllByText('Rachel Watson')[0]).toBeInTheDocument();
    expect(getAllByText('Jessica White')[0]).toBeInTheDocument();
    expect(getAllByText('Moreton Brockley')[0]).toBeInTheDocument();
  });
});