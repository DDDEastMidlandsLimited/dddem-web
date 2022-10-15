import React from 'react';
import SponsorshipTiers from './SponsorshipTiers';

export default function ISponsorshipTiersList({ sponsorship }) {
  return (
    <section className="boxed-items">
      {sponsorship.map((sponsorship) => (
        <SponsorshipTiers
          key={sponsorship.id}
          sponsorship={sponsorship}
        />
      ))}
    </section>
  );
}
