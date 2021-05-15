import React, { useContext } from 'react';
import CompanyInfo from './CompanyInfo';
import CompaniesContext from './CompaniesContext';
import CompanyDetails from './CompanyDetails';

export default function CompanyLogoGrid() {
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
            flex-wrap: wrap;
          }
          div.companyItem {
            display: flex;
            flex: 1 1 0;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
}
