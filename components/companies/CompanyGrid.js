import React, { useContext } from 'react';
import Company from './CompanyInfo';
import CompanyDetailsButton from './CompanyDetailsButton';
import CompaniesContext from './CompaniesContext';

export default function CompanyGrid() {
  const { companiesList, selectedCompanyDescription } = useContext(
    CompaniesContext,
  );

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: selectedCompanyDescription,
        }}
      ></div>
      {companiesList &&
        companiesList.map((company, index) => (
          <div key={index}>
            <Company
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
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
