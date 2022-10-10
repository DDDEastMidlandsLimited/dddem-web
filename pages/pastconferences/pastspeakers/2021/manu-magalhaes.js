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

export default function ManuMagalhaes() {
  return (
    <Layout>
      <Head>
        <title>Manu Magalhães</title>
      </Head>
      <Header
        title={'Manu Magalhães'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Manu_M.jpg"
            alt="Picture of Manu Magalhães"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Nitty-Gitty: Master Git from the Inside</h2>
        <p tabIndex="0">
          You already use git, but you're still scared of it? Is git
          more a set of spells than a tool to you? Learn in this live
          demo how git works from the inside and reason all your git
          problems away.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Manu</h2>
        <p tabIndex="0">
          <b>DevSecOps Engineer</b>
        </p>
        <p tabIndex="0">
          I am a DevSecOps Engineer interested in Cloud Security,
          Security Automation, and Cyberethics. Before getting hooked
          into CyberSecurity, I was a translator with a Journalism
          degree. I love to explore how technology affects our
          society, and how we can create tech for good.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <p tabIndex="0">Coming Feburary 2022</p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Manu Magalhães: LinkedIn"
            href="https://www.linkedin.com/in/manumagalhaes/"
          >
            Twitter
          </a>
        </li>
      </section>
    </Layout>
  );
}
