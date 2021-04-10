import React from 'react';
import theme from '../../theme/theme';

export default function SponsorButton() {
  return (
    <div>
      <br />
      <button>
        <a
          href="mailto:rachel@dddeastmidlands.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Rachel
        </a>
      </button>
      <style jsx>
        {`
          div {
            text-align: center;
          }

          button {
            border-radius: 12px;
            border: none;
            color: ${theme.palette.dark};
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px;
            background-color: ${theme.palette.quaternary};
            margin-bottom: 15px;
          }

          button a {
            color: ${theme.palette.dark};
          }

          button:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
        `}
      </style>
    </div>
  );
}
