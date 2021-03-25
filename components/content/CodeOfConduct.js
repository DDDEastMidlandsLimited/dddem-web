import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function CodeOfConduct() {
  return (
    <section id="code-of-conduct">
      <h1 tabIndex="0">Code of Conduct</h1>
      <a name="code-of-conduct" />
      <h2 tabIndex="0">
        Please familiarise yourself with the Code of Conduct.
      </h2>
      <p tabIndex="0">
        All involved in the DDD East Midlands Conference are subject
        to{' '}
        <a href="https://www.dddeastmidlands.com/code-of-conduct/">
          Code Of Conduct Page.
        </a>
        This is not just for the day of the event, but for all
        presence of DDD East Midlands including Social Media.
      </p>
      <p tabIndex="0">
        Please make sure you are familiar with it and adhere to it at
        all times to create the most inclusive and friendly event for
        all involved.
      </p>
      <p tabIndex="0">
        Should you have any concerns regarding the Code of Conduct
        before, during or after the event, please contact the
        organisers. See the{' '}
        <a href="/contact" target="_blank">
          contact page for information.
        </a>
      </p>
      <style jsx>{ContentSection}</style>
    </section>
  );
}
