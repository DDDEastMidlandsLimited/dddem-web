import React from 'react';

export default function FullWidthImage({ url }) {
  return <p style={{ backgroundImage: `url("${url}")` }}></p>;
}
