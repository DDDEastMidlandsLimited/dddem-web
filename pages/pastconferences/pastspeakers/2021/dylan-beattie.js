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

export default function DylanBeattie() {
  return (
    <Layout>
      <Head>
        <title>Dylan Beattie</title>
      </Head>
      <Header
        title={'Dylan Beattie'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Dylan_B.jpg"
            alt="Picture of Dylan Beattie"
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
              <b>Talk Length: </b> 60 minute
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">There's No Such Thing As Plain Text</h2>
        <p tabIndex="0">
          Software is complicated. Machine learning, microservice
          architectures, message queues… every few months there’s
          another revolutionary idea to consider, another framework to
          learn. And underneath so many of these amazing ideas and
          abstractions is text. When you work in software, you spend
          your life working with text. Some of those text files are
          source code, some are configuration files, some of them are
          documentation. Editors, revision control systems,
          programming languages - everything from C# and HTML to Git
          and VS Code is based on the idea that we’re working with
          “plain text” files. But… what if I told you there’s no such
          thing?
        </p>
        <p tabIndex="0">
          When we say something is a plain text file, we’re relying on
          a huge number of assumptions - about operating systems,
          editors, file formats, language, culture, history… and, most
          of the time, that’s OK. But when it goes wrong, good old
          plain text can lead to some of the weirdest bugs you’ve ever
          seen. Why is there Chinese in the SQL event logs? Why has
          the city of Aarhus disappeared? And why does Magnus
          Mårtensson always have trouble getting into the USA? Join
          Dylan Beattie for a fascinating look into the hidden world
          of text files - from the history of mechanical teletypes, to
          how emoji skin tones actually work. We’ll look at some
          memorable bugs, some golden rules for working with plain
          text, and we’ll even find out the story behind the strange
          saying “PIKE MATCHBOX” – and what it has to do with driving
          in Ukraine.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Dylan</h2>
        <p tabIndex="0">
          <b>The one in the hat.</b>
        </p>
        <p tabIndex="0">
          Dylan Beattie is an independent consultant who has been
          building data-driven web applications since the 1990s. He’s
          managed teams, taught workshops, and worked on everything
          from tiny standalone websites to complex distributed
          systems. He’s a Microsoft MVP, and he regularly speaks at
          conferences and user groups all over the world.
        </p>
        <p tabIndex="0">
          Dylan is the creator of the Rockstar programming language,
          and is known for his live music shows featuring
          software-themed parodies of classic rock songs. He’s online
          at dylanbeattie.net and on Twitter as @dylanbeattie.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AGIiXKliOik"
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
            aria-label="Dylan: Youtube of Talk"
            href="https://youtu.be/AGIiXKliOik"
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
              aria-label="Dylan Beattie: Twitter"
              href="https://twitter.com/dylanbeattie"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Dylan Beattie: Website"
              href="https://www.dylanbeattie.net"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
