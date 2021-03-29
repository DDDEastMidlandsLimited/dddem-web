import React from 'react';
import CompaniesProvider from './CompaniesProvider';
import CompanyGrid from './CompanyGrid';

export default function NotableCompanies() {
  return (
    <CompaniesProvider>
      <div>
        <CompanyGrid />
      </div>
    </CompaniesProvider>
  );
}
