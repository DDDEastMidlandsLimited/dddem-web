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

export default function DanClarke() {
  return (
    <Layout>
      <Head>
        <title>Dan Clarke</title>
      </Head>
      <Header
        title={'Dan Clarke'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Dan_C.jpg"
            alt="Picture of Dan Clarke"
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
              <b>Talk Length: </b> 15 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Git - Under the Covers</h2>
        <p tabIndex="0">
          We all use Git, right? But do you know how it actually
          works? And I don't mean "what is rebasing?" - let's go a bit
          deeper than that. I'm sure you've all heard someone say
          "each commit is a snapshot of the entire codebase". But what
          does that actually mean? In this talk, we'll explore the
          different object types that Git uses to store its
          information and how they relate to each other. It's
          surprisingly simple - and really useful to know when using
          Git.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Dan Clarke</h2>
        <p tabIndex="0">
          <b>
            Microsoft MVP | .NET Dev | Host of The Unhandled Exception
            Podcast | Founder/organiser of the @dotnetoxford and
            @azure_oxford user groups | Owner of Everstack
          </b>
        </p>
        <p tabIndex="0">
          Dan is a Microsoft MVP; host of the Unhandled Exception
          Podcast; owner of Everstack (a consulting company
          specialising in .NET and Azure); and founder of the .NET
          Oxford and Azure Oxford user groups. He has been developing
          for twenty-odd years - starting off in the games industry
          writing C/C++ - but focusing on .NET for over a decade. And
          now also working in the Azure space.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Dan Clarke: Twitter"
              href="https://www.twitter.com/dracan"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Dan Clarke: LinkedIn"
              href="https://www.linkedin.com/in/danclarkeuk/"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Dan Clarke: Website"
              href="https://www.danclarke.com/"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
