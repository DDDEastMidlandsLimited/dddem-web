import React from 'react';
import SponsorshipTiers from './SponsorshipTiers';

export default function ISponsorshipTiersList({ sponsorship }) {
  return (
    <section className="boxedItems">
      {sponsorship.map((sponsorship) => (
<<<<<<< HEAD
        <SponsorshipTiers key={sponsorship.id} sponsorship={sponsorship} />
=======
        <SponsorshipTiers
          key={sponsorship.id}
          sponsorship={sponsorship}
        />
>>>>>>> b829117074689feabaa40e8ef448b7e5f0b0df32
      ))}
    </section>
  );
}
