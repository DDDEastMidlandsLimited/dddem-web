import React from 'react';
import Image from 'next/image';
import theme from '../theme/theme';

export default function Header({ title, banner }) {
  return (
    <section className="header">
      <div
        className="background"
        style={{ backgroundImage: `url("${banner}")` }}
      ></div>

      <div className="logo">
        <Image
          className="image"
          src="/static/ddd_avatar_300.jpg"
          alt="DDD East Midlands Logo"
          layout="fill"
        />
      </div>

      <div className="logo">
        <h1 tabIndex="0">{title}</h1>
      </div>
    </section>
  );
}
