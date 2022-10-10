import React from 'react';

export default function SponsorshipTiers({ sponsorship }) {
  return (
<<<<<<< HEAD
    <div className="boxItem sponsorship-tiers">
=======
    <div className="box-item sponsorship-tiers">
>>>>>>> 1b6a82bda66aff092afb2953ea742af567c3b855
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
