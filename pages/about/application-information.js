import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>Application Information</title>
    </Head>
    <Header title={'Application Information'} />

    <section name="Contents">
      <h1 tabIndex="0">Contents</h1>

      <p tabIndex="0">
        <strong>Applying to Speak</strong>
      </p>
      <ul>
        <li>
          <a href="#applicationdate">When can I apply to talk?</a>
        </li>
        <li>
          <a href="#applicationhow">How do I apply to talk?</a>
        </li>
        <li>
          <a href="#tande">
            Are travel and accomodation expenses provided for
            speakers?
          </a>
        </li>
      </ul>
    </section>

    <section id="title">
      <h1 tabIndex="0">Applying to Speak</h1>
    </section>

    <section id="date">
      <a name="applicationdate" />
      <h2 tabIndex="0">When can I apply to talk?</h2>
      <p tabIndex="0">
        Applications to speak at the 2019 event have closed. 2020
        applications open early next year.
      </p>
    </section>

    <section id="how">
      <a name="applicationhow" />
      <h2 tabIndex="0">How do I apply to talk?</h2>
      <p tabIndex="0">
        When applications are open{' '}
        <a
          href="https://sessionize.com/dddeastmidlands/"
          target="_blank"
        >
          {' '}
          you can submit your talk through Sessionize.
        </a>
      </p>
      <p>
        <a
          href="https://blog.dddeastmidlands.com/2019/02/18/sessionize-post.html"
          target="_blank"
        >
          See here for how to use Sessionize to apply for a talk.
        </a>
      </p>
    </section>

    <section id="tande">
      <a name="tande" />
      <h2 tabIndex="0">
        Are travel and accomodation expenses provided for speakers?
      </h2>
      <p tabIndex="0">
        As we want to encourage local speakers and keep our costs low,
        we cannot provide expenses (i.e. travel and accomodation
        costs) to speakers.
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
      `}
    </style>
  </Layout>
);
