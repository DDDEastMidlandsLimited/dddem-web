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

export default function PaulBailey() {
  return (
    <Layout>
      <Head>
        <title>Paul Bailey</title>
      </Head>
      <Header
        title={'Paul Bailey'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Paul_B.jpg"
            alt="Picture of Paul Bailey"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Pronouns: </b> He/Him
            </li>
            <li>
              <b>Talk Length: </b> 30 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          How to create the conditions where happy people do their
          best work
        </h2>
        <p tabIndex="0">
          There’s no doubt that covid was a catalyst for digital
          transformation.
        </p>
        <p tabIndex="0">
          Over the last few years, many organisations have scaled
          quickly. Scrambling to find skilled employees, so that they
          could grow capabilities to meet increased demand.
        </p>
        <p tabIndex="0">
          At the same time, organisations are looking for better ways
          to connect and develop their people.
        </p>
        <p tabIndex="0">
          Research from McKinsey shows that businesses who invest in
          capability-building enjoy better returns, higher
          organisational health scores, and a more resilient workforce
          than those that don’t.
        </p>
        <p tabIndex="0">
          After all, the more of the right capabilities an
          organisation has, the better it can manage continuous
          change.
        </p>
        <p tabIndex="0">
          But as you scale, how do you create and cultivate the
          conditions where happy people do their best work?
        </p>
        <p tabIndex="0">
          In this session, I’ll share my experience from the last 5
          years, growing an international multi-disciplinary team to
          120+ people.
        </p>
        <p tabIndex="0">Attending this session you’ll learn…</p>
        <p tabIndex="0">
          <li tabIndex="0">
            Why what matters is not individual capabilities, but the
            interaction between people
          </li>
          <li tabIndex="0">
            How to create psychological safety that enables people to
            be their authentic selves
          </li>
          <li tabIndex="0">
            Creative hybrid methods for bringing people together to
            connect, support, share and learn
          </li>
          <li tabIndex="0">Why Practice does not make perfect</li>
        </p>
        <p tabIndex="0">
          But perhaps most importantly, I’ll explain why a ‘Community
          of Practice' is a competitive advantage that empowers
          members to be more than the sum of their parts.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Paul</h2>
        <p tabIndex="0">
          <b>SPARCK, Head of Design</b>
        </p>
        <p tabIndex="0">
          Paul is a Head of Design at SPARCK, a full-time human maker
          (father of 4), #DesignThinkingDad and co-host of Service
          Design Connect.
        </p>
        <p tabIndex="0">
          He’s been planning, prototyping and designing digital
          products and services for over 25 years and has created
          innovative solutions for some of the UK’s largest
          organisations and government departments.
        </p>
        <p tabIndex="0">
          A self-confessed Typothermiac and a bit of a geek, when not
          thinking about human-centred design he spends his time
          coming up with ingenious ways to entertain his kids whilst
          robot-proofing them for the 4th Industrial Revolution.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Paul Bailey: Twitter"
              href="https://www.linkedin.com/in/paul-bailey-68380715/"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Paul Bailey: X"
              href="https://twitter.com/paul_bailey_"
            >
              X
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
