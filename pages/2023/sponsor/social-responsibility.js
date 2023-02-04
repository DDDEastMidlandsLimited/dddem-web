import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import Head from 'next/head';

export default function SocialResponsibility() {
  return (
    <Layout>
      <Head>
        <title>Social Responsibility</title>
      </Head>
      <Header
        title={'Social Responsibility'}
        banner="/static/banners/hacktober.jpg"
      />

      <section
        className="content-section"
        id="intro-to-social-responsibility"
      >
        <a name="intro" />
        <p tabIndex="0">
          DDD East Midlands Conference is a not-for-profit
          organisation. It's run with the community in mind, and as
          such we want to make the event safe and accessible for all,
          while helping to lower the boundary into tech.
        </p>
      </section>

      <section className="content-section" id="accessibility">
        <a name="accessibility" />
        <h2 tabIndex="0">Accessibility Efforts</h2>
        <p tabIndex="0">
          Accessibility is a primary concern of the organisational
          committee. We want to enable people to be able to attend the
          event and feel safe and supported in doing so.
        </p>
        <ul>
          <li tabIndex="0">
            Ensuring a venue with accessible entrances.
          </li>
          <li tabIndex="0">
            <a
              tabIndex="0"
              href="../../covid-precautions"
              target="_blank"
            >
              Covid safety precautions.
            </a>
          </li>
          <li tabIndex="0">
            <a
              tabIndex="0"
              href="../../../information/accessibility-information"
              target="_blank"
            >
              Accessibility page
            </a>{' '}
            with information for people with additional needs.
          </li>
          <li tabIndex="0">Catering for different dietary needs.</li>
          <li tabIndex="0">
            Nottingham "what to do and where to stay" guide for
            delegates who have travelled for the event.
          </li>
          <li tabIndex="0">
            Encouraging use of pronouns on attendee badges.
          </li>
          <li tabIndex="0">
            Clear{' '}
            <a
              tabIndex="0"
              href="../../../code-of-conduct"
              target="_blank"
            >
              code of conduct
            </a>{' '}
            and who to ask for assistance.
          </li>
          <li tabIndex="0">Quiet room to reset.</li>
          <li tabIndex="0">
            Bathroom baskets with sanitary essentials.
          </li>
          <li tabIndex="0">
            Date outside of school half terms and on a weekend.
          </li>
          <li tabIndex="0">Event is free.</li>
        </ul>
      </section>

      <section className="content-section" id="education">
        <a name="education" />
        <h2 tabIndex="0">Working with Educational Facilities</h2>
        <p tabIndex="0">
          DDD East Midlands are working with Nottingham Universities
          (NTU and UoN), and are in discussion to work with even more
          local educational facilities if we can.
        </p>
        <p tabIndex="0">
          Making a career change into technology is something we are
          passionate about supporting, so The School of Code Bootcamp
          (a free 16 week course to help people of varied backgrounds
          to get into technology) and Project Function (free coding
          evening classes) have had a strong presence at DDD East
          Midlands in previous years.
        </p>
        <p tabIndex="0">
          For our 2023 event we are looking to invite numerous
          bootcamp providers and educational groups to promote
          themselves in our workshop area, to encourage more of our
          delegates to try something new in tech.
        </p>
      </section>

      <section className="content-section" id="diversity">
        <a name="diversity" />
        <h2 tabIndex="0">Diversity</h2>
        <p tabIndex="0">
          The organisation committee makes focused efforts to improve
          diversity and inclusion at the event. This includes
          representation in the selected speakers as well as ensuring
          the event space is a safe and inclusive space.
        </p>
        <ul>
          <li tabIndex="0">
            Representing and encouraging contributions from diversity
            groups.
          </li>
          <li tabIndex="0">
            Ensuring a diverse representation in our speakers.
          </li>
          <li tabIndex="0">
            Recorded talks have captions when posted to YouTube.
          </li>
          <li tabIndex="0">
            Ensuring there is information for diverse groups and
            groups with extra needs.
          </li>
          <li tabIndex="0">
            Multi-faith room for prayer and contemplation.
          </li>
          <li tabIndex="0">Anonymous submission process.</li>
        </ul>
      </section>
    </Layout>
  );
}
