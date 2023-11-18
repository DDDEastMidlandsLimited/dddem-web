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
            src="/static/speakers/2023/Poornima_N.jpg"
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
        <h2 tabIndex="0">Minimal APIs in .NET</h2>
        <p tabIndex="0">
          Did you know you can create an API starting with a console
          app?
        </p>
        <p tabIndex="0">
          Welcome Minimal APIs!!! Minimal APIs were received with a
          lot of excitement since the very announcement of it in the
          preview versions of .NET 6. It is a great way to build APIs
          with minimal dependencies.
        </p>
        <p tabIndex="0">
          In my session, we will understand the “why” and “how” of
          Minimal APIs while understanding the minimal hosting model.
          We will then look at some of the features introduced in .NET
          7 for Minimal APIs and understand whether we can give our
          project a little bit more structure. We will also discuss
          versioning Minimal APIs and talk about rate limiting of
          APIs, all while making our API practical and ready to face
          the world!
        </p>
        <p tabIndex="0">
          There will be lots of code, lots of demos, and lots of
          practical knowledge to take away :-)
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Poornima Nayar</h2>
        <p tabIndex="0">
          <b>Freelance .NET Developer, Microsoft MVP, Umbraco MVP</b>
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
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Poornima Nayar: X"
              href="https://twitter.com/PoornimaNayar"
            >
              X
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
