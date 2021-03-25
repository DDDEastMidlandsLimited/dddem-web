import React from 'react';
import { logEvent } from '../utils/analytics';
import theme from '../../theme/theme';

export default function TicketButton() {
  return (
    <div align="center">
      <button className="contactButton">
        <a
          href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058"
          target="_blank"
          onSelect={() => {
            logEvent('home', 'eventbrite');
          }}
          rel="noreferrer"
        >
          Go To Eventbrite
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
            padding: 10px 30px;
            margin: 20px;
            color: ${theme.palette.primary};
            border: 2px solid ${theme.palette.secondary};
            background-color: ${theme.palette.light};
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .contactButton a {
            color: ${theme.palette.secondary};
            text-decoration: none;
          }

          .contactButton:hover {
            background-color: ${theme.palette.quaternary};
          }
        `}
      </style>
    </div>
  );
}
