import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

/* enabled prettier*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-3">
          <Link href="/code-of-conduct">
            Code of Conduct
          </Link>
        </div>
        <div className="col-3">
          <Link
            href="https://www.youtube.com/channel/UC5TNH43dpYqmw3ggv9OGIKw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube"
          >
            <FontAwesomeIcon icon={brands('youtube')} size="sm" />
          </Link>
          <Link
            href="https://github.com/DDDEastMidlandsLimited/dddem-web"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={brands('github')} size="sm" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={brands('linkedin')} size="sm" />
          </Link>
        </div>
      </div>
    </footer>
  );
}