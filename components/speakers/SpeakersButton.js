import React from 'react';
import Link from 'next/link';

export default function SpeakersButton() {
  return (
    <div className="back-to-about-button-container">
      <div className="back-to-about-button">
        <Link href="../speakergrid" rel="noreferrer">
          Back To Speakers
        </Link>
      </div>
    </div>
  );
}
