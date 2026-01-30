import Link from 'next/link';

export default function CodeOfConduct() {
  return (
    <section className="content-section" id="code-of-conduct">
      <h1 tabIndex="0">Code of Conduct</h1>
      <a name="code-of-conduct" />
      <h2 tabIndex="0">
        Please familiarise yourself with the Code of Conduct.
      </h2>
      <p tabIndex="0">
        All involved in the DDD East Midlands Conference are subject
        to{' '}
        <Link 
            href="https://www.dddeastmidlands.com/code-of-conduct/"
            passHref legacyBehavior
            title="Code of Conduct"
            tabIndex="0">
          Code Of Conduct Page.
        </Link>
        This is not just for the day of the event, but for all
        presence of DDD East Midlands including Social Media.
      </p>
      <p tabIndex="0">
        Please make sure you are familiar with it and adhere to it at
        all times to create the most inclusive and friendly event for
        all involved.
      </p>
    </section>
  );
}
