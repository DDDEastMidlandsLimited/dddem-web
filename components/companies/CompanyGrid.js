import React, { useContext } from 'react';
import CompanyInfo from './CompanyInfo';
import CompanyDetailsButton from './CompanyDetailsButton';
import CompaniesContext from './CompaniesContext';
import CompanyDetails from './CompanyDetails';

export default function CompanyGrid() {
  const { companiesList } = useContext(CompaniesContext);

  return (
    <div>
      <CompanyDetails />
      <div className="company-container">
        {companiesList &&
          companiesList.map((company, index) => (
            <div className="company-item" key={index}>
              <CompanyInfo
                key={company.id}
                partner={company}
                image={company.image}
              />
              {company.description && (
                <CompanyDetailsButton
                  companyDescription={company.description}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
