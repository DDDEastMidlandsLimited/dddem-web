import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default function ApplicationInformation() {
  return (
    <Layout>
      <Head>
        <title>Application Information</title>
      </Head>
      <Header
        title={'Application Information'}
        banner="/static/banners/information/attendee.jpg"
      />

      <section name="Contents">
        <h1 tabIndex="0">Contents</h1>

        <p tabIndex="0">
          <strong>
            Frequently asked questions about submission.
          </strong>
        </p>
        <ul>
          <li>
            <a href="#cfp"> What is a CFP?</a>
          </li>
          <li>
            <a href="#applicationopen">When does the CFP Open?</a>
          </li>
          <li>
            <a href="#applicationclose">When does the CFP Close?</a>
          </li>
          <li>
            <a href="#applicationhow">How do I submit a talk?</a>
          </li>
          <li>
            <a href="#talklength">
              What are the options for talk length?
            </a>
          </li>
          <li>
            <a href="#cospeaker">Can I present with a co-speaker?</a>
          </li>
          <li>
            <a href="#multiple">Can I submit more than one talk?</a>
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
        <h1 tabIndex="0">
          Frequently asked questions about submission.
        </h1>
      </section>

      <section id="cfp">
        <a name="cfp" />
        <h2 tabIndex="0"> What is a CFP?</h2>
        <p tabIndex="0">
          CFP stands for Call for Papers. It&apos;s also known as Call
          For Speakers. It is the request for people to submit their
          talk ideas.
        </p>
      </section>

      <section id="applicationopen">
        <a name="applicationopen" />
        <h2 tabIndex="0">When does the CFP Open?</h2>
        <p tabIndex="0">2nd April 2021</p>
      </section>

      <section id="applicationclose">
        <a name="applicationclose" />
        <h2 tabIndex="0">When does the CFP Close?</h2>
        <p tabIndex="0">30th April 2021.</p>
      </section>

      <section id="applicationhow">
        <a name="applicationhow" />
        <h2 tabIndex="0">How do I apply to talk?</h2>
        <p tabIndex="0">
          We use{' '}
          <a
            href="https://sessionize.com/ddd-east-midlands-conference-2021/"
            target="_blank"
            rel="noreferrer"
          >
            Sessionise
          </a>{' '}
          for all talk submission and organisation. We will write a
          blog again this year on how to fill in this form.
        </p>
        <p tabIndex="0">
          The talks are voted on by attendees through anonymous
          popularity vote. Only talk titles and descriptions will be
          displayed on a page which can be filtered by tag. Attendees
          will vote on what they want to see and the most popular
          talks will be selected. We ask you do not include any
          identifiable information in your titles and talks
          descriptions, and that you don&apos;t share the titles of
          your submissions on social media to help keep this fair.
          More can be read about this process{' '}
          <a
            href="https://blog.dddeastmidlands.com/2019/12/07/submission-process.html"
            target="_blank"
            rel="noreferrer"
          >
            in this blog post
          </a>
          .
        </p>
        <p tabIndex="0">
          We also ask that you ensure all submissions abide to our{' '}
          <a
            href="https://www.dddeastmidlands.com/code-of-conduct"
            target="_blank"
            rel="noreferrer"
          >
            Code of Conduct.
          </a>
        </p>
      </section>

      <section id="talklength">
        <a name="talklength" />
        <h2 tabIndex="0">What are the options for talk length?</h2>
        <p tabIndex="0">
          Last year we only had the option to submit for hour long
          talks. We received feedback that this was intimidating to
          some people who otherwise would have submitted to the event.
        </p>
        <p tabIndex="0">
          This year you can submit for:
          <ul>
            <li>
              60 minute talks (ideally 45 minutes + time for Q and A)
            </li>
            <li>
              30 minute talks (ideally 20 minutes + time for Q and A)
            </li>
            <li>15 minute length talks. </li>
          </ul>
        </p>
      </section>

      <section id="cospeaker">
        <a name="cospeaker" />
        <h2 tabIndex="0">Can I present with a co-speaker?</h2>
        <p tabIndex="0">Yes you can!</p>
      </section>

      <section id="multiple">
        <a name="multiple" />
        <h2 tabIndex="0">Can I submit more than one talk?</h2>
        <p tabIndex="0">
          One speaker can submit multiple talks, but if more than one
          talk gets into the top selected, only the most popular will
          be picked for presentation. We are limiting talks to one per
          speaker on the day.
        </p>
        <p tabIndex="0">
          There is the option to submit with a co-speaker as well.
        </p>
      </section>

      <section id="tande">
        <a name="tande" />
        <h2 tabIndex="0">
          Are travel and accomodation expenses provided for speakers?
        </h2>
        <p tabIndex="0">
          As we want to encourage local speakers and keep our costs
          low, we cannot provide expenses (i.e. travel and
          accomodation costs) to speakers.
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
}
