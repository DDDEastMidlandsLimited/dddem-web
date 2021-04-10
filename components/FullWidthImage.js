import React from 'react';

export default function FullWidthImage({ url }) {
  return (
    <p>
      <style jsx>
        {`
          p {
            background-image: url('${url}');
            height: 500px;
            background-repeat: no-repeat;
            background-position: center;
            text-align: center;
            background-size: 100% auto;
          }
        `}
      </style>
    </p>
  );
}
