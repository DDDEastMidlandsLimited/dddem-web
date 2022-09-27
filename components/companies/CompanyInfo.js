import React from 'react';
import ExternalLink from '../ExternalLink';

export default function CompanyInfo({ partner, image }) {
  return (
    <div className="company-info">
      <ExternalLink
        href={partner.link}
        target="_blank"
        category="logo"
        eventType={partner.name}
        rel="noopener noreferrer"
      >
        <img
          className="company-info-image"
          src={image}
          alt={`Click to go to the ${partner.name} site`}
        />
      </ExternalLink>
    </div>
  );
}
