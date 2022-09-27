import React from 'react';
import { logEvent } from '../utils/analytics';

export default function TicketButton() {
  return (
    <div className="contact-button-container">
      <button className="contact-button">
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
    </div>
  );
}
