import React from 'react';
import PartnerCompaniesProvider from './PartnerCompaniesProvider';
import PartnerLogoGrid from './PartnerLogoGrid';

export default function PartnerSponsorLogos() {
  return (
    <PartnerCompaniesProvider>
      <div>
        <PartnerLogoGrid />
      </div>
    </PartnerCompaniesProvider>
  );
}
