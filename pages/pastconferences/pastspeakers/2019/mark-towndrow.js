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

export default function MarkTowndrow() {
  return (
    <Layout>
      <Head>
        <title>Mark Towndrow</title>
      </Head>
      <Header
        title={'Mark Towndrow'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Mark_T.jpg"
            alt="Picture of Mark Towndrow"
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
            <b>Talk Length: </b> 60 minute
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          How to be a better developer - without learning another
          JavaScript framework
        </h2>
        <p tabIndex="0">
          It’s increasingly important to make time for
          self-improvement and career development, but it’s hard to
          know where to focus your efforts. As developers we’re often
          attracted to learning new technologies and languages,
          however I’d like to make the case for a number of
          non-technical areas of development that I believe can give
          you a huge advantage in your career.
        </p>
        <p tabIndex="0">
          In this talk, I’ll share a number of skills that I’ve found
          compliment a technical toolbelt, such as generating and
          maintaining momentum within your team and looking beyond
          requirements to identify opportunities for your business.
          I’ll also share some tips to help fast track your progress,
          exploring why it’s important to seek out and identify the
          gaps in your skill set, and how to seize opportunities to
          strengthen these areas.
        </p>
        <p tabIndex="0">
          It’s my hope that this talk will give you a different
          perspective of what makes a great developer, as well as the
          tools and motivation to broaden your expertise so that you
          can make a bigger impact in your organisation.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Mark</h2>
        <p tabIndex="0">
          <b>Head of Engineering at OpenWrks</b>
        </p>
        <p tabIndex="0">
          Gained a Software Engineering degree at Nottingham Trent
          University, worked at TDX Group then Equifax before moving
          to Bizfitech / OpenWrks. Enjoy coding primarily in .NET
          (Core) and React but love playing with new technologies
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Mark Towndrow: Twitter"
            href="https://twitter.com/GraphicChange"
          >
            Twitter
          </a>
        </li>
      </section>
    </Layout>
  );
}
