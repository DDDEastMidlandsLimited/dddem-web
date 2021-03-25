import React from 'react';
import { render } from '@testing-library/react';
import CompanyDetails from './CompanyDetails';
import CompaniesContext from './CompaniesContext';
import gold from '../../data/sponsors/gold';

describe('Given the Footer is rendered', () => {
  
  test('it should display the correct html in the output', () => {
    const companies = { companiesList: gold, selectedCompanyDescription: "<h1>JBs Cool Company YOLOLOL</h1>" };
    const { getByText } = render(
      <CompaniesContext.Provider value={companies}>
        <CompanyDetails />
      </CompaniesContext.Provider>
    );
    expect(getByText('JBs Cool Company YOLOLOL')).toBeInTheDocument();
  });

});
