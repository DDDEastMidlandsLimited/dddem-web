import React, { useContext } from 'react';
import CompanyInfo from './CompanyInfo';
import CompanyDetailsButton from './CompanyDetailsButton';
import CompaniesContext from './CompaniesContext';
import CompanyDetails from './CompanyDetails';

export default function CompanyGrid() {
  const { companiesList } = useContext(CompaniesContext);

  return (
    <div>
      <div>
        <CompanyDetails />
        <div className="companyContainer">
          {companiesList &&
            companiesList.map((company, index) => (
              <div className="companyItem" key={index}>
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
      <style jsx>
        {`
          div.companyContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: baseline;
          }
          div.companyItem {
            display: flex;
            flex: 1 1 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
