import React from 'react';
import { withRouter } from 'next/router';
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
    <a
      className="externalLink"
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}

export default withRouter(ExternalLink);
