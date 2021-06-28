import React from 'react';
import SilverCompaniesProvider from './SilverCompaniesProvider';
import CompanyLogoGrid from './CompanyLogoGrid';

export default function SilverSponsorLogos() {
  return (
    <SilverCompaniesProvider>
      <div>
        <CompanyLogoGrid />
      </div>
    </SilverCompaniesProvider>
  );
}
