import React from 'react';
import Link from 'next/link';

export default function PastSpeakersButton() {
  return (
    <div className="back-to-about-button-container">
      <button className="back-to-about-button">
        <Link href="../../pastspeakergrid" rel="noreferrer">
          Back To Past Speakers
        </Link>
      </button>
    </div>
  );
}
