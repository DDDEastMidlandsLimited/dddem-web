import React from 'react';

export default function VenueButton() {
  return (
    <div className="venueButtonContainer">
      <button className="venueButton">
        <a
          href="https://s3.eu-west-2.amazonaws.com/ddd-pdf-downloads/NCCDirections.pdf"
          target="_blank"
          download
          rel="noreferrer"
        >
          View Printable Travel Guide
        </a>
      </button>
    </div>
  );
}
