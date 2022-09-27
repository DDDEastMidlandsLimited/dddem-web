import React from 'react';

export default function Header({ title, banner }) {
  return (
    <section className="header">
      <div
        className="background"
        style={{ backgroundImage: `url("${banner}")` }}
      ></div>

      <div className="logo">
        <img
          className="image"
          src="/static/ddd_avatar_300.jpg"
          alt="DDD East Midlands Logo"
        />
      </div>

      <div className="logo">
        <h1 tabIndex="0">{title}</h1>
      </div>

      <style jsx>{``}</style>
    </section>
  );
}
