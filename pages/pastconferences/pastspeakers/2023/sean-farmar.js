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

export default function SeanFarmar() {
  return (
    <Layout>
      <Head>
        <title>Sean Farmar</title>
      </Head>
      <Header
        title={'Sean Farmar'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Sean_F.jpg"
            alt="Picture of Sean Farmar"
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
        <h2 tabIndex="0">Using DDD To Decompose Your Monolith</h2>
        <p tabIndex="0">
          Software design is hard, maybe the hardest part of building
          software systems... When designing distributed systems
          things get even more challenging. Now that Microservices are
          so popular, we all want to decompose our monoliths to
          smaller units of independent components. If we don't want to
          end up with a distributed monolith, we need to have a
          toolbox of design concepts so we can achieve well-defined
          boundaries between our components groups described as
          "Services" and "Service Boundaries" in the Service Oriented
          Architecture or SOA paradigm.
        </p>
        <p tabIndex="0">
          The traditional way of designing systems based on a domain
          data model with very complex relationships and dependencies
          may kind of work when building a monolith, but just breaks
          apart when you building distributed systems.
        </p>
        <p tabIndex="0">
          One of the pillars of distributed system design is to solve
          the **coupling** problem.
        </p>
        <p tabIndex="0">
          If we look at the tenants of SOA they all address coupling:
        </p>
        <li tabIndex="0">
          <b>Explicit Boundaries</b>: In it's the simplest form it is
          to find what belongs together and making sure there are no
          leakages between the defined boundaries of a "Service".
        </li>
        <li tabIndex="0">
          <b>Autonomy</b>: Like in Object orientation, Keep our
          components and "Services" autonomous, encapsulated and have
          as little dependencies to the outside as possible.
        </li>
        <li tabIndex="0">
          <b>Sharing schema and contracts not classes</b>: Make sure
          we don't introduce coupling by using an open protocol for
          communication.
        </li>
        <li tabIndex="0">
          <b>Compatibility based upon policy</b>: This is the hardest
          tenant to articulate, but again, it's about loose coupling,
          an explicit API that describes the component's behaviour.
        </li>
        <p tabIndex="0">
          In order to achieve this, we need to rethink how we design
          our components and "Services" We need to move from monolith
          thinking to distributed thinking, leaving the single
          relational data model to multiple vertical bounded contexts
          that together compose a "Service" boundary.
        </p>
        <p tabIndex="0">
          In this talk I will walk through the process of designing a
          very simplistic and naive vertical slice while introducing
          the concepts from Domain Driven Design (DDD) and SOA, to
          build a single vertical, from there you will be able to do
          your first steps to design a loosely coupled distributed
          system, and be on the way to find you "Service" boundaries.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Sean Farmar</h2>
        <p tabIndex="0">
          <b>Distributed Systems Expert</b>
        </p>
        <p tabIndex="0">
          With over 25 years of experience, Sean Farmar specializes in
          providing simple solutions for complex business requirements
          applying SOA and distributed computing principles inspired
          by Udi Dahan.
        </p>
        <p tabIndex="0">
          Sean runs Bosca Software Solutions Ltd. a boutique
          consulting company providing management and technical
          consulting related to product software engineering, custom
          project delivery, and training.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Sean Farmar: X"
              href="https://twitter.com/farmar"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Sean Farmar: LinkedIn"
              href="https://ie.linkedin.com/in/seanfarmar"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
