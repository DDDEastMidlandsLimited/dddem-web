import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import theme from '../theme/theme';
import Head from 'next/head';

export default function CodeOfConduct() {
  return (
    <Layout>
      <Head>
        <title>Code of Conduct</title>
      </Head>
      <Header
        title={'Code of Conduct'}
        banner="/static/banners/coc.jpg"
      />
      <section>
        <h2 tabIndex="0">TL;DR</h2>
        <p tabIndex="0">
          Treat everyone in a respectful and kind manner. Harassment
          and abuse are never tolerated. If you are in a situation
          that makes you uncomfortable at a DDD East Midlands event,
          if the event itself is creating an unsafe or inappropriate
          environment or you are made to feel uncomfortable by anyone
          at any of our events or in our online communities,
          <a
            href="https://www.dddeastmidlands.com/contact/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            please let a member of the event team know or contact and
            organiser
          </a>
          .
        </p>
      </section>
      <section>
        <h2 tabIndex="0">The Full Version</h2>
        <p tabIndex="0">
          Inclusivity is a core value of DDD East Midlands. We believe
          that every single person has the right to take part in DDD
          East Midlands events and online communities in a safe and
          welcoming environment.
        </p>
        <p tabIndex="0">
          In order to avoid any situtations where an attendee may feel
          uncomfortable we ask that you not only treat others in the
          manner that you would expect to be treated, but also to
          respect what makes other people feel comfortable. As part of
          this we ask that speakers and representatives of the event
          try to refrain from language or actions that may be
          considered offensive. This includes swearing.
        </p>
        <p tabIndex="0">
          Harassment includes but is not limited to offensive verbal
          or written comments related to gender, age, sexual
          orientation, sexual behaviour, disability, physical
          appearance, body size, race, religion, sexual images in
          public spaces, deliberate intimidation, stalking, following,
          harassing photography or recording, sustained disruption of
          talks or other events, inappropriate physical contact, and
          unwelcome sexual attention.
        </p>
        <p tabIndex="0">
          If what you’re doing is making someone feel uncomfortable,
          that counts as harassment and is enough reason to stop doing
          it.
        </p>
        <p tabIndex="0">
          Participants asked to stop any harassing behaviour are
          expected to comply immediately. Sponsors, venue staff,
          speakers, volunteers, organisers, and anyone else at any of
          our events or in our online communities are also subject to
          the anti-harassment policy. In particular, attendees should
          not use sexualised images, humour, activities, or other
          material in presentations, during events and on our online
          community.
        </p>
        <p tabIndex="0">
          If a participant engages in harassing behaviour, DDD East
          Midlands may take any action DDD East Midlands deems
          appropriate, including warning the offender or expulsion
          from the events and our online communities with no
          eligibility for reimbursement or refund of any type.
        </p>
        <p tabIndex="0">
          If you are being harassed, notice that someone else is being
          harassed, or have any other concerns,
          <a href="/contact" target="_blank">
            {' '}
            please let a member of the event team know or contact and
            organiser
          </a>
          .
        </p>
        <p tabIndex="0">
          DDD East Midlands representatives will be happy to help
          participants contact venue security or local law
          enforcement, provide escorts, or otherwise assist those
          experiencing harassment to feel safe while involved in DDD
          East Midlands events and our online communities.
        </p>
        <p tabIndex="0">
          The facilities provided at DDD East Midlands events,
          including networks, internet access, wifi, power supply,
          furniture, toilets and the physical environment in general,
          must be used with respect, in full accordance of the law,
          the terms of this document and any additional terms laid out
          at the event. When breaches of these terms take place DDD
          East Midlands may take any action DDD East Midlands deems
          appropriate, including warning the offender, expulsion from
          the events and our online communities with no eligibility
          for reimbursement or refund of any type, or even involving
          law enforcement.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">Reporting Code Of Conduct Violations</h2>
        <p tabIndex="0">
          If there is any circumstance where want to report a code of
          conduct violation, there are numerous people you can speak
          to at the event.
        </p>
        <ul>
          <li tabIndex="0">The volunteers of the conference</li>
          <li tabIndex="0">
            The conference organisers (Jessica / Moreton)
          </li>
        </ul>
        <p tabIndex="0">
          Our volunteers are happy to listen to your concerns, though
          any concerns will ultimately be dealt with by the events
          organisers. All conversations around code of conduct
          violations will be dealt with sensitively and
          confidentially.
        </p>
        <p tabIndex="0">
          If you are uncomfortable speaking in person you can contact
          us on Twitter or by email, but there is no guaruntee that
          messages will be dealt with in a timely manner on the day.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">Approaching People About Jobs</h2>
        <p tabIndex="0">
          At our events and on our online community it is not
          considered acceptable to approach people unsolicited about
          jobs, it doesn&apos;t make for a welcoming environment and
          it isn&apos;t what our community is for.
        </p>
        <p tabIndex="0">
          Job promotions should include the name of the role, the name
          of the company and information about where people can find
          out more and apply.
        </p>
      </section>
      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
}
