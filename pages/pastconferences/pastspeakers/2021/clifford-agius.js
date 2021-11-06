import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import theme from '../../../../theme/theme';
import Head from 'next/head';
import PastSpeakersButton from '../../../../components/speakers/PastSpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function CliffordAgius() {
  return (
    <Layout>
      <Head>
        <title>Clifford Agius</title>
      </Head>
      <Header
        title={'Clifford Agius'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <img
          src="/static/speakers/2021/Clifford_Agius.jpg"
          alt="Picture of Clifford Agius"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          3D printed Bionic Hand a little IOT and a Xamarin Mobile App
        </h2>
        <p tabIndex="0">
          Meet Kayden, a local 15yr old young man and close family
          friend, who was born with no left forearm and hand.
        </p>
        <p tabIndex="0">
          The National Health Service (NHS) is an amazing service in
          the UK, however their prosthetic provision is both basic and
          expensive (to the NHS).
        </p>
        <p tabIndex="0">
          Surely with modern technology we can not only improve the
          lives of young people like Kayden but also demonstrate how
          we can do it more cost effectively than current options.
          This talk details how I set about building on the wonderful
          work of the OpenBionics team to provide Kayden with an
          alternative to the NHS prosthesis.
        </p>
        <p tabIndex="0">We'll discuss:</p>
        <li tabIndex="0">
          How 3D printing of parts for the hand can be much more
          effective (cost and function) than fibre glass moulds{' '}
        </li>
        <li tabIndex="0">
          Using home 3D printing we can create a viable articulated
          hand
        </li>
        <li tabIndex="0">
          Using off the shelf commodity IoT boards from Adafruit can
          be used to program the hand (and how this is more viable
          than alternative approaches) but more recently in the
          project moving to the new WildernessLabs F7 board so that
          the whole project in DotNet.
        </li>
        <li tabIndex="0">
          Creating a Xamarin application to connect via Bluetooth and
          provide customisation and control options for the hand and
          the challenges of UI design for those with accessibility
          issues.
        </li>
        <li tabIndex="0">
          How this option can reduce the costs from £000's to several
          hundred £s and is being done as an Open Source project which
          will hopefully lead to designs and kits being available for
          others around the world to build their own.
        </li>
        <p tabIndex="0">
          Attendees will learn about and see demos of:
        </p>
        <li tabIndex="0">
          The 3D printed hand and related components{' '}
        </li>
        <li tabIndex="0">
          Programming of the IoT board and sensors (In DotNet and C#)
        </li>
        <li tabIndex="0">
          Creation of the Xamarin application to customise the hand.
        </li>
        <li tabIndex="0">Bluetooth connection options.</li>
        <p tabIndex="0">
          Please note: Kayden and his family have given express
          permission to use his name and images for this talk.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Clifford</h2>
        <p tabIndex="0">
          <b>
            Freelance Developer that just so happens to fly a Boeing
            787 around the world.
          </b>
        </p>
        <p tabIndex="0">
          Cliff is a senior first officer with a Major UK Airline on
          one of its newest jets the 787 Dreamliner.
        </p>
        <p tabIndex="0">
          He has a passion for flying from an early age, although his
          earlier career was spent as an apprentice at the Ford Motor
          Company and then a Project Engineer covering
          Electrical/Software/Robot engineering in major automotive
          brands. However his drive, focus and determination was
          always to become a pilot.
        </p>
        <p tabIndex="0">
          After self funding his pilots license and passing all
          necessary exams his first commercial flight was with Aer
          Arran (Irish regional airline), where he flew ATRs from
          Dublin and Galway to Ireland regions and into the UK. After
          this the jets got bigger, the cattle slightly less and
          eventually he applied and was selected to join a Major UK
          Airline. After initially flying the Airbus A320 Cliff has
          continued his personal development and now fly’s the fleet
          of 787’s across the world, including the recently arrived
          B787-900 with the new First Class.
        </p>
        <p tabIndex="0">
          Although the current jets are technologically advanced its
          Cliff’s every decision and calculation on a minute-by-
          minute basis that carries over 215 people safely back and
          forth over the Atlantic or Siberia, therefore every decision
          is a critical one. He therefore has acute awareness of
          people’s decision-making processes and the consequences of
          these. Its these decisions that impact on people’s lives,
          from lost luggage to engine issues to landing in fog, every
          decision is critical and everyone has an impact on how the
          airline remain competitive minute by minute, if not second
          by second. When not flying the plastic jet he spends his
          time huddled over his laptop thrashing the keyboard and
          working on some project from embedded systems to .Net.
          Personal challenges are always part of Cliff’s spare time
          and as well as continuing to design computer software he is
          busy with family life of a Wife, 3 Boys and 2 dogs and is
          also a keen cyclist, with the Alps Passporte’s challenge as
          next year’s goal.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Clifford Agius: Twitter"
            href="https://twitter.com/CliffordAgius"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Clifford Agius: Website"
            href="https://www.cliffordagius.co.uk/"
          >
            Website
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
            list-style: inside;
            list-style-type: disc;
            text-align: left;
            flex-basis: 0;
            flex-grow: 1;
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
          }
        `}
      </style>
    </Layout>
  );
}
