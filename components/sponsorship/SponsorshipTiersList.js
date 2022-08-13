import React from 'react';
import SponsorshipTiers from './SponsorshipTiers';

export default function ISponsorshipTiersList({ sponsorship }) {
  return (
    <section className="boxedItems">
      {sponsorship.map((sponsorship) => (
        <SponsorshipTiers
          key={sponsorship.id}
          sponsorship={sponsorship}
        />
      ))}
    </section>
  );
}
