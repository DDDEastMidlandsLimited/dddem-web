import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import theme from '../../../../theme/theme';
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
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/TBC.png"
            alt="Picture of Zac Braddy"
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

      <section>
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

      <section>
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

      <section>
        <h2 tabIndex="0">Links</h2>
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
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }

          .row:after {
            content: '';
            display: table;
            clear: both;
          }

          .speakerpic {
            display: block;
          }

          .speakerpic-container {
            margin-top: 8%;
            margin-bottom: 5%;
            width: 250px;
            border-radius: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .iframe-container {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%;
            margin: 10px 10px;
          }
          .iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }
          ul {
            display: flex;
            margin: 0;
            padding: 5px;
            flex-flow: row;
            flex-wrap: nowrap;
            justify-content: center;
          }
          li {
            margin: 0;
            padding: 10px;
            list-style: none;
            list-style-type: none;
            text-align: left;
            flex-basis: 0;
            flex-grow: 1;
          }

          .video-frame {
            text-align: center;
          }
          .center-link {
            text-align: center;
          }

          .contactButton {
            align: ${theme.palette.quaternary};
            font-weight: bold;
            font-size: ${theme.font.sizes.mobile.subtitle1};
            flex-grow: 1;
            border-radius: 12px;
            padding: 10px 10px 10px 10px;
            color: ${theme.palette.primary};
            border: 2px solid ${theme.palette.primary};
            background-color: ${theme.palette.light};
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .contactButton a {
            text-decoration: none;
          }

          .contactButton:hover {
            background-color: ${theme.palette.primary};
          }

          .contactButton a:hover {
            color: ${theme.palette.light};
          }

          @media only screen and (max-width: 1081px) {
            section {
              padding: 3% 12%;
            }

            .video-frame {
              display: none;
            }
          }
        `}
      </style>
    </Layout>
  );
}
