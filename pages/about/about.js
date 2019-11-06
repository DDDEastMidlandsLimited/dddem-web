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

    <section>
      <div class=" overlay-image _9p ">
        <a
          tabIndex="0"
          href="/about/speaker-information"
          target="_blank"
          title="Link to Speaker Information Page"
        >
          <img
            class=" image _9q "
            src="/static/information/speakers.jpg"
            alt="Alt text"
          />
          <div class=" text _2 ">Image + text NO HOVER</div>
        </a>
      </div>
    </section>

    <style jsx>
      {`
      .overlay-image {
        position: relative;
        width: 100%;
       }
       /* Original image */
       .overlay-image .image {
        display: block;
        width: 100%;
        height: auto;
       }
       /* Original text overlay */
       .overlay-image .text {
        color: #fff;
        font-size: 30px;
        line-height: 1.5em;
        text-shadow: 2px 2px 2px #000;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
       }
        .container {
          position: relative;
        }

        /* Bottom right text */
        .text-block {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: black;
          color: white;
          padding-left: 20px;
          padding-right: 20px;
        }

        img {
          height: 200px;
          width 100%;
          text-align:center;
          overflow: hidden;
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
