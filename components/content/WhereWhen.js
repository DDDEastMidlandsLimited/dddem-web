import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function WhereWhen() {
  return (
    <section id="where-and-when">
      <a name="when-and-where" />
      <h1 tabIndex="0">When and Where?</h1>
      <h2 tabIndex="0">When</h2>
      <p tabIndex="0">2nd October 2021 8:00am - 6:00pm.</p>
      <h2 tabIndex="0">Where</h2>
      <p>
        <a href="http://www.nottinghamconferencecentre.co.uk/">
          The Nottingham Conference Centre
        </a>
      </p>
      <style jsx>{ContentSection}</style>
    </section>
  );
}
