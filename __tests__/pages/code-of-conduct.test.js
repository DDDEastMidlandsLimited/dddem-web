import React from 'react';
import { render } from '@testing-library/react';
import CodeOfConduct from '../../pages/code-of-conduct';

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

describe('Code of Conduct Page', () => {
  test('should render without crashing', () => {
    const { container } = render(<CodeOfConduct />);
    expect(container).toBeInTheDocument();
  });

  test('should display page title', () => {
    const { getAllByText } = render(<CodeOfConduct />);
    expect(getAllByText('Code of Conduct')[0]).toBeInTheDocument();
  });

  test('should display main heading', () => {
    const { getByText } = render(<CodeOfConduct />);
    expect(getByText('TL;DR')).toBeInTheDocument();
    expect(getByText('The Full Version')).toBeInTheDocument();
  });

  test('should display purpose statement', () => {
    const { getByText } = render(<CodeOfConduct />);
    expect(
      getByText(/Treat everyone in a respectful and kind manner/),
    ).toBeInTheDocument();
    expect(
      getByText(/Inclusivity is a core value of DDD East Midlands/),
    ).toBeInTheDocument();
  });

  test('should display harassment information', () => {
    const { getByText } = render(<CodeOfConduct />);
    expect(
      getByText(/Harassment includes but is not limited to/),
    ).toBeInTheDocument();
  });

  test('should display reporting section', () => {
    const { getByText } = render(<CodeOfConduct />);
    expect(
      getByText('Reporting Code Of Conduct Violations'),
    ).toBeInTheDocument();
    expect(
      getByText(/The volunteers of the conference/),
    ).toBeInTheDocument();
    expect(
      getByText(/The conference organisers \(Jessica \/ Moreton\)/),
    ).toBeInTheDocument();
  });

  test('should display job approaching guidelines', () => {
    const { getByText } = render(<CodeOfConduct />);
    expect(
      getByText('Approaching People About Jobs'),
    ).toBeInTheDocument();
  });
});
