import React from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
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
        <Image
          className="company-info-image"
          src={image}
          alt={`Click to go to the ${partner.name} site`}
        />
      </ExternalLink>
    </div>
  );
}
