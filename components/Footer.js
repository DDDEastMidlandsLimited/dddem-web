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
            href="https://www.youtube.com/channel/UC5TNH43dpYqmw3ggv9OGIKw"
            prefetch={false}
            target="_blank"
            aria-label="youtube"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brands('youtube')} size="sm" />
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
            href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
            prefetch={false}
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brands('linkedin')} size="sm" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
