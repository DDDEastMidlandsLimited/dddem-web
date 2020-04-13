import Layout from '../components/Layout';
import theme from '../theme/theme';
import Header from '../components/Header';
import Head from 'next/head';
import Talks from '../components/talks/Talks';

export default () => (
  <Layout>
    <Head>
      <title>Talks</title>
    </Head>
    <Header
      title={'Talks'}
      banner="
    /static/banners/talks.jpg"
    />

    <section>
      <h2>
        We advise using this page on desktop for a good experience.
      </h2>
      <h3>Filtering</h3>
      <ul>
        <li>
          To filter talks down select a <strong>level</strong> or{' '}
          <strong>tag</strong>.
        </li>
        <li>
          Tags are <strong>inclusive</strong>. If a talk contains all
          the tags selected, it will be displayed. If it does not
          contain one or more of the tags selected, it will not be
          displayed.
        </li>
      </ul>
      <h3>Voting</h3>
      <ul>
        <li>
          If you are attending you will be emailed a link to your
          Eventbrite registered email. This link leads to a google
          form with all the titles that have been submitted.
        </li>
        <li>
          You can vote for up to 10 talks you would like to see.
        </li>
        <li>
          We advise reading the decriptions of talks, taking note of
          the titles you want to see, then using Control+F or
          Command+F searching for those titles on the google form.{' '}
        </li>
      </ul>
      <br />
      <hr />
    </section>

    <section>
      <Talks />
    </section>

    <style jsx>
      {`
        section {
          max-width: ${theme.sizes.maxContentWidth};
          padding: ${theme.sizes.contentPadding};
          margin: auto;
        }
        section h2 {
          text-align: center;
          padding-bottom: 15px;
        }
      `}
    </style>
  </Layout>
);
