import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import SponsorButton from '../../components/sponsorship/SponsorButton';
import Image from 'next/image';
import Link from 'next/link';

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

      <div className="sponsor-page">
        <section className="content-section" id="event-details">
          <h1 tabIndex="0">Event Details</h1>
          <a name="sponsorship-pack" />
          <p tabIndex="0">
            <b>Date:</b> 7th October 2023
          </p>
          <p tabIndex="0">
            <b>Venue:</b> The Nottingham Conference Centre, 30 Burton
            St, Nottingham NG1 4BU.
          </p>
          <p tabIndex="0">
            <b>Attendees:</b> The event is for anyone who works in or
            is interested in technology. From students to business
            owners, we have between 350 - 400 attendees all with the
            desire to learn, network and find out about the various
            exciting opportunities within the East Midlands.
          </p>
          <p tabIndex="0">
            <b>Advertising:</b> We’re always working with the local
            communities, user groups, boot camps, universities and
            even local businesses to help grow and promote our great
            Community. We promote the event mostly on social media and
            our website.
          </p>
          <p tabIndex="0">
            <b>Attendee Ticket:</b> Tickets are FREE and include
            access to the full conference, an opportunity to vote on
            what talks they want to see at the event, full catering,
            access to the exhibition space and all activities.
          </p>
        </section>

        <section className="content-section">
          <div className="center">
            <iframe
              width="540"
              height="315"
              src="https://www.youtube.com/embed/e0ETxkb_gSk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              layout="responsive"
              display="block"
              className="responsive"
            ></iframe>
          </div>
        </section>

        <section className="content-section" id="sponsor-info">
          <h1 tabIndex="0">Want More Information?</h1>
          <p tabIndex="0">
            For more information on the sponsorship tiers available,
            head to the{' '}
            <Link href="/sponsor/sponsorship-tiers" rel="noreferrer">
              {' '}
              sponsorship tier page
            </Link>
          </p>
          <p tabIndex="0">
            Here are some pages with more information relating to
            sponsoring the event.
          </p>
          <ul>
            <li tabIndex="0">
              <a href="../why-sponsor" rel="noreferrer">
                Why Sponsor?
              </a>
            </li>
            <li tabIndex="0">
              <a
                href="../../information/event-activities/"
                rel="noreferrer"
              >
                Event Activities
              </a>
            </li>
            <li tabIndex="0">
              <a href="../testimonials" rel="noreferrer">
                Testimonials
              </a>
            </li>
            <li tabIndex="0">
              <a
                href="../social-responsibility"
                rel="noreferrer"
              >
                Social Responsibility
              </a>
            </li>
          </ul>
        </section>

        <section className="content-section" id="indicating-interest">
          <h1 tabIndex="0">Indicating Interest to Sponsor</h1>
          <a name="sponsorship-pack" />
          <h2 tabIndex="0">Is there a sponsorship pack?</h2>
          <p tabIndex="0">
            Yes! Get in touch with Rachel. She will let you know which
            sponsorship tiers and opportunities are still available
            and will send you a copy of the sponsorship pack.
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
        </section>

        <section className="content-section" id="get-in-touch">
          {/* Rachel pic and links */}
          <div className="row">
            <div className="columnleft">
              <Image
                src="/static/organisers/rachel.png"
                alt="Picture of Rachel smiling"
                className="picture-small"
                height="200"
                width="200"
              />
            </div>
            <div className="columnright">
              <ul tabIndex="0">
                <li tabIndex="0">
                  <strong>Email:</strong> Rachel (At) DDD East
                  Midlands . com
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
        </section>
      </div>
    </Layout>
  );
}
