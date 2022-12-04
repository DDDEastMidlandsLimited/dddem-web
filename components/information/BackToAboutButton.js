import React from 'react';
import Link from 'next/link';

export default function BackToAboutButton() {
  return (
    <div className="back-to-about-button-container">
      <button className="back-to-about-button">
        <Link
          href="../../about-the-conference/#organisers"
          rel="noreferrer"
        >
          Back To About
        </Link>
      </button>
    </div>
  );
}
