import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import PastSpeakersButton from '../../../../components/speakers/PastSpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function MattWhetton() {
  return (
    <Layout>
      <Head>
        <title>Matt Whetton</title>
      </Head>
      <Header
        title={'Matt Whetton'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Matt_W.jpg"
            alt="Picture of Matt Whetton"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">We need to talk about technical debt</h2>
        <p tabIndex="0">
          Technical debt is a popular metaphor used in most delivery
          teams. It’s a powerful way to describe complicated problems,
          convey the importance of building things right, and
          describes the cumulative effect of taking shortcuts. As
          engineers we all appreciate why preventing and paying down
          technical debt is important, but its often not something
          ‘the business’ really appreciates or seemingly cares about.
        </p>
        <p tabIndex="0">
          More and more we see the backlog sliced in 2 different
          sections, the first being the business value adding work,
          the second being the technical debt work. This is also
          accompanied with some kind of rule that says ‘we can spend
          10% of our time on technical debt’. It always feels like
          technical debt is just ‘something the devs go on about’, and
          not something that adds business value.
        </p>
        <p tabIndex="0">
          This talk is to try to convince you to think about technical
          debt differently and eliminate it from your backlogs. To do
          this we’ll have to explore what ends up in the technical
          debt bucket, why its such a problem and what we can do about
          it. We’ll also talk about risk, the part it has to play and
          how it should be your best friend when managing complicated
          problem domains and systems. My goal is make risk exciting,
          useful and fundamental in what we do….which may sound crazy,
          but just stick with me!
        </p>
        <p tabIndex="0">
          Technical debt shouldn’t be something just the dev’s care
          about, its something everyone should care about.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Matt</h2>
        <p tabIndex="0">
          <b>Chief Technology Officer at Oakbrook Finance</b>
        </p>
        <p tabIndex="0">
          Matt is the Chief Technology Officer at Oakbrook Finance but
          is ultimately an engineer at heart. Having worked in a
          variety of engineering roles, across a variety industries,
          he has spent the last 10 years or so working in the
          financial service industry.
        </p>
        <p tabIndex="0">
          You will find Matt talking, writing or just generally
          rambling about those subjects he’s most passionate about
          such as innovation culture, the craft of engineering,
          breaking down the control barriers around engineers and
          unleashing engineer creativity. He might also talk about
          comics now and again too!
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wo_CzsGgQVs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="center-link">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Matt: Youtube of Talk"
            href="https://youtu.be/wo_CzsGgQVs"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Matt Whetton: Twitter"
            href="https://twitter.com/codenutz"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Matt Whetton: LinkedIn"
            href="https://www.linkedin.com/in/matthewwhetton"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
