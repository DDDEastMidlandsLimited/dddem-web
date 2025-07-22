import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';

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

describe('Homepage (Index)', () => {
  test('should render without crashing', () => {
    const { container } = render(<Index />);
    expect(container).toBeInTheDocument();
  });

  test('should display the main heading', () => {
    const { getByText } = render(<Index />);
    expect(getByText('Developer! Developer! Developer! East Midlands')).toBeInTheDocument();
  });

  test('should display event description', () => {
    const { getByText } = render(<Index />);
    expect(getByText(/DDD East Midlands is an inclusive, not-for-profit technology conference/)).toBeInTheDocument();
  });

  test('should display event status information', () => {
    const { getByText } = render(<Index />);
    expect(getByText('Event on hold')).toBeInTheDocument();
    expect(getByText(/The event is being transferred to new ownership/)).toBeInTheDocument();
  });

  test('should display principles section', () => {
    const { getByText } = render(<Index />);
    expect(getByText('Principles')).toBeInTheDocument();
    expect(getByText('This conference follows these DDD principles:')).toBeInTheDocument();
  });

  test('should display DDD principles', () => {
    const { getByText } = render(<Index />);
    expect(getByText(/The event is hosted on a Saturdayk/)).toBeInTheDocument();
    expect(getByText(/Tickets to attend the event are free/)).toBeInTheDocument();
  });

  test('should display additional principles', () => {
    const { getByText } = render(<Index />);
    expect(getByText(/All talk submissions are anonymous/)).toBeInTheDocument();
    expect(getByText(/There is a anonymised democratic selection process/)).toBeInTheDocument();
    expect(getByText(/The event is arranged with the community in mind/)).toBeInTheDocument();
  });
});