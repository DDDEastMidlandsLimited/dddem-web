import React from 'react';
import { render } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';
import gold from '../../data/sponsors/gold';

describe('Given the Company Info is rendered', () => {
  const company = gold[0];

  test('it should have the correct company link in the document', () => {
    const { getByAltText } = render(
      <CompanyInfo
        key={company.id}
        partner={company}
        image={company.image}
      />,
    );
    expect(
      getByAltText(`Click to go to the ${company.name} site`),
    ).toBeInTheDocument();
  });
});
