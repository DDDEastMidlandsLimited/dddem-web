import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>About DDDEM</title>
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
            <div className="conference-button">
              <h2>DDD East Midlands Information</h2>
            </div>
          </a>
        </div>
      </section>

      <section id="venue">
        <div>
          <a
            tabIndex="0"
            href="/information/venue-information"
            title="Link to Venue Information Page"
          >
            <div className="venue-button">
              <h2>Venue Information</h2>
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
            <div className="accessibility-button">
              <h2>Accessibility Information</h2>
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
            <div className="apply-button">
              <h2>Applying To Speak Information</h2>
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
            <div className="ticket-button">
              <h2>Ticket Information</h2>
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
            <div className="attendee-button">
              <h2>Attendee Information</h2>
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
            <div className="speaker-button">
              <h2>Speaker Information</h2>
            </div>
          </a>
        </div>
      </section> */}

      <section id="crew-information">
        <div>
          <a
            tabIndex="0"
            href="/information/crew-information"
            title="Link to Crew Information Page"
          >
            <div className="crew-button">
              <h2>Crew Information</h2>
            </div>
          </a>
        </div>
      </section>

      <section id="sponsor-information">
        <div>
          <a
            tabIndex="0"
            href="/information/sponsor-information"
            title="Link to Sponsor Information Page"
          >
            <div className="sponsor-button">
              <h2>Sponsor Information</h2>
            </div>
          </a>
        </div>
      </section>
    </article>

    {/* Hacktoberfest Information */}

    {/* Exhibition Information*/}

    {/* PubConf Information */}

    <style jsx>
      {`
        .conference-button {
          background-image: url('/static/banners/home.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .conference-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .venue-button {
          background-image: url('/static/banners/information/thencc.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .venue-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .accessibility-button {
          background-image: url('/static/banners/information/accessibility.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .accessibility-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .apply-button {
          background-image: url('/static/banners/information/apply.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .apply-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .ticket-button {
          background-image: url('/static/banners/information/swagbag.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .ticket-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .attendee-button {
          background-image: url('/static/banners/information/attendee.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .attendee-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .speaker-button {
          background-image: url('/static/banners/information/speakers.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .speaker-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .crew-button {
          background-image: url('/static/banners/information/crew.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .crew-button h2 {
          color: white;
          background: ${theme.palette.dark};
          font-size: 24px;
          text-align: center;
          position: absolute;
          padding: 10px 10px;
        }

        .sponsor-button {
          background-image: url('/static/banners/information/sponsor.jpg');
          background-size: cover;
          width: 100%;
          height: 200px;
          background-position: center;
        }

        .sponsor-button h2 {
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

        section:hover {
          opacity: 0.4;
        }
      `}
    </style>
  </Layout>
);
