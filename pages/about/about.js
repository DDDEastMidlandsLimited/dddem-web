import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import FullWidthImage from '../../components/FullWidthImage';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>About DDDEM</title>
    </Head>
    <Header title={'Information Pages'} />

    <article>
      <section id="about-the-conference">
        <div>
          <a
            tabIndex="0"
            href="/about/about-the-conference"
            title="Link to Speaker Information Page"
          >
            <div className="conference-button">
              <h2>Conference Information</h2>
            </div>
          </a>
        </div>
      </section>

      <section id="venue">
        <div>
          <a
            tabIndex="0"
            href="/about/venue"
            title="Link to Speaker Information Page"
          >
            <div className="venue-button">
              <h2>Venue Information</h2>
            </div>
          </a>
        </div>
      </section>

      <section id="tickets">
        <div>
          <a
            tabIndex="0"
            href="/about/ticket-information"
            title="Link to Ticket Information Page"
          >
            <div className="ticket-button">
              <h2>Ticket Information</h2>
            </div>
          </a>
        </div>
      </section>

      <section id="speaker-information">
        <div>
          <a
            tabIndex="0"
            href="/about/speaker-information"
            title="Link to Speaker Information Page"
          >
            <div className="speaker-button">
              <h2>Speaker Information</h2>
            </div>
          </a>
        </div>
      </section>
    </article>

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
          background-image: url('/static/banners/thencc.jpg');
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

        .ticket-button {
          background-image: url('/static/information/speakers.jpg');
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

        .speaker-button {
          background-image: url('/static/information/speakers.jpg');
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
