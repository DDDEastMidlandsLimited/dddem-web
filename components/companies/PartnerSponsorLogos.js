import React from 'react';
import PartnerCompaniesProvider from './PartnerCompaniesProvider';
import CompanyLogoGrid from './CompanyLogoGrid';

export default function PartnerSponsorLogos() {
  return (
    <PartnerCompaniesProvider>
      <div>
        <CompanyLogoGrid />
      </div>
    </PartnerCompaniesProvider>
  );
}
