import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import Image from 'next/image';

export default function EventActivities() {
  return (
    <Layout>
      <Head>
        <title>Event Activities</title>
      </Head>
      <Header
        title={'Event Activities'}
        banner="/static/banners/activities.jpg"
      />

      <section className="content-section" id="activities-intro">
        <a name="activities-intro" />
        <p tabIndex="0">
          Each year we kicked off the day with a keynote speaker to
          set the tone. Our keynote speakers in previous years have
          included{' '}
          <a
            href="../../pastconferences/pastspeakers/2019/dylan-beattie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dylan Beattie
          </a>{' '}
          and{' '}
          <a
            href="../../pastconferences/pastspeakers/2021/tania-allard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Tania Allard
          </a>{' '}
          .
        </p>
        <p tabIndex="0">
          Over the years we tried a variety of formats, including
          lightening talks, 30-minute talks, 45- minute talks and
          60-minute talks.
        </p>
        <p tabIndex="0">
          We hoped that offering a variety would not only encourage
          people to do their first talk, but also to further improve
          the diversity of the event.
        </p>
        <p tabIndex="0">
          The recorded talks from previous events can be viewed on our
          Youtube Channel:
          <a
            href="https://www.youtube.com/c/DDDEastMidlandsConference/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/c/DDDEastMidlandsConference/videos
          </a>
        </p>
      </section>

      <section className="content-section">
        <div>
          <Image
            className="pageimage"
            src="/static/info/exhibition.png"
            alt={`Image of part of the exhibition space at DDD East Midlands 2021`}
            height="100"
            width="200"
            layout="responsive"
          />
        </div>
      </section>

      <section className="content-section" id="exhibition-space">
        <a name="exhibition-space" />
        <h2 tabIndex="0">Exhibition Space</h2>
        <p tabIndex="0">
          The Exhibition Space had 6 stalls from the generous
          sponsors, a Hacktoberfest area, Coffee Stall from Cartwheel
          Coffee and a workshop space.
        </p>
        <p tabIndex="0">
          Our exhibitors had showcased their companies, products and
          employment opportunities in their own unique ways. These
          have included "why you should come to work and live in the
          East Midlands", a Mario Kart Competition, a giant game of
          jenga, an interactive "how far in have we zoomed?"
          competition, a sustainable toilet roll tower and much more…
        </p>
      </section>

      <section className="content-section" id="hacktoberfest">
        <a name="hacktoberfest" />
        <h2 tabIndex="0">Hacktoberfest</h2>
        <p tabIndex="0">
          Hacktoberfest is a coding initiative run by GitHub and
          Practical Dev. As DDD East Midlands was a community event it
          was important to us to include a space where attendees could
          contribute and try new things while being supported.
        </p>
        <p tabIndex="0">
          In this area we had a small activity that attendees could
          take part in.. There were a couple of great volunteers who
          helped anyone who had never submitted a pull request to a
          repository before. They helped the attendees sign up to
          GitHub, sign up to Hacktoberfest and open their first PR.
        </p>
      </section>

      <section className="content-section">
        <div>
          <Image
            className="pageimage"
            src="/static/info/hacktoberfest.png"
            alt={`Image of the three volunteers around the Hacktoberfest Stall`}
            height="100"
            width="200"
            layout="responsive"
          />
        </div>
      </section>

      <section className="content-section" id="coffee">
        <a name="cofeee" />
        <h2 tabIndex="0">Coffee and Catering</h2>
        <p tabIndex="0">
          Ok so not strictly an activity, but the coffee and food at
          our conferences was too good not to shout about it at every
          opportunity.
        </p>
        <p tabIndex="0">
          The event had a very popular coffee cart, where local
          brewers Cartwheel Coffee supplied the attendees, speakers
          and crew with some of the most delicious coffee you'll ever
          have the opportunity of having.
        </p>
        <p tabIndex="0">
          There were also snacks provided through the day and a fully
          catered lunch provided by the venues caterers. These weren't
          dried sandwiches and pastries, but cooked meals, salads and
          delicious deserts. We asked for attendee catering needs
          before the event to ensure that no matter peoples
          intolerancies or eating requirements; nobody would go
          hungry.
        </p>
      </section>
    </Layout>
  );
}
