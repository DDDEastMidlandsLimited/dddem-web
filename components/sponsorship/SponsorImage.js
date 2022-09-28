import React from 'react';
import Image from 'next/image';

export default function SponsorImage({ image }) {
  return (
    <div>
      <Image src={image} />
    </div>
  );
}
