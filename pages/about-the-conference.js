import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ConferenceInformation() {
  return (
    <Layout>
      <Head>
        <title>About DDD East Midlands</title>
      </Head>
      <Header
        title={'About DDDEM'}
        banner="/static/banners/about.jpg"
      />
      <section className="content-section" name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p>
          <strong>
            <a href="#about">What Is DDD East Midlands?</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#ddd">What does the DDD stand for?</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#principles">The Conference Principles</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#ddd-principles">DDD Principles</a>
          </li>
          <li>
            <a href="#our-principles">Our Principles</a>
          </li>
        </ul>
        <p>
          <strong>
            <a href="#organisers">The Organisation Committee</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#event-crew">The Event Crew</a>
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

      <section className="content-section" id="about">
        <a name="about" />
        <h1 tabIndex="0">What Is DDD East Midlands?</h1>
        <p tabIndex="0">A Conference Celebrating the East Midlands</p>
        <p tabIndex="0">
          The East Midlands tech scene is incredibly diverse - it is
          the perfect blend of professional corporates, innovative
          independents, and well-funded start ups. This unique and
          perfect mix of traditional and contemporary is reflected in
          the DDD East Midlands Conference. We are part of the
          multi-national DDD conference community, but with a focus on
          promoting the talent, companies and the amazing tech
          community that the East Midlands has to offer.
        </p>
        <ul>
          <li tabIndex="0">
            We want to promote inclusivity, support and camaraderie.
          </li>
          <li tabIndex="0">
            We want to encourage members of the local tech community
            to do a talk
          </li>
          <li tabIndex="0">
            Hosted in a beautiful, modern building, which is one of
            the largest educational buildings in Nottingham City
            Centre.
          </li>
          <li tabIndex="0">
            Talks submitted anonymously and voted on by attendees.
          </li>
          <li tabIndex="0">
            A keynote and a range of talks split into 3 tracks.
          </li>
        </ul>
      </section>

      <section className="content-section" id="ddd">
        <a name="ddd" />
        <h1 tabIndex="0">What does the DDD stand for?</h1>
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

      <section className="content-section" id="principles">
        <a name="principles" />
        <h1 tabIndex="0">The Conference Principles</h1>
        <a name="ddd-principles" />
        <h2 tabIndex="0">The event follows these DDD Principles:</h2>
        <ul>
          <li tabIndex="0">
            The event is hosted on a Saturday so that attendees do not
            have to take time from work.
          </li>
          <li tabIndex="0">Tickets to attend the event are free.</li>
        </ul>
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

      <section className="content-section" id="organisers">
        <a name="organisers" />
        <h1 tabIndex="0">The Organisation Committee</h1>
        <p tabIndex="0">
          The very first DDD East Midlands was organised by Moreton
          and Jessica. Since then we have grown to have an
          organisation committee. Rachel joined us to help organise
          the 2021 event, and now we have a full roster of organisers
          for 2023 including Steven, James and Mia.
        </p>
      </section>

      <section className="content-section volunteer-grid">
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../organisers/jessica-white"
            title="Link to Information About Jessica"
          >
            <Image
              src="/static/organisers/jess.png"
              alt="Picture of Jessica White"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../organisers/moreton-brockley"
            title="Link to Information About Moreton"
          >
            <Image
              src="/static/organisers/mort.png"
              alt="Picture of Moreton Brockley"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../organisers/rachel-watson"
            title="Link to Information About Rachel"
          >
            <Image
              src="/static/organisers/rachel.png"
              alt="Picture of Rachel Watson"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../organisers/mia-gordon"
            title="Link to Information About Mia"
          >
            <Image
              src="/static/organisers/mia.png"
              alt="Picture of Mia"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../organisers/steven-pears"
            title="Link to Information About Steve"
          >
            <Image
              src="/static/organisers/steven.png"
              alt="Picture of Steven"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../organisers/james-hayward"
            title="Link to Information About James"
          >
            <Image
              src="/static/organisers/james.png"
              alt="Picture of James"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </a>
        </article>
      </section>

      <section className="content-section">
        <p tabIndex="0">
          Give them a follow on Twitter, say hi at the local events,
          offer them a coffee or some chocolate if they look in need.
          They will both be running around on the day of the event
          making sure your experience of it is the best they can
          possibly make it.
        </p>
      </section>

      <section className="content-section" id="event-crew">
        <a name="event-crew" />
        <h1 tabIndex="0">The Event Crew</h1>
        <p tabIndex="0">
          We could not run the event without the support our fantastic
          event crew. They help with set-up, with looking after
          attendees and speakers during the day and cleaning up after
          the event.
        </p>
        <div className="center-image">
          <Image
            className="crew-image"
            src="/static/info/crew.jpg"
            alt="Picture of the volunteers from the 2021 event"
            height={100}
            width={200}
            layout="responsive"
          />
        </div>
        <br />
      </section>

      <section className="content-section" id="inclusivity">
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
          <Link href="/code-of-conduct/">Code of Conduct</Link>. We
          want all attendees to feel comfortable at the event, so ask
          that no submissions or talks contain content of a graphic,
          violent or sexual nature or contain any language that may be
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
    </Layout>
  );
}
