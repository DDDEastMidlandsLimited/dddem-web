import React from 'react';

export default function SponsorImage({ image }) {
  return (
    <div>
      <img src={image} />

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
