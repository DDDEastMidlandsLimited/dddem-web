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

export default function MattHunt() {
  return (
    <Layout>
      <Head>
        <title>Matt Hunt</title>
      </Head>
      <Header
        title={'Matt Hunt'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Matt_H.jpg"
            alt="Picture of Matt Hunt"
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
              <b>Talk Length: </b> 60 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Microservice Mistakes I Made and Survived
        </h2>
        <p tabIndex="0">
          Many people preach or opinionate around best practises for
          microservices, but little do they talk about the pitfalls
          and traps they have fallen into when building distributed
          systems. Well after years of working with distributed
          systems and failing many times I've compiled my top five
          mistakes I've made, I've even identified how to hopefully
          not to make some of them!
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Matt Hunt</h2>
        <p tabIndex="0">
          <b>.NET Developer</b>
        </p>
        <p tabIndex="0">
          Matt has nearly 20 experience in software development
          starting way back when VB 5 and Classic ASP were his bread
          and butter. He has a history of working in the finance and
          services industry and is skilled in C#, Azure, DevOps,
          Distributed Systems, Microservices Architecture and Agile
          Methodologies. After having worked as a contractor for many
          years Matt has now fulfilled his dream and is working for a
          startup FinTech company in Wales hopefully building the next
          big thing.{' '}
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Hunt: Twitter"
              href="https://twitter.com/doesdotnet"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Hunt: LinkedIn"
              href="https://www.linkedin.com/in/matt--hunt/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
