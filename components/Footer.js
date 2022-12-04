import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

/* enabled prettier*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-3">
          <Link
            href="/code-of-conduct"
            target="_blank"
            rel="noreferrer"
          >
            Code of Conduct
          </Link>
        </div>
        <div className="col-3">
          <Link
            href="https://twitter.com/dddeastmidlands"
            prefetch={false}
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brands('twitter')} size="sm" />
          </Link>
          <Link
            href="https://github.com/DDDEastMidlandsLimited/dddem-web"
            prefetch={false}
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brands('github')} size="sm" />
          </Link>
          <Link
            href="https://www.instagram.com/dddeastmidlands/?hl=en"
            prefetch={false}
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brands('instagram')} size="sm" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
            prefetch={false}
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brands('linkedin')} size="sm" />
          </Link>
          <Link
            href="https://mastodon.me.uk/@dddem"
            prefetch={false}
            target="_blank"
            aria-label="Mastodon"
            rel="noopener noreferrer me"
          >
            <FontAwesomeIcon icon={brands('mastodon')} size="sm" />
          </Link>
        </div>
        <div className="col-3">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
