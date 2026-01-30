import Link from 'next/link';
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
    <Link
      className="externalLink"
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}

export default ExternalLink;
