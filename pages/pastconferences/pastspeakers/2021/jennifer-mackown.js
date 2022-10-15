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

export default function JenniferMackown() {
  return (
    <Layout>
      <Head>
        <title>Jennifer Mackown</title>
      </Head>
      <Header
        title={'Jennifer Mackown'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Jen_M.jpg"
            alt="Picture of Jennifer Mackown"
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
            <b>Talk Length: </b> 15 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          How to ruin kid's games with machine learning
        </h2>
        <p tabIndex="0">
          Winter lockdown with a small child has meant one thing in
          our house - trains. We have a huge amount of Brio (that
          magnetic wooden train set you used to play with in the Early
          Learning Centre) and every day means a new track taking over
          our living room. Train tracks designed by a 4yo can be quite
          random and not very satisfying to actually play with - lines
          that disappear under the sofa, bridges to nowhere and
          surprise turntables in the middle of a track.
        </p>
        <p tabIndex="0">
          So I started to build my own tracks (when he was asleep, to
          prevent ‘helping’), but it was pretty labour-intensive and
          it turns out I prefer to spend my evenings doing… well
          almost anything else. So instead I developed an algorithm to
          generate tracks and then trained a 4yo-opinion-based ML
          model to determine whether the tracks were ‘fun’ or not.
        </p>
        <p tabIndex="0">
          This is the story of how I learned that ‘developing an
          algorithm’ is not as easy as it sounds, and that ‘fun’ has
          different meanings depending on whether you are 4, 34 or a
          computer.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Jennifer</h2>
        <p tabIndex="0">
          <b>Senior Software Developer</b>
        </p>
        <p tabIndex="0">
          After a short but illustrious career as webmaster for a
          number of uniquely designed X-Files and Stargate SG-1 fan
          sites in the 90's, I decided to get a proper job. A
          meandering path through accountancy, volcanoes in space,
          teaching maths to teenagers and pulling pints eventually
          lead back to the web, though this time I was called Web
          Developer and people paid me money to do it. Not much, but
          startup life be that way.
        </p>
        <p tabIndex="0">
          Now I'm a Senior Developer, which sounds pretty important,
          and I've somehow migrated from building beautiful websites
          with frames and animated gifs to serious backend development
          that make serious apps do serious things seriously.
        </p>
        <p tabIndex="0">
          When not being serious, I play a LOT of Lego with the 4yo. I
          make beautiful houses and buildings that get demolished and
          turned into police stations. Or set on fire. Or run over by
          a monster truck. I sometimes volunteer myself for conference
          talks or arranging tech meetups, but that's all been a bit
          limited lately what with the world ending, so I may have
          forgotten how to interact with real life humans.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9SMbiBQ3wSw"
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
            aria-label="Jen: Youtube of Talk"
            href="https://youtu.be/9SMbiBQ3wSw"
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
            aria-label="Jennifer Mackown: Twitter"
            href="https://twitter.com/__jcmc__/"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Jennifer Mackown: Website"
            href="https://www.jcmc.dev/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Jennifer Mackown: LinkedIn"
            href="https://www.linkedin.com/in/jennifer-mackown-4352aa37/"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
