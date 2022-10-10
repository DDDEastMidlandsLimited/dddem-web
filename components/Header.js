import React from 'react';
import Image from 'next/future/image';

export default function Header({ title, banner }) {
  return (
    <section className="header">
      <div
        className="background"
        style={{ backgroundImage: `url("${banner}")` }}
      ></div>

      <div className="logo">
        <Image
          className="logoImageTemp"
          src="/static/ddd_avatar_300.jpg"
          alt="DDD East Midlands Logo"
          width={310}
          height={130}
        />
      </div>

      <div className="logo">
        <h1 tabIndex="0">{title}</h1>
      </div>
    </section>
  );
}
