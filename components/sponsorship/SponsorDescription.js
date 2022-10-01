import React from 'react';

export default function SponsorDescription({ name, description }) {
  return (
    <div className="sponsorship-description">
      <div className="top">{name}</div>
      <div className="bottom-background">
        <div className="bottom">{description}</div>
      </div>
    </div>
  );
}
