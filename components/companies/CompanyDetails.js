import React, { useContext } from 'react';
import CompaniesContext from './CompaniesContext';

export default function CompanyDetails() {
  const { selectedCompanyDescription } = useContext(CompaniesContext);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: selectedCompanyDescription,
      }}
    ></div>
  );
}
