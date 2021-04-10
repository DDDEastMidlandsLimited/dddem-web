import React from 'react';
import GoldCompaniesProvider from './GoldCompaniesProvider';
import CompanyLogoGrid from './CompanyLogoGrid';

export default function GoldSponsorLogos() {
  return (
    <GoldCompaniesProvider>
      <div>
        <CompanyLogoGrid />
      </div>
    </GoldCompaniesProvider>
  );
}
