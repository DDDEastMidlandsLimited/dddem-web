import React from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
import ExternalLink from '../ExternalLink';

export default function CompanyInfo({ partner, image }) {
  return (
    <div>
      <ExternalLink
        href={partner.link}
        target="_blank"
        category="logo"
        eventType={partner.name}
        rel="noopener noreferrer"
      >
        <Image
          src={image}
          alt={`Click to go to the ${partner.name} site`}
        />
      </ExternalLink>

      <style jsx>
        {`
          div {
            border: 5px solid ${theme.palette.light};
            background: ${theme.palette.light};
          }
          img {
            width: 80%;
            margin-top: 4px;
          }
          div:hover {
            background: ${theme.palette.quaternary};
            border-radius: 16px;
          }
        `}
      </style>
    </div>
  );
}
