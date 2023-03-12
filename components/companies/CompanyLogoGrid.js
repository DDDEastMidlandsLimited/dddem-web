import React, { useContext } from 'react';
import CompanyInfo from './CompanyInfo';
import CompaniesContext from './CompaniesContext';
import CompanyDetails from './CompanyDetails';

export default function CompanyLogoGrid() {
  const { companiesList } = useContext(CompaniesContext);

  return (
    <div>
      <CompanyDetails />
      <div className="company-container center">
        {companiesList &&
          companiesList.map((company, index) => (
            <div className="company-item-logo" key={index}>
              <CompanyInfo
                key={company.id}
                partner={company}
                image={company.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
