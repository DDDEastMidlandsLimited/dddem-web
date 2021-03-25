import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function Introduction() {
  return (
    <section id="introduction">
      <h1 tabIndex="0">Introduction</h1>
      <a name="introduction" />
      <h2 tabIndex="0">Thank you.</h2>
      <p tabIndex="0">
        Without your support, there wouldn’t be a DDD East Midlands
        Conference. Thank you for being an involved and encouraging
        community.
      </p>
      <p tabIndex="0">
        This is going to be a great day full of amazing talks,
        exhibition stalls and more. We can&apos;t wait to meet you all
        and hope you have a fantastic day.
      </p>
      <style jsx>{ContentSection}</style>
    </section>
  );
}
