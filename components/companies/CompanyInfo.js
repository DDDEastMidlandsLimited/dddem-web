import React from 'react';
import Image from 'next/image';
import ExternalLink from '../ExternalLink';

export default function CompanyInfo({ partner, image }) {
  return (
    <div className="company-div center">
      <ExternalLink
        href={partner.link}
        target="_blank"
        category="logo"
        eventType={partner.name}
        rel="noopener noreferrer"
      >
        <Image
          className="company-logo"
          src={image}
          alt={`Click to go to the ${partner.name} site`}
          height={150}
          width={300}
          layout="responsive"
        />
      </ExternalLink>
    </div>
  );
}
