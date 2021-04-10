import React from 'react';
import theme from '../theme/theme';

export default function VenueButton() {
  return (
    <div align="center">
      <button className="contactButton">
        <a
          href="https://s3.eu-west-2.amazonaws.com/ddd-pdf-downloads/NCCDirections.pdf"
          target="_blank"
          download
          rel="noreferrer"
        >
          View Printable Travel Guide
        </a>
      </button>
      <style jsx>
        {`
          .contactButton {
            align: ${theme.palette.quaternary};
            font-weight: bold;
            font-size: ${theme.font.sizes.mobile.subtitle1};
            flex-grow: 1;
            border-radius: 12px;
            padding: 10px 10px 10px 10px;
            color: ${theme.palette.primary};
            border: 2px solid ${theme.palette.primary};
            background-color: ${theme.palette.light};
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .contactButton a {
            text-decoration: none;
          }

          .contactButton:hover {
            background-color: ${theme.palette.primary};
          }

          .contactButton a:hover {
            color: ${theme.palette.light};
          }
        `}
      </style>
    </div>
  );
}
