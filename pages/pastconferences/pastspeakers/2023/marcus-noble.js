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

export default function MarcusNoble() {
  return (
    <Layout>
      <Head>
        <title>Marcus Noble</title>
      </Head>
      <Header
        title={'Marcus Noble'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Marcus_N.jpg"
            alt="Picture of Marcus Noble"
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
          Managing Kubernetes without losing your cool
        </h2>
        <p tabIndex="0">
          After several years operating and building on Kubernetes
          clusters I have my fair share of battle scars. From network
          misconfigurations to soaring cloud costs to deletion of a
          production control plane, just to name a few.
        </p>
        <p tabIndex="0">
          Each time something went wrong, dealing with it became a
          little easier and each incident added another tool to my bag
          of tricks.
        </p>
        <p tabIndex="0">
          Over time I’ve tried to simplify and automate as much of my
          debugging technique as I can, through a combination of
          scripts, tools and code.
        </p>
        <p tabIndex="0">
          This talk will cover some practical tips and tricks that
          everyone using Kubernetes, regardless of experience level,
          can leverage to make interacting with clusters that little
          bit easier. We’ll start small, something anyone can do
          today, and work our way up to building our own tooling on
          top of Kubernetes to make every day operations just that
          little nicer.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Marcus Noble</h2>
        <p tabIndex="0">
          <b>Platform Engineer @ Giant Swarm</b>
        </p>
        <p tabIndex="0">
          Marcus is a platform engineer at Giant Swarm, a company
          dedicated to offering managed Kubernetes solutions. His main
          area of focus in recent years has been around Go,
          Kubernetes, containers and DevOps but originally started out
          as a web developer and JavaScript enthusiast. A
          self-described “tinkerer”, when not building Kubernetes
          solutions, Marcus likes to dabble with 3D printing and
          experimenting with smart home tech.{' '}
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Marcus Noble: Twitter"
              href="https://twitter.com/Marcus_Noble_"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Marcus Noble: Website"
              href="https://marcusnoble.co.uk/"
            >
              Website
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Marcus Noble: LinkedIn"
              href="https://www.linkedin.com/in/marcusnoble/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
