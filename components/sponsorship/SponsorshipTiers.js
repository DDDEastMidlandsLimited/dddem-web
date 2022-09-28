import React from 'react';

export default function SponsorshipTiers({ sponsorship }) {
  return (
    <div className="boxItem sponsorship-tiers">
      <div tabIndex="0" className="top">
        {sponsorship.name}
      </div>
      <div
        className={
          sponsorship.sold == true
            ? 'pastBottomBackground'
            : 'bottomBackground'
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
