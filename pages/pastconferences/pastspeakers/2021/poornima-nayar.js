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

export default function PoornimaNayar() {
  return (
    <Layout>
      <Head>
        <title>Poornima Nayar</title>
      </Head>
      <Header
        title={'Poornima Nayar'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Poornima_N.jpg"
            alt="Picture of Poornima Nayar"
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
              <b>Talk Length: </b> 60 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">REST, GraphQL and gRPC : A Comparison</h2>
        <p tabIndex="0">
          Be it any industry, applications need to talk to each other.
          So, developers often build bridges – Application Programming
          Interfaces (API) – to allow one system to communicate to
          another.
        </p>
        <p tabIndex="0">
          Over time, different API architectural styles have been
          released. Each of them has its own characteristics, patterns
          of data exchange, pros, and cons. REST, GraphQL and gRPC are
          three main options when it comes to API development and
          implementation In my session I will cover what REST,
          GraphQL, and gRPC are, how APIs can be implemented using
          each of these, and give you a comparison between them.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Poornima</h2>
        <p tabIndex="0">
          <b>Freelance Developer, Microsoft MVP, Umbraco MVP</b>
        </p>
        <p tabIndex="0">
          Poornima is a .Net developer with over 10 years of
          experience in .Net and Umbraco. She is passionate about
          learning new technologies and keeping herself up-to-date
          with the latest developments in technology. Outside her
          work, Poornima enjoys music and is undergoing training in
          Indian Classical music. Based in Langley, UK she mothers a
          little girl and spends her spare time reading, cooking and
          watching movies.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <p tabIndex="0">Coming Feburary 2022</p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Poornima Nayar: Twitter"
              href="https://twitter.com/PoornimaNayar"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Poornima Nayar: Website"
              href="https://poornimanayar.co.uk/"
            >
              Website
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Poornima Nayar: LinkedIn"
              href="https://www.linkedin.com/in/poornimanayar/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
