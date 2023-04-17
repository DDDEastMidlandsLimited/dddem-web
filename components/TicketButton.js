import React from 'react';

export default function TicketButton() {
  return (
    <div className="venueButtonContainer">
      <button className="venueButton">
        <a
          href="https://www.eventbrite.co.uk/e/ddd-east-midlands-2023-tickets-607213841947"
          target="_blank"
          download
          rel="noreferrer"
        >
          Get Your Ticket
        </a>
      </button>
    </div>
  );
}
