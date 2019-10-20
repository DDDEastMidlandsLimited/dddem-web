import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import SponsorButton from '../../components/sponsorship/SponsorButton';

export default () => (
  <Layout>
    <Head>
      <title>Sponsor 2020</title>
    </Head>
    <Header title={'Sponsor 2020'} />

    <section id="when-and-where">
      <h1 tabIndex="0">When and Where?</h1>
      <a name="when" />
      <h2 tabIndex="0">When</h2>
      <p tabIndex="0">October 3rd 2020</p>
      <a name="where" />
      <h2 tabIndex="0">When</h2>
      <p tabIndex="0">
        The Nottingham Conference Center (same as this year)
      </p>
    </section>

    <section id="indicating-interest">
      <h1 tabIndex="0">Indicating Interest to Sponsor</h1>
      <a name="submitting-interest" />
      <h2 tabIndex="0">First come first served</h2>
      <p tabIndex="0">
        Please indicate your interest and we will get in touch. We
        will get in touch with companies in the order that they have
        submitted their interest.
      </p>
      <a name="submitting-interest" />
      <h2 tabIndex="0">We are changing the format for the better</h2>
      <p tabIndex="0">
        We are taking lessons from the first year and iterating. Part
        of this form is to help us do that. Let us know what benefits
        you are interested in, so that we can tailor our sponsorship
        pack to the majorities needs.
      </p>
      <br />
      <SponsorButton />
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
      `}
    </style>
  </Layout>
);
