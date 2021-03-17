import React from 'react';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import theme from '../theme/theme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* enabled prettier*/

const Footer = () => (
  <footer>
    <Row>
      <Col xs="3" m="4">
        <Link href="/code-of-conduct">
          <a target="_blank">Code of Conduct</a>
        </Link>
      </Col>
      <Col xs="3" m="4">
        <Link
          href="https://twitter.com/dddeastmidlands"
          prefetch={false}
        >
          <a target="_blank" aria-label="Twitter">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="sm" />
          </a>
        </Link>
        <Link
          href="https://github.com/DDDEastMidlandsLimited/dddem-web"
          prefetch={false}
        >
          <a target="_blank" aria-label="GitHub">
            <FontAwesomeIcon icon={['fab', 'github']} size="sm" />
          </a>
        </Link>
        <Link
          href="https://www.instagram.com/dddeastmidlands/?hl=en"
          prefetch={false}
        >
          <a target="_blank" aria-label="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="sm" />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
          prefetch={false}
        >
          <a target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="sm" />
          </a>
        </Link>
      </Col>
      <Col xs="3" m="3">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Col>
    </Row>
    <style jsx>
      {`
        footer {
          width: 100vw;
          background-color: ${theme.palette.primary};
          padding: 20px 0;
          margin-top: 30px;
          text-align: center;
        }
        a {
          text-decoration: none;
          font-family: ${theme.font.default};
          color: ${theme.palette.light};
          margin-left: 5%;
        }
      `}
    </style>
  </footer>
);

export default Footer;
