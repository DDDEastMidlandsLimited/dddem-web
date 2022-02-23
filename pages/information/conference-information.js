import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import CovidPrecautions from '../../components/content/CovidPrecautions';
import theme from '../../theme/theme';
import Head from 'next/head';

export default function ConferenceInformation() {
  return (
    <Layout>
      <Head>
        <title>About DDDEM</title>
      </Head>
      <Header
        title={'About DDDEM'}
        banner="/static/banners/home.jpg"
      />
      <section name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p>
          <strong>
            <a href="#about">About DDD East Midlands</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#ddd">
              But what is the DDD about? What is this conference?
            </a>
          </li>
          <li>
            <a href="#ddd-principles">DDD Principles</a>
          </li>
          <li>
            <a href="#our-principles">Our Principles</a>
          </li>
        </ul>

        <p>
          <strong>
            <a href="#ddd-about">
              About Developer! Developer! Developer! (DDD)
            </a>
          </strong>
        </p>

        <p>
          <strong>
            <a href="#inclusivity">Promoting Inclusivity</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#accessibility">Accessibility Page</a>
          </li>
          <li>
            <a href="#selection">Submission And Selection Process</a>
          </li>
          <li>
            <a href="#speaking">Making speaking accessible</a>
          </li>
        </ul>
      </section>

      <section id="about">
        <a name="about" />
        <h1 tabIndex="0">About DDD East Midlands</h1>
        <p tabIndex="0">
          Nottingham is the perfect blend of the professional
          corporates and the innovative independents and this bleeds
          right through to the tech scene. This unique and perfect mix
          of the traditional and contemporary is reflected in DDD East
          Midlands. It is part of the multi-national DDD conference
          community, but with a focus on promoting the talent,
          companies and the amazing tech community the East Midlands
          has to offer.
        </p>

        <br />
        <a name="ddd" />
        <h2 tabIndex="0">
          But what is the DDD about? What is this conference?
        </h2>
        <p tabIndex="0">
          DDD stands for (in this case){' '}
          <b>Developer! Developer! Developer!</b>
        </p>
        <p tabIndex="0">
          Developer! Developer! Developer! is an umbrella, open-source
          conference format. By naming ourselves DDD, and associating
          ourselves with similar events, we abide by certain
          principles. Other than that, this conference is by the East
          Midlands community for the East Midlands community and is
          unique in its own right. There is more information about
          Developer! Developer! Developer! further down this page for
          those interested.
        </p>
      </section>

      <section>
        <a name="ddd-principles" />
        <h2 tabIndex="0">The event follows these DDD Principles:</h2>
        <ul>
          <li tabIndex="0">
            The event is hosted on a Saturday so that attendees do not
            have to take time from work.
          </li>
          <li tabIndex="0">Tickets to attend the event are free.</li>
        </ul>
        <br />
        <a name="our-principles" />
        <h2 tabIndex="0">As well as our own following principles:</h2>
        <ul>
          <li tabIndex="0">All talk submissions are anonymous.</li>
          <li tabIndex="0">
            There is a democratic selection process for talks
            involving attendees voting for what they want to see.
          </li>
          <li tabIndex="0">
            The event is arranged with the community in mind.
          </li>
        </ul>
      </section>

      <section id="ddd-about">
        <a name="ddd-about" />
        <h1 tabIndex="0">
          About Developer! Developer! Developer! (DDD)
        </h1>
        <p tabIndex="0">
          DDD was first formed as a conference in 2005, the first
          event happening in Reading, UK. Since then it has generated
          many spin-off events across the world.
        </p>
        <p tabIndex="0">
          The aims of the original DDD was to provide free technical
          education. During it’s more than 10-year history, it has
          nurtured talented speakers, who have gone on to become
          Microsoft Most Valuable Professionals, Microsoft FTEs and to
          present at National and International Conferences.
        </p>
        <p tabIndex="0">
          Though the original DDD conference is focused on .NET, DDD
          East Midlands is going to be open to a range of talks within
          the field of technology. It is language and technology
          agnostic.
        </p>
      </section>

      <section id="inclusivity">
        <a name="inclusivity" />
        <h1 tabIndex="0">Promoting Inclusivity</h1>
        <p tabIndex="0">
          As an embodiment of the East Midlands tech community, we
          want to promote inclusivity, support and camaraderie. Here
          are just a few of the ways we ai to do this:
        </p>

        <a name="accessibility" />
        <h2 tabIndex="0">Accessibility Page</h2>
        <p tabIndex="0">
          In order to remain transparent, we have tried to answer as
          many accessibility related questions as we could on our{' '}
          <a
            href="/information/accessibility-information"
            target="_blank"
          >
            Accessibility Page
          </a>
          .
        </p>

        <a name="selection" />
        <h2 tabIndex="0">Submission And Selection Process</h2>
        <p tabIndex="0">
          The submission process is anonymous and the selection
          process democratic. This is a conference for the community,
          by the community. All talks that are submitted are
          anonymous. When the attendees vote on which talks they want
          to see, and when the organisers are sorting out the agenda,
          identifiable information about those who have submitted
          can&apos;t bee seen. This is to keep the process as fair as
          possible and ensure talks are picked on their advertised
          content, not by who is presenting.
        </p>
        <p tabIndex="0">
          As mentioned, attendees will get to vote on the talks they
          wish to see. Talks will be selected by popular vote, but
          with some discretion by the organisers of the conference.
          The discretion is to ensure variety at the conference. If
          two or more talks are nearly exactly the same, the most
          popular will continue through and the next most popular,
          different talk will replace the one with identical content.
        </p>
        <p tabIndex="0">
          We also ask that all talk submissions abide to the{' '}
          <a href="/code-of-conduct/">Code of Conduct</a>. We want all
          attendees to feel comfortable at the event, so ask that no
          submissions or talks contain content of a graphic, violent
          or sexual nature or contain any language that may be
          considered marginalising or hateful. If you wouldn&apos;t
          want to say it to someone you respect, please don&apos;t
          include it in your submission. Organisers hold the right to
          remove anything that may be thought to cause distress.
        </p>

        <a name="speaking" />
        <h2 tabIndex="0">Making speaking accessible</h2>
        <p tabIndex="0">
          We would like to encourage more people to speak and to
          encourage a diverse range of backgrounds, experiences and
          tech related roles to come and share their learnings at our
          event. There are a number of ways in which we are trying to
          make speaking more accessible:
        </p>
        <ul>
          <li tabIndex="0">
            <b>
              Offering mentors for speakers that are selected and
              request extra help.
            </b>
          </li>
          <p tabIndex="0">
            Speaking in front of a crowd of people isn&apos;t easy and
            we know it. There will be the option to highlight that you
            would like extra support, as a first-time speaker, or even
            just as someone who feels that they would benefit from it.
          </p>
          <p tabIndex="0">
            The East Midlands is lucky to host some amazing (and
            incredibly generous) international and experienced
            speakers. Some of these fine people are donating their
            time to any speakers that indicate they want extra
            support. This support covers ways to address nerves,
            timing a talk, structuring the content of a talk, making
            sure your talk aligns to its description and more.
          </p>
          <li tabIndex="0">
            <b>
              Arranging an optional workshop for all speakers to help
              them construct their talk.
            </b>
          </li>
          <p tabIndex="0">
            All selected speakers will be invited to an optional
            workshop before the event. This contains advise on
            subjects such as talk structure, presentation styles,
            designing your slides. This is made possible by our very
            kind Workshop Sponsor. More details will be described here
            closer to the event.
          </p>
        </ul>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section center-video {
            text-align: center;
          }
          .iframe-container {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%;
            margin: 10px 10px;
          }
          .iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }

          .picture {
            width: 200px;
            border-radius: 50%;
          }

          @media only screen and (max-width: 810px) {
            .picture {
              display: none;
            }
          }
        `}
      </style>
    </Layout>
  );
}
