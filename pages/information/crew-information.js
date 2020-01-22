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
  PubConf,
} from '../../components/content';

export default () => (
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
          <a href="#setup-and-orienteering">Setup and orienteering</a>
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

    <section id="code-of-conduct">
      <h1>Code of Conduct</h1>
      <a name="code-of-conduct" />
      <h2>Please familiarise yourself with the Code of Conduct.</h2>
      <p>
        All involved in the DDD East Midlands Conference are subject
        to{' '}
        <a href="https://www.dddeastmidlands.com/code-of-conduct/">
          Code Of Conduct Page.
        </a>
        This is not just for the day of the event, but for all
        presence of DDD East Midlands including Social Media.
      </p>
      <p>
        Please make sure you are familiar with it and adhere to it at
        all times to create the most inclusive and friendly event for
        all involved.
      </p>
      <p>
        Should you have any concerns regarding the Code of Conduct
        before, during or after the event, please raise this in our
        shared crew slack (#code-of-conduct).
      </p>
    </section>

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
      <p>2nd October 2020 6:00pm - 8:00pm.</p>
      <h2>Morning shift</h2>
      <p>3rd October 2020 7:30am - 1:00pm.</p>
      <h2>Afternoon shift</h2>
      <p>3rd October 2020 1:00pm - 7:00pm.</p>
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
        If you can't make your shift/will be late please let the
        organisers know as soon as possible via the crew slack.
      </p>
    </section>

    <Transport />

    <Catering />

    <Wifi />

    <SocialMedia />

    <PubConf />

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
