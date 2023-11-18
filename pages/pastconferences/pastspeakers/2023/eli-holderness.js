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

export default function EliHolderness() {
  return (
    <Layout>
      <Head>
        <title>Eli Holderness</title>
      </Head>
      <Header
        title={'Eli Holderness'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Eli_H.jpg"
            alt="Picture of Eli Holderness"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Pronouns: </b> They/Them
            </li>
            <li>
              <b>Talk Length: </b> 60 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          You Shall Not Password: Modern Authentication for Web Apps
        </h2>
        <p tabIndex="0">
          In the good old days, your users would log into a web app
          with a username and password. But now people expect an
          alphabet soup of SSO, 2FA, OAuth, OIDC, SAML, FIDO2, OTP...
          What do they all mean - and why do they matter? Why is
          central authentication useful? What does two-factor
          authentication really protect us from, and what's still wide
          open? Learn how to keep your users safe as we discuss the
          good, the bad and the ugly of modern authentication
          mechanisms for the Web.
        </p>
        <p tabIndex="0">
          This talk is aimed at anyone passingly familiar with web
          development, with an interest in security, or who simply
          wants to know what’s really going on when you ‘sign in with
          Google’.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Eli Holderness</h2>
        <p tabIndex="0">
          <b>Developer Advocate at Scaleway</b>
        </p>
        <p tabIndex="0">
          Eli has been in tech for 6 years, working in industries
          ranging from telecoms to biotech to analog circuit design;
          now, they're doing developer advocacy at Scaleway and
          yelling at the cloud. In their spare time, they like to play
          video games, knit and sew, and hang out with their cat.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Eli Holderness: Twitter"
              href="https://twitter.com/eliholderness"
            >
              X
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
