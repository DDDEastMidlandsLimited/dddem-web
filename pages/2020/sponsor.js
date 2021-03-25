import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import SponsorButton from '../../components/sponsorship/SponsorButton';

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
            <img
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

      <section id="sponsorship-agreed">
        <h1 tabIndex="0">
          Once your support level has been confirmed.
        </h1>
        <a name="contract" />
        <h2 tabIndex="0">
          The process of becoming a sponsor or partner.
        </h2>
        <p tabIndex="0">
          <strong>
            Once a company and Rachel have agreed on the sponsorship
            opportunity and terms:
          </strong>
        </p>
        <ul tabIndex="0">
          <li> Send Rachel your Companies House details/link.</li>
          <li> We will send you a contract to sign using Eversign</li>
          <li> We will co-sign the contract on Eversign.</li>
          <li> Arrange the payment you wish to use.</li>
          <li> An invoice for the agreed amount will be sent.</li>
          <li>
            {' '}
            There may be assets we have asked for such as logos or
            company description. Please send these over early so that
            we can make any website and social media changes.
          </li>
          <li>
            {' '}
            Once the amount has been paid - you will receive the
            benefits outlined by the agreement.
          </li>
          <li>
            {' '}
            Your support will be announced on our social media
            channels.
          </li>
        </ul>
        <br />
      </section>

      <a name="covid19" />
      <section id="covid19">
        <h1 tabIndex="0"> How Will COVID-19 Affect Sponsorship?</h1>
        <p tabIndex="0">
          With the current state of play, we understand that you may
          be curious as to what our plans are around COVID-19. We want
          to ensure everyone&apos;s safety, while providing a good
          experience for our sponsors.
        </p>
        <h4>Plan A: Conference Goes Ahead</h4>
        <p tabIndex="0">
          As the event is happening in October, we are far enough
          ahead in the future that the pandemic <i>might</i> not
          effect our event. If that is the case, we will be going
          ahead as planned on October the 2nd 2021.
        </p>
        <h4>Backup Plans: Social distance or postpone</h4>
        <p tabIndex="0">
          The safety of all involved is our greatest concern. We will
          rely on our own judgement as well as government guidelines
          to inform us if we can do a full in person event.
        </p>
        <p tabIndex="0">
          In the case this is not possible, our venue has precautions
          in place to enforce social distancing, or if we have to go
          into another lock down, we have arranged a date to postpone
          to in 2022.
        </p>
        <br />
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
