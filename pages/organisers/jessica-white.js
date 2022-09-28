import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import BackToAboutButton from '../../components/information/BackToAboutButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function JessicaWhite() {
  return (
    <Layout>
      <Head>
        <title>Jessica White</title>
      </Head>
      <Header
        title={'Jessica White'}
        banner="/static/banners/organisers/jess.jpg"
      />
      <section className="past-speakers-section">
        <h1 tabIndex="0">Director/ Co-Founder / Co-Organiser</h1>
      </section>

      <section className="past-speakers-section">
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/jess.png"
            alt="Picture of Jessica White"
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
        </div>
        <br />
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Jessica</h2>
        <p tabIndex="0">
          Fully caffeinated, Jessica is more whirling dervish than
          person. Professionally, she is a Technical Architect.
          Outside of work she is a Microsoft MVP, Mentor, Organiser,
          Gamer and avid reader.
        </p>
        <p tabIndex="0">
          Jessica has a lot of event organisation experience. Having
          founded{' '}
          <a href="https://www.technottingham.com/wit-notts">
            Women In Tech Nottingham
          </a>
          back in 2015, and running it for nearly 2 years, she has
          previous experience with running an inclusive event. She
          also co-organises the .NET Notts meetup in Nottingham.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Jessica's Responsibilities</h2>
        <li tabIndex="0">Partner Agreements and outreach</li>
        <li tabIndex="0">Scheduling</li>
        <li tabIndex="0">Contracts</li>
        <li tabIndex="0">Social Media</li>
        <li tabIndex="0">Staffing</li>
        <li tabIndex="0">Managing the Open Source Repositories</li>
        <li tabIndex="0">Speaker Management</li>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            href="mailto:jessica@dddeastmidlands.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica White: Email"
          >
            Email
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://twitter.com/JessPWhite"
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica White: Twitter"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://www.linkedin.com/in/jessica-white-67917883/"
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica White: LinkedIn"
          >
            LinkedIn
          </a>
        </li>
      </section>

      <section className="past-speakers-section">
        <BackToAboutButton />
      </section>
    </Layout>
  );
}
