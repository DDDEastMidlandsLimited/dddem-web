import React, { useContext } from 'react';
import CompaniesContext from './CompaniesContext';

export default function CompanyDetailsButton({ companyDescription }) {
  const { setSelectedCompanyDescription } =
    useContext(CompaniesContext);

  return (
    <button
      className="company-details-button"
      onClick={() =>
        setSelectedCompanyDescription(companyDescription)
      }
    >
      see details
    </button>
  );
}
