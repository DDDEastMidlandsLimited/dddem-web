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

export default function IanCooper() {
  return (
    <Layout>
      <Head>
        <title>Ian Cooper</title>
      </Head>
      <Header
        title={'Ian Cooper'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Ian_C.jpg"
            alt="Picture of Ian Cooper"
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
        <h2 tabIndex="0">How to Escape The Distributed Monolith</h2>
        <p tabIndex="0">
          Microservices were all the rage, so you broke up your
          monolith. The services talk to each other by gRPC, you use a
          service mesh to route and load balance, and provide
          reliability oriented computing, you are fully buzzword
          compliant.
        </p>
        <p tabIndex="0">Yet something seems to be wrong.</p>
        <p tabIndex="0">
          You can&apos;t easily release software from one team,
          without coordinating with teams creating other. Testing has
          to be end-to-end to flush out problems or risk your team
          creating breaking changes for another team. Your
          'heavy-lifters', whether you call the principals or
          architects seem to spend all their time on Docker, K8s,
          Istio and a whole slew of infrastructure technologies. Your
          system won&apos;t run without them, and you feel locked in.
        </p>
        <p tabIndex="0">What happened?</p>
        <p tabIndex="0">
          In this talk we look at the emerging world of "smart proxies
          and dumb endpoints" and ask whatever happened to the vision
          of "smart endpoints and dumb pipes", and what you can do to
          change course and deliver on the original promises of
          microservices to allow your teams to release frequently and
          independently of each other. And become masters of your tech
          stack, not its servants.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Ian</h2>
        <p tabIndex="0">
          <b>Coding architect, pierced, bearded, tattooed</b>
        </p>
        <p tabIndex="0">
          Polyglot Coding Architect in London, founder of #ldnug,
          speaker, tabletop gamer, geek. Tattooed, pierced, and
          bearded. The 'guv' on @BrighterCommand
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CZ_PlBAXUmg"
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
            aria-label="Ian Cooper: Youtube of Talk"
            href="https://youtu.be/CZ_PlBAXUmg"
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
            aria-label="Ian Cooper: Twitter"
            href="https://twitter.com/icooper"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Ian Cooper: LinkedIn"
            href="https://www.linkedin.com/in/ian-cooper-2b059b/"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
