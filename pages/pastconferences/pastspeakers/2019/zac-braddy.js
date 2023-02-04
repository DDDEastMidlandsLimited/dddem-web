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

export default function ZacBraddy() {
  return (
    <Layout>
      <Head>
        <title>Zac Braddy</title>
      </Head>
      <Header
        title={'Zac Braddy'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Zac_B.jpg"
            alt="Picture of Zac Braddy"
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
        <h2 tabIndex="0">
          All the mistakes I&apos;ve made trying to implement
          Microservices
        </h2>
        <p tabIndex="0">
          We&apos;re now entering the next age of Microservices. For
          about a decade now we&apos;ve been doing battle with the
          pointy haired bosses of the world to convince them of what
          seems so painfully obvious to us; that there are many varied
          virtues of microservices architecture.
        </p>
        <p tabIndex="0">
          Now that they all have Netflix accounts and they&apos;ve
          seen the benefits first hand we now seem to have those same
          bosses bursting into the office waving their trade magazine
          and asking us if we&apos;ve heard about this "micro-system"
          thing. Flustered, we&apos;re having coming to terms now with
          how we actually deliver on our lofty promises without
          Amazon&apos;s finances and resources.
        </p>
        <p tabIndex="0">
          Some people have been getting it right the first time
          they&apos;ve tried which is great! Other people, like me,
          have got it right as well.....but....not before getting it
          wrong repeatedly for oh so many different reasons! So, I
          guess that makes me an expert, right?!
        </p>
        <p tabIndex="0">
          Come listen as I shamefully regale you with all ways in
          which I&apos;ve ham-fisted the most elegant architecture
          currently known to humanity in hopes that I might save you
          from the same sleepless nights.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Zac</h2>
        <p tabIndex="0">
          <b>Lead Developer</b>
        </p>
        <p tabIndex="0">
          Zac is a Lead Fullstack Javascript developer at Koodoo.io
          where he helps to try and save people money on their
          mortgages. This makes him feel super good about how he
          spends his days.
        </p>
        <p tabIndex="0">
          Zac has been developing for a number of years, 5 or 6 I
          think, I don&apos;t know who is counting? In that time has
          seen a very diverse set of tech and industries. Up until his
          current role he was working with the .NET stack so even
          languages are sacred to him. For Zac it&apos;s all about the
          next challenge and in the past that thirst for knowledge has
          seen him working with everything from hulking 20 year old
          Classic ASP monoliths to greenfield node microservices on
          bleed edge architecture and good amount of stuff in between.
        </p>
        <p tabIndex="0">
          On the side Zac is active in the developer community writing
          blog posts, doing talks and mentoring other developers
          through their journeys in meet ups and online. When he
          isn&apos;t in front of his computer at work he is out
          geocaching with his sons and wife, playing D and D with
          friends or......let&apos;s face it probably on the computer
          still coding or gaming.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/43qsKWUNUpc"
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
            aria-label="Zac: Youtube of Talk"
            href="https://youtu.be/43qsKWUNUpc"
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
              aria-label="Zac Braddy: Twitter"
              href="https://twitter.com/ZackerTheHacker"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Zac Braddy: LinkedIn"
              href="https://www.linkedin.com/in/zac-braddy-17a81b22/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
