import React from 'react';
import Link from 'next/link';

export default function SpeakersButton() {
  return (
    <div className="back-to-about-button-container">
      <button className="back-to-about-button">
        <Link href="../speakergrid" rel="noreferrer">
          Back To Speakers
        </Link>
      </button>
    </div>
  );
}
