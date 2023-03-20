import React, { useContext } from 'react';
import PartnerInfo from './PartnerInfo';
import CompaniesContext from './CompaniesContext';
import CompanyDetails from './CompanyDetails';

export default function PartnerLogoGrid() {
  const { companiesList } = useContext(CompaniesContext);

  return (
    <div>
      <CompanyDetails />
      <div className="company-container center">
        {companiesList &&
          companiesList.map((company, index) => (
            <div className="company-item-logo" key={index}>
              <PartnerInfo
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
