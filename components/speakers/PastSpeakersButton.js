import React from 'react';
import Link from 'next/link';

export default function PastSpeakersButton() {
  return (
    <div className="back-to-about-button-container">
      <div className="back-to-about-button">
        <Link href="../pastspeakergrid" rel="noreferrer">
          Back To Past Speakers
        </Link>
      </div>
    </div>
  );
}
