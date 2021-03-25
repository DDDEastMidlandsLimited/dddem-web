import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default function MainPage() {
  return (
    <Layout>
      <Head>
        <title>Information Pages</title>
      </Head>
      <Header
        title={'Information Pages'}
        banner="/static/banners/information/header.jpg"
      />

      <article>
        <section id="about-the-conference">
          <div>
            <a
              tabIndex="0"
              href="/information/conference-information"
              title="Link to Conference Information Page"
            >
              <div className="conference-button image-button">
                <h2>About DDD East Midlands</h2>
              </div>
            </a>
          </div>
        </section>

        {/*       <section id="sponsor-information">
        <div>
          <a
            tabIndex="0"
            href="/information/sponsor-information"
            title="Link to Sponsor Information Page"
          >
            <div className="sponsor-button image-button">
              <h2>Sponsor Information</h2>
            </div>
          </a>
        </div>
      </section>
 */}
        <section id="venue">
          <div>
            <a
              tabIndex="0"
              href="/information/venue-information"
              title="Link to Venue Information Page"
            >
              <div className="venue-button image-button">
                <h2>Venue</h2>
              </div>
            </a>
          </div>
        </section>

        <section id="accessibility-information">
          <div>
            <a
              tabIndex="0"
              href="/information/accessibility-information"
              title="Link to Accessibility Information Page"
            >
              <div className="accessibility-button image-button">
                <h2>Accessibility</h2>
              </div>
            </a>
          </div>
        </section>

        <section id="apply-to-speak">
          <div>
            <a
              tabIndex="0"
              href="/information/application-information"
              title="Link to Information About Applying To Speak"
            >
              <div className="apply-button image-button">
                <h2>Applying To Speak</h2>
              </div>
            </a>
          </div>
        </section>

        <section id="tickets">
          <div>
            <a
              tabIndex="0"
              href="/information/ticket-information"
              title="Link to Ticket Information Page"
            >
              <div className="ticket-button image-button">
                <h2>Tickets</h2>
              </div>
            </a>
          </div>
        </section>

        <section id="attendee-information">
          <div>
            <a
              tabIndex="0"
              href="/information/attendee-information"
              title="Link to Attendee Information Page"
            >
              <div className="attendee-button image-button">
                <h2>Attending</h2>
              </div>
            </a>
          </div>
        </section>

        {/*       <section id="speaker-information">
        <div>
          <a
            tabIndex="0"
            href="/information/speaker-information"
            title="Link to Speaker Information Page"
          >
            <div className="speaker-button image-button">
              <h2>Speaker Information</h2>
            </div>
          </a>
        </div>
      </section> */}

        {/*       <section id="crew-information">
        <div>
          <a
            tabIndex="0"
            href="/information/crew-information"
            title="Link to Crew Information Page"
          >
            <div className="crew-button image-button">
              <h2>Crew Information</h2>
            </div>
          </a>
        </div>
      </section> */}

        {/*      <section id="hacktober-information">
         <div>
          <a
            tabIndex="0"
            href="/information/hacktoberfest-information"
            title="Link to Hacktoberfest Information Page"
          >
            <div className="hacktober-button image-button">
              <h2>Hacktoberfest Information</h2>
            </div>
          </a>
        </div>
      </section> */}

        {/* Exhibition Information*/}

        {/* PubConf Information */}
      </article>

      <style jsx>
        {`
          .conference-button {
            background-image: url('/static/banners/home.jpg');
          }

          .venue-button {
            background-image: url('/static/banners/information/thencc.jpg');
          }

          .accessibility-button {
            background-image: url('/static/banners/information/accessibility.jpg');
          }

          .apply-button {
            background-image: url('/static/banners/information/apply.jpg');
          }

          .ticket-button {
            background-image: url('/static/banners/information/swagbag.jpg');
          }

          .attendee-button {
            background-image: url('/static/banners/information/attendee.jpg');
          }

          .speaker-button {
            background-image: url('/static/banners/information/speakers.jpg');
          }

          .crew-button {
            background-image: url('/static/banners/information/crew.jpg');
          }

          .sponsor-button {
            background-image: url('/static/banners/information/sponsor.jpg');
          }

          .hacktober-button {
            background-image: url('/static/banners/information/hacktober.jpg');
          }

          .image-button {
            background-size: cover;
            width: 100%;
            height: 200px;
            background-position: center;
          }

          .image-button h2 {
            color: white;
            background: ${theme.palette.dark};
            font-size: 24px;
            text-align: center;
            position: absolute;
            padding: 10px 10px;
          }

          article {
            -webkit-columns: 2 400px;
            -moz-columns: 2 400px;
            columns: 2 400px;
            margin-left: 10%;
            margin-right: 10%;
          }

          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }

          div:hover {
            opacity: 0.4;
          }

          @media (max-width: ${theme.sizes.maxContentWidth}) {
            .image-button h2 {
              width: 60%;
              font-size: 20px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
