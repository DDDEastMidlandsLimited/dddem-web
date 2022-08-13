import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import SponsorButton from '../../components/sponsorship/SponsorButton';
import SponsorshipTiersList from '../../components/sponsorship/SponsorshipTiersList';
import sponsorship from '../../data/sponsorship/sponsorship';
import Image from 'next/image';

export default function Sponsor() {
  return (
    <Layout>
      <Head>
        <title>Sponsor</title>
      </Head>
      <Header
        title={'Sponsor'}
        banner="/static/banners/sponsor.jpg"
      />

      <section id="indicating-interest">
        <h1 tabIndex="0">Indicating Interest to Sponsor</h1>

        {/* is there a pack? */}
        <a name="sponsor" />
        <h2 tabIndex="0">
          Are there still opportunities to sponsor?
        </h2>
        <p tabIndex="0">Yes there is!</p>

        {/* Sponsorship Status */}
        <a name="sponsorship-status" />
        <h2 tabIndex="0">Sponsorship Status</h2>
        <SponsorshipTiersList sponsorship={sponsorship} />

        {/* is there a pack? */}
        <a name="sponsorship-pack" />
        <h2 tabIndex="0">Is there a sponsorship pack?</h2>
        <p tabIndex="0">
          Yes! Get in touch with Rachel. She will let you know which
          sponsorship tiers and opportunities are still available and
          will send you a copy of the sponsorship pack.
        </p>

        <a name="submitting-interest" />
        <h2 tabIndex="0">Get in touch with Rachel</h2>
        <p tabIndex="0">
          Rachel is the point of contact for all sponsors and
          partners. Get in touch with her and she will work with you
          to ensure you get what you need while supporting the
          conference. There are a number of tiers, with different
          benefits and price tags, so there should be something that
          is right for you.
        </p>

        {/* Rachel pic and links */}
        <div className="row">
          <div className="columnleft">
            <Image
              src="/static/organisers/rachel.jpg"
              alt=""
              className="picture"
            />
          </div>
          <div className="columnright">
            <ul tabIndex="0">
              <li tabIndex="0">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:rachel@dddeastmidlands.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rachel At DDD East Midlands
                </a>
              </li>
              <li tabIndex="0">
                <strong>Twitter:</strong>{' '}
                <a
                  href="https://twitter.com/missracheybaby"
                  target="_blank"
                  rel="noreferrer"
                >
                  @missracheybaby
                </a>
              </li>
              <li tabIndex="0">
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/rachelwatsondistinct/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rachel Watson
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SponsorButton />
        <br />
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section div {
            padding-bottom: 10px;
          }

          .picture {
            width: 150px;
            border-radius: 50%;
          }

          @media only screen and (max-width: 810px) {
            .picture {
              display: none;
            }
          }
        `}
      </style>
    </Layout>
  );
}
