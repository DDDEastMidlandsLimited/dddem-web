import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function SocialMedia() {
  return (
    <section id="social-media">
      <h1 tabIndex="0">Social Media and Photos</h1>
      <p tabIndex="0">
        Feel free to take photos and post on social media before,
        after and during the event. There are just a few guidelines we
        ask you to respect.
      </p>
      <a name="photographs" />
      <h2 tabIndex="0">Photographs</h2>
      <p tabIndex="0">
        We will have a coloured lanyard system at the event to
        indicate whether attendees are OK with their photo being taken
        and used.
      </p>
      <ul>
        <li tabIndex="0" className="green">
          Green — It’s fine for their photo to be taken
        </li>
        <li tabIndex="0" className="red">
          Red — Do not include me in your photos or promotional
          material
        </li>
      </ul>
      <p tabIndex="0">
        You will be able to pick your lanyard on registration.
      </p>
      <a name="social-media" />
      <h2 tabIndex="0">Social Media Posts</h2>
      <p tabIndex="0">
        Please use any of the below information to tag us. If using
        our hashtag or handles though, please avoid promoting anything
        that doesn’t align with our code of conduct.
      </p>
      <h3 tabIndex="0">DDD East Midlands on Social Media</h3>
      <ul tabIndex="0">Hashtags: #DDDEM | #DDDEM2021</ul>
      <ul tabIndex="0">
        Twitter:{' '}
        <a
          href="https://twitter.com/dddeastmidlands"
          target="_blank"
          rel="noreferrer"
        >
          @dddeastmidlands
        </a>
      </ul>
      <ul tabIndex="0">
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
          target="_blank"
          rel="noreferrer"
        >
          DDD East Midlands Limited
        </a>
      </ul>
      <ul tabIndex="0">
        Instagram:{' '}
        <a
          href="https://www.instagram.com/dddeastmidlands/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          @dddeastmidlands
        </a>
      </ul>
      <style jsx>{ContentSection}</style>
    </section>
  );
}
