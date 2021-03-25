import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import {
  CodeOfConduct,
  Introduction,
  Transport,
  Catering,
  SocialMedia,
  Wifi,
  //PubConf,
} from '../../components/content';

export default function CrewInformation() {
  return (
    <Layout>
      <Head>
        <title>Crew Information</title>
      </Head>
      <Header
        title={'Crew Information'}
        banner="/static/banners/information/crew.jpg"
      />

      <section name="Contents">
        <h1>Contents</h1>

        <p>
          <strong>
            <a href="#introduction">Introduction</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#code-of-conduct">Code of Conduct</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#when-and-where">When and Where?</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#absence">Absence</a>
          </strong>
        </p>
        <p>
          <strong>Duties</strong>
        </p>
        <ul>
          <li>
            <a href="#code-of-conduct-duty">Code of conduct</a>
          </li>
          <li>
            <a href="#setup-and-orienteering">
              Setup and orienteering
            </a>
          </li>
          <li>
            <a href="#registration">Registration</a>
          </li>
          <li>
            <a href="#standby">Standby</a>
          </li>
          <li>
            <a href="#info-desk">Information desk</a>
          </li>
          <li>
            <a href="#exhibition-floors">Exhibition Floors</a>
          </li>
          <li>
            <a href="#speaker-room">Speaker Room</a>
          </li>
          <li>
            <a href="#packing-up">Packing up</a>
          </li>
        </ul>
        <p>
          <strong>Transport</strong>
        </p>
        <ul>
          <li>
            <a href="#train">Taking the train</a>
          </li>
          <li>
            <a href="#driving">Driving</a>
          </li>
        </ul>
        <p>
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
        <p>
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

      <Introduction />

      <CodeOfConduct />

      <section id="where-and-when">
        <a name="when-and-where" />
        <h1>When and Where?</h1>
        <h2>When</h2>
        <p>
          You will be organised into shifts that cover half the day.
          Morning shift comprised registration through to the start of
          lunch. Afternoon shift covers lunch through to helping tear
          down.
        </p>
        <h2>Setup and orienteering</h2>
        <p>1st October 2021 6:00pm - 8:00pm.</p>
        <h2>Morning shift</h2>
        <p>2nd October 2021 7:30am - 1:00pm.</p>
        <h2>Afternoon shift</h2>
        <p>2nd October 2021 1:00pm - 7:00pm.</p>
        <h2>Where</h2>
        <p>
          <a href="http://www.nottinghamconferencecentre.co.uk/">
            The Nottingham Conference Centre
          </a>
        </p>
      </section>

      <section id="absence">
        <a name="absence" />
        <h1>Absence</h1>
        <p>
          If you can&apos;t make your shift/will be late please let
          the organisers know as soon as possible via the crew slack.
        </p>
      </section>

      <Transport />

      <Catering />

      <Wifi />

      <SocialMedia />

      {/* <PubConf /> */}

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
