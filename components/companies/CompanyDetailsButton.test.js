import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompanyDetailsButton from './CompanyDetailsButton';
import CompaniesContext from './CompaniesContext';
import gold from '../../data/sponsors/gold';

describe('Given the CompanyDetailsButton component is rendered', () => {
  const companies = {
    companiesList: gold,
    selectedCompanyDescription: '',
    setSelectedCompanyDescription: jest.fn(),
  };

  test('it should have the correct text on the button', () => {
    const { getByText } = render(
      <CompaniesContext.Provider value={companies}>
        <CompanyDetailsButton />
      </CompaniesContext.Provider>,
    );
    expect(getByText('see details')).toBeInTheDocument();
  });

  test('it should fire an event on click', () => {
    const { getByText } = render(
      <CompaniesContext.Provider value={companies}>
        <CompanyDetailsButton companyDescription="<h2>lol</h2>" />
      </CompaniesContext.Provider>,
    );

    const button = getByText(/see details/i);
    userEvent.click(button);
    expect(
      companies.setSelectedCompanyDescription,
    ).toHaveBeenCalled();
    expect(
      companies.setSelectedCompanyDescription,
    ).toHaveBeenCalledTimes(1);
    expect(
      companies.setSelectedCompanyDescription,
    ).toHaveBeenCalledWith('<h2>lol</h2>');
  });
});
