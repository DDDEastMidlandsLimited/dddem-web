import React from 'react';
import { withRouter } from 'next/router';
import theme from '../theme/theme';
import { logEvent } from '../utils/analytics';

function ExternalLink({
  children,
  href,
  target,
  category,
  eventType,
  rel,
}) {
  const handleClick = () => {
    logEvent(category, eventType);
  };

  return (
    <a href={href} onClick={handleClick} target={target} rel={rel}>
      {children}
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: ${theme.palette.light};
            display: block;
            padding: 0.75em 15px;
            line-height: 1em;
            font-size: 1em;
          }

          a:hover {
            color: ${theme.palette.light};
            text-decoration: underline;
          }

          @media (min-width: 768px) {
            a {
              color: ${theme.palette.primary};
              border: 0 !important;
              border-bottom: none;
            }
          }
        `}
      </style>
    </a>
  );
}

export default withRouter(ExternalLink);
