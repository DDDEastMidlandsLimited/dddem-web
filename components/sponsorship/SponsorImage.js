import React from 'react';
import Image from 'next/image';

export default function SponsorImage({ image }) {
  return (
    <div>
      <Image src={image} />

      <style jsx>
        {`
          div {
            position: absolute;
            top: 0;
            left: 0;
            border: 20px solid white;
            background: white;
          }
          img {
            width: 95%;
            margin-top: 4px;
          }
        `}
      </style>
    </div>
  );
}
