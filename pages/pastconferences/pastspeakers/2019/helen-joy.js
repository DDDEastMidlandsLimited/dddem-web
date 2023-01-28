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

export default function HelenJoy() {
  return (
    <Layout>
      <Head>
        <title>Helen Joy</title>
      </Head>
      <Header
        title={'Helen Joy'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Helen_J.jpg"
            alt="Picture of Helen Joy"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Pronouns: </b> She/Her
            </li>
            <li>
              <b>Talk Length: </b> 30 minute
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Whose Design is it Anyway? - In introduction to inclusive
          design and research
        </h2>
        <p tabIndex="0">
          As creators of products and services, we’re pretty good at
          thinking we’ve got it all sussed. We map user journeys, we
          create roadmaps, we write user stories. We know what we want
          people to do; what actions we want them to take. But do we
          really know who these people are? Do we really know what
          they need? Do we take the time to find out, or are we
          building products and services based on our own assumptions
          and biases?
        </p>
        <p tabIndex="0">
          And what about those who lack our digital privilege? Digital
          exclusion is a reality for many people. It’s our
          responsibility to look out for everyone, not just those who
          are the most visible or the easiest to design for.
        </p>
        <p tabIndex="0">
          As technologists, we have the power to massively hinder or
          improve lives; not those of ‘users’ but of people. This talk
          looks at what it means to be digitally excluded and how by
          adopting a practical user research-led attitude to design,
          we can create products that are not just appealing to us,
          but life-changing to those who use them.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Helen</h2>
        <p tabIndex="0">
          <b>UX Consultant at SPARCK</b>
        </p>
        <p tabIndex="0">
          Helen Joy is a UX consultant and user researcher at SPARCK
          with a focus on universal and inclusive design practices.
          She&apos;s an organiser of Women in Tech Nottingham, working
          to promote inclusivity within the tech industry and raise
          the profile of talented female and gender minority speakers.
          When not consulting or speaking at events, Helen is an avid
          coffee drinker and hot yoga fan.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Zi9ury3Setg"
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
            aria-label="Helen Joy: Youtube of Talk"
            href="https://youtu.be/Zi9ury3Setg"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Helen Joy: Twitter"
              href="https://twitter.com/LittleHelli"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Helen Joy: LinkedIn"
              href="https://www.linkedin.com/in/helencjoy/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
