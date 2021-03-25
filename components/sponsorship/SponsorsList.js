import React from 'react';
import Sponsor from './Sponsor';

export default function SponsorList({ sponsors }) {
  return (
    <section className="boxedItems">
      {sponsors.map((sponsor) => (
        <Sponsor key={sponsor.id} sponsor={sponsor} />
      ))}
    </section>
  );
}
