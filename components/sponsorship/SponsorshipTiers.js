import React from 'react';

export default function SponsorshipTiers({ sponsorship }) {
  return (
    <div className="box-item sponsorship-tiers">
      <div tabIndex="0" className="top">
        {sponsorship.name}
      </div>
      <div
        className={
          sponsorship.sold == true
            ? 'pastbottom-background'
            : 'bottom-background'
        }
      >
        <div
          tabIndex="0"
          className={
            sponsorship.sold == true ? 'strikeBottom' : 'bottom'
          }
        >
          {sponsorship.status}
        </div>
      </div>
    </div>
  );
}
