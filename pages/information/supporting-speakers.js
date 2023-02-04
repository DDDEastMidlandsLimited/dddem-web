import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';

export default function SupportingSpeakers() {
  return (
    <Layout>
      <Head>
        <title>Supporting Speakers</title>
      </Head>
      <Header
        title={'Supporting Speakers'}
        banner="/static/banners/support.jpg"
      />

      <section className="content-section" id="supporting-speakers">
        <a name="speakers" />
        <p tabIndex="0">
          DDD East Midlands will continue to make efforts for the
          event to be a positive and supportive experience for
          speakers.
        </p>
        <ul>
          <li tabIndex="0">
            Talks at local meetups on writing talk proposals and
            biographies.
          </li>
          <li tabIndex="0">Speakers Workshop.</li>
          <li tabIndex="0">Mentorship.</li>
        </ul>
        <p tabIndex="0">
          From the organisers doing talks at local meetups on how to
          submit a good CFP through to a mentorship scheme for
          successful applicants before the event. The aim is to
          promote a variety of local speakers to submit, from the very
          experienced to the inexperienced, while guaranteeing
          high-quality talks.
        </p>
      </section>

      <section className="content-section" id="call-for-papers">
        <a name="call-for-papers" />
        <h2 tabIndex="0">
          Talks at local meetups on how to write a high-quality CFP
        </h2>
        <p tabIndex="0">
          As active members of the local tech community, the
          organisers of DDD East Midlands want to make submitting to
          the event as accessible to as many people as possible,
          offering their own support and time to realise this.
        </p>
        <p tabIndex="0">
          In previous years our organisers have toured around local
          meetups and universities giving guidance on what a good
          submission to speak should look like, and how to write one
          with your own personal style.
        </p>
        <p tabIndex="0">
          Due to covid, this wasn't something that was possible for
          our 2021 event, however now meet-ups are starting to come
          back in-person, this is something we hope to revive for
          2023, where relevant.
        </p>
        <p tabIndex="0">
          There are some blog posts around the content here:{' '}
          <a
            tabIndex="0"
            href="https://blog.dddeastmidlands.com/category/how-to-talk/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blog.dddeastmidlands.com/category/how-to-talk/index.html{' '}
          </a>
        </p>
      </section>

      <section className="content-section" id="speakers-workshop">
        <a name="speakers-workshop" />
        <h2 tabIndex="0">Speakers Workshop</h2>
        <p tabIndex="0">
          As in previous years, all speakers will be invited to attend
          a workshop ahead of time, on how to structure and present a
          talk as part of our mentorship scheme for first-time
          speakers.
        </p>
        <p tabIndex="0">
          Encouraging people to do their very first talk is something
          we continue to be passionate about, so speakers can indicate
          if they are first-time speakers and/or want additional
          support.
        </p>
        <p tabIndex="0">
          We have some great mentors from the local community who are
          international speakers. They will help refine talk content
          and slides, as well as give feedback on how to improve the
          mentees presentation style.
        </p>
        <p tabIndex="0">
          This workshop is run by Dylan Beattie and you can read about
          our 2019 workshop here:{' '}
          <a
            tabIndex="0"
            href="https://blog.dddeastmidlands.com/blog/recappin-post/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blog.dddeastmidlands.com/blog/recappin-post/
          </a>
        </p>
      </section>
    </Layout>
  );
}
