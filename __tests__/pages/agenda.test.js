import React from 'react';
import { render } from '@testing-library/react';
import Agenda from '../../pages/agenda';

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

describe('Agenda Page', () => {
  test('should render without crashing', () => {
    const { container } = render(<Agenda />);
    expect(container).toBeInTheDocument();
  });

  test('should display page title', () => {
    const { getAllByText } = render(<Agenda />);
    expect(getAllByText('Agenda')[0]).toBeInTheDocument();
  });

  test('should display external link to sessionize', () => {
    const { getByText } = render(<Agenda />);
    expect(getByText('this site')).toBeInTheDocument();
    expect(getByText('this site')).toHaveAttribute(
      'href',
      'https://ddd-east-midlands-conference-2023.sessionize.com',
    );
  });

  test('should display instructions for mobile app', () => {
    const { getByText } = render(<Agenda />);
    expect(getByText(/Head to/)).toBeInTheDocument();
    expect(
      getByText(/to get the event app on your phone and create a/),
    ).toBeInTheDocument();
  });

  test('should display sessionize loader element', () => {
    const { container } = render(<Agenda />);
    const sessionizeLoader = container.querySelector(
      '.sessionize-loader',
    );
    expect(sessionizeLoader).toBeInTheDocument();
    expect(sessionizeLoader).toHaveAttribute(
      'data-sessionize-load-url',
      'https://sessionize.com/api/v2/37og4tf6/view/GridSmart?under=True',
    );
  });
});
