import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import CovidPrecautions from '../../components/content/CovidPrecautions';
import {
  CodeOfConduct,
  Transport,
  Catering,
  Wifi,
  SocialMedia,
} from '../../components/content';

export default function AttendeeInformation() {
  return (
    <Layout>
      <Head>
        <title>Attendee Information</title>
      </Head>
      <Header
        title={'Attendee Information'}
        banner="/static/banners/attendee.jpg"
      />

      <section name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p>
          <strong>
            <a href="#covid-precautions">Covid Precautions</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#code-of-conduct">Code of Conduct</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#age">Age Restrictions</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#accessibility">Accessibility Concerns</a>
          </strong>
        </p>

        <p tabIndex="0">
          <strong>
            <a href="#tickets">Tickets</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#using-tickets">Using Tickets</a>
          </li>
          <li>
            <a href="#returning-tickets">Returning Tickets</a>
          </li>
          <li>
            <a href="#waiting-list">Waiting List</a>
          </li>
        </ul>
        <p tabIndex="0">
          <strong>
            <a href="#before-the-day">Before The Day</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#pat-before">PAT Testing</a>
          </li>
        </ul>
        <p tabIndex="0">
          <strong>Transport On The Day</strong>
        </p>
        <ul>
          <li>
            <a href="#train">Taking the train</a>
          </li>
          <li>
            <a href="#driving">Driving</a>
          </li>
        </ul>
        <p tabIndex="0">
          <strong>
            <a href="#registration">Coming To The Event</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#coffee-meet">Coffee Meet</a>
          </li>
          <li>
            <a href="#registration">Registration</a>
          </li>
        </ul>
        <p tabIndex="0">
          <strong>Catering</strong>
        </p>
        <ul>
          <li>
            <a href="#food">Food and Dietary Requirements</a>
          </li>
          <li>
            <a href="#drink">Alcohol</a>
          </li>
          <li>
            <a href="#coffee">Coffee</a>
          </li>
        </ul>
        <p>
          <strong>
            <a href="#wifi">Wifi</a>
          </strong>
        </p>
        <p tabIndex="0">
          <strong>Social Media and Photos</strong>
        </p>
        <ul>
          <li>
            <a href="#photographs">Photographs</a>
          </li>
          <li>
            <a href="#social-media">Social Media Posts</a>
          </li>
        </ul>
      </section>

      <CovidPrecautions />

      <CodeOfConduct />

      <section id="age-restrictions">
        <a name="age" />
        <h1 tabIndex="0">Age Restrictions</h1>
        <p tabIndex="0">
          For insurance reasons, only people over the age of 18 can
          attend DDD East Midlands. We would love to bring this age
          limit down in the future, but for the first event, we want
          to keep some of the cost and organisational overhead
          relatively low.
        </p>
      </section>

      <section id="accessibility">
        <a name="accessibility" />
        <h1 tabIndex="0">Accessibility Concerns</h1>
        <p tabIndex="0">
          We have attempted to answer a number of questions around
          accessibility concerns{' '}
          <a
            href="/information/accessibility-information"
            target="_blank"
          >
            see the accessibility page for more information.
          </a>
        </p>
      </section>

      <section id="tickets">
        <a name="tickets" />
        <h1 tabIndex="0">Tickets</h1>
        <a name="using-tickets" />
        <h2 tabIndex="0">Using Tickets</h2>
        <p tabIndex="0">
          We are using Eventbrite for our ticketing. Registration will
          open from 8am. On entrance one of the crew of volunteers
          will ask to scan your QR code.
        </p>

        <a name="returning-tickets" />
        <h2 tabIndex="0">Returning Tickets</h2>
        <p tabIndex="0">
          If for any reason you are no longer able to attend the
          conference, please return your ticket so that someone else
          can claim the place. We do pay per person, so this will have
          an impact on us if you can no longer attend but don&apos;t
          return the ticket.
        </p>

        <a name="waiting-list" />
        <h2 tabIndex="0">Waiting List</h2>
        <p tabIndex="0">
          The tickets for this event sold out within a day for both
          releases. If you were not lucky enough to get a ticket,
          please
          <a href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058">
            sign up to the waitlist here
          </a>
          . If a ticket becomes available, and you are next on the
          waitlist you will recieve an email and given 24 hours to
          claim your ticket.
        </p>
      </section>

      <section id="before-the-day">
        <a name="before-the-day" />
        <h1 tabIndex="0">Before The Day</h1>
        <a name="pat-before" />
        <h2 tabIndex="0">PAT Testing</h2>
        <p tabIndex="0">
          <strong>
            This point is particularly important if you are taking
            part in our "Hacktober Corner".
          </strong>
        </p>
        <p tabIndex="0">
          Any devices that will be plugged in during the day need to
          be PAT tested. They need to have a valid visible sticker on
          them or a certificate present. Where possible, please try to
          get your devices PAT tested before the day. This includes
          any laptop chargers.
        </p>
        <p tabIndex="0">
          There will be a limited amount of PAT testing available on
          the day. First priority will go to speakers and then to
          exhibitors.
        </p>
      </section>

      <Transport />

      <section id="registration">
        <a name="registration" />
        <h1 tabIndex="0">Coming To The Event</h1>
        <a name="coffee-meet" />
        <h2 tabIndex="0">Coffee Meet</h2>
        <p tabIndex="0">
          We know that it isn&apos;t always easy to walk into an event
          alone. One of our volunteers will be at the Costa near the
          venue to meet those who want to come to the conference with
          company. They will be heading off from Costa at 8.30 to walk
          to the venue and get you all signed in.
        </p>

        <a name="registration" />
        <h2 tabIndex="0">Registration</h2>
        <p tabIndex="0">
          Registration opens at 8.00am with the opening ceremony
          starting at 9.00am. You will need your Eventbrite ticket as
          volunteers will be scanning the QR code.
        </p>
        <p tabIndex="0">
          Once you have been scanned in you will be given a lanyard
          (the colour of which is based on whether you are happy
          having your photo taken or not) and asked to fill in the
          information on the front (Name, Pronoun).
        </p>
      </section>

      <Catering />

      <Wifi />

      <SocialMedia />

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section div {
            padding-bottom: 10px;
          }

          .green {
            color: green;
          }

          .yellow {
            color: orange;
          }

          .red {
            color: red;
          }

          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            text-align: center;
          }

          tr th {
            background-color: #dddddd;
          }
        `}
      </style>
    </Layout>
  );
}
