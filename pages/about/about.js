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

    <section id="about-the-conference">
      <div>
        <a
          tabIndex="0"
          href="/about/about-the-conference"
          title="Link to Speaker Information Page"
        >
          <img src="/static/banners/home.jpg" alt="Alt text" />
          <div className="text">Conference Information</div>
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
          <img src="/static/banners/thencc.jpg" alt="Alt text" />
          <div className="text">Venue Information</div>
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
          <img
            src="/static/information/speakers.jpg"
            alt="Alt text"
          />
          <div className="text">Ticket Information</div>
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
          <img
            src="/static/information/speakers.jpg"
            alt="Alt text"
          />
          <div className="text">Speaker Information</div>
        </a>
      </div>
    </section>

    <style jsx>
      {`
        img {
          height: 200px;
          width 100%;
          object-fit: cover;
          object-position: center;
          overflow: hidden;
        }

        .text {
          color: white;
          margin-top: -100px;
          background: ${theme.palette.dark};
          font-size: 24px;
          position: absolute;
          padding: 5px 5px;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
        }

        section {
          max-width: ${theme.sizes.maxContentWidth};
          padding: ${theme.sizes.contentPadding};
          margin: auto;
        }
       
      `}
    </style>
  </Layout>
);
