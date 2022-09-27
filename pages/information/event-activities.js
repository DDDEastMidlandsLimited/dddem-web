import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
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
<<<<<<< HEAD
        banner="/static/banners/sponsor.jpg"
=======
        banner="/static/banners/activities.jpg"
>>>>>>> main
      />

      <section id="activities-intro">
        <a name="activities-intro" />
        <p tabIndex="0">
          Each year we kick off the day with a keynote speaker to set
          the tone. Our keynote speakers in previous years have
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
          . Our 2023 keynote speaker will be announced soon…
        </p>
        <p tabIndex="0">
          Over the years we have tried a variety of formats, including
          lightening talks, 30-minute talks, 45- minute talks and
          60-minute talks.
        </p>
        <p tabIndex="0">
          Based on feedback from previous years, for the event in 2023
          there will be a mixture of 45-minute talks, 30-minute talks
          and lightning talks.
        </p>
        <p tabIndex="0">
          We hope that offering a variety like this will not only
          encourage people to do their first talk, but also to further
          improve the diversity of the event.
        </p>
        <p tabIndex="0">
          Some of the recorded talks from previous years can be viewed
          on our Youtube Channel:
          <a
            href="https://www.youtube.com/c/DDDEastMidlandsConference/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/c/DDDEastMidlandsConference/videos
          </a>
        </p>
      </section>

      <section>
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

      <section id="exhibition-space">
        <a name="exhibition-space" />
        <h2 tabIndex="0">Exhibition Space</h2>
        <p tabIndex="0">
          The Exhibition Space has 6 stalls from our generous
          sponsors, a Hacktoberfest area, Coffee Stall from Cartwheel
          Coffee and new for 2023: a workshop space.
        </p>
        <p tabIndex="0">
          In previous years our exhibitors have showcased their
          companies, products and employment opportunities in their
          own unique ways. These have included "why you should come to
          work and live in the East Midlands", a Mario Kart
          Competition, a giant game of jenga, an interactive "how far
          in have we zoomed?" competition, a sustainable toilet roll
          tower and much more…
        </p>
      </section>

      <section id="hacktoberfest">
        <a name="hacktoberfest" />
        <h2 tabIndex="0">Hacktoberfest</h2>
        <p tabIndex="0">
          Hacktoberfest is a coding initiative run by GitHub and
          Practical Dev. As DDD East Midlands is a community event
          it's important to us to include a space where attendees can
          contribute and try new things while being supported.
        </p>
        <p tabIndex="0">
          In this area we had a small activity that attendees could
          take part in, to add a selfie of themselves to page on the
          DDD East Midlands website. There were a couple of great
          volunteers who helped anyone who had never submitted a pull
          request to a repository before. They helped the attendees
          sign up to GitHub, sign up to Hacktoberfest and open their
          first PR.
        </p>
        <p tabIndex="0">
          Last year our Hacktoberfest sponsor was Microsoft, who along
          with providing PR support also engaged attendees in a Cloud
          Skills Challenge.
        </p>
      </section>

      <section>
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

      <section id="cloud-skills">
        <a name="cloud-skills" />
        <h2 tabIndex="0">Cloud Skills Challenge</h2>
        <p tabIndex="0">
          The fantastic team at Microsoft set up a Cloud Skills
          Challenge for any attendees of DDD East Midlands to take
          part in. The Cloud Skills challenge is a list of short
          Microsoft Learn modules that attendees were given access to
          before the conference. If they completed 5 short courses,
          they were entered into a prize draw.
        </p>
        <p tabIndex="0">
          Our hope is it not only exposed the attendees to some cool
          tech technologies available but also encouraged them to take
          part in work-relevant training they otherwise might not have
          done.
        </p>
        <p tabIndex="0">
          The prizes provided by Microsoft were top drawer, including
          Surface Pros, Headphones and Bit Boxes.
        </p>
      </section>

      <section id="coffee">
        <a name="cofeee" />
        <h2 tabIndex="0">Coffee and Catering</h2>
        <p tabIndex="0">
          Ok so not strictly an activity, but the coffee and food at
          our conferences is too good not to shout about it at every
          opportunity.
        </p>
        <p tabIndex="0">
          The event has a very popular coffee cart, where local
          brewers Cartwheel Coffee supply the attendees, speakers and
          crew with some of the most delicious coffee you'll ever have
          the opportunity of having.
        </p>
        <p tabIndex="0">
          There are also snacks provided through the day and a fully
          catered lunch provided by the venues caterers. These aren't
          dried sandwiches and patries, but cooked meals, salads and
          delicious deserts. We ask for attendee catering needs before
          the event to ensure that no matter peoples intolerancies or
          eating requirements; nobody will go hungry.
        </p>
      </section>

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

          .picture {
            width: 150px;
            border-radius: 50%;
          }

          .smallpageimage {
            max-width: 100%;
            height: 95%;
            padding: 5px 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
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
