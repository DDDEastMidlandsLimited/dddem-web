import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

/* enabled prettier*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-3">
          <Link href="/code-of-conduct">
            <a target="_blank" rel="noreferrer">
              Code of Conduct
            </a>
          </Link>
        </div>
        <div className="col-3">
          <Link
            href="https://twitter.com/dddeastmidlands"
            prefetch={false}
          >
            <a
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} size="sm" />
            </a>
          </Link>
          <Link
            href="https://github.com/DDDEastMidlandsLimited/dddem-web"
            prefetch={false}
          >
            <a
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} size="sm" />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/dddeastmidlands/?hl=en"
            prefetch={false}
          >
            <a
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                size="sm"
              />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
            prefetch={false}
          >
            <a
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="sm" />
            </a>
          </Link>
        </div>
        <div className="col-3">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
