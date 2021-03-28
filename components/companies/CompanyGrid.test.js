import React from 'react';
import { render } from '@testing-library/react';
import CompanyGrid from './CompanyGrid';
import CompaniesContext from './CompaniesContext';
import gold from '../../data/sponsors/gold';

describe('Given the Company Grid is rendered', () => {
  test('it should have the correct company details', () => {
    const companies = {
      companiesList: gold,
      selectedCompanyDescription: '',
      setSelectedCompanyDescription: jest.fn(),
    };
    const { getByAltText } = render(
      <CompaniesContext.Provider value={companies}>
        <CompanyGrid />
      </CompaniesContext.Provider>,
    );
    expect(
      getByAltText(`Click to go to the ${gold[0].name} site`),
    ).toBeInTheDocument();
    expect(
      getByAltText(`Click to go to the ${gold[1].name} site`),
    ).toBeInTheDocument();
    expect(
      getByAltText(`Click to go to the ${gold[2].name} site`),
    ).toBeInTheDocument();
  });

  test('it should render the company details component', () => {
    const companies = {
      companiesList: gold,
      selectedCompanyDescription: '<h1>Test Text</h1>',
      setSelectedCompanyDescription: jest.fn(),
    };
    const { getByText } = render(
      <CompaniesContext.Provider value={companies}>
        <CompanyGrid />
      </CompaniesContext.Provider>,
    );
    expect(getByText('Test Text')).toBeInTheDocument();
  });
});
