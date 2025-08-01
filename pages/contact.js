import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Header
        title={'Contact'}
        banner="/static/banners/contact.jpg"
      />

      <section className="content-section" name="Contents">
        <h1 tabIndex="0">Contents</h1>

        <p tabIndex="0">
          <strong>
            <a href="#ontheday">On The Day</a>
          </strong>
        </p>
        <p tabIndex="0">
          <strong>
            <a href="#dddem">DDD East Midlands Accounts</a>
          </strong>
        </p>
        <p tabIndex="0">
          <strong>
            <a href="#rachelwatson">Rachel Watson</a>
          </strong>
        </p>
        <p tabIndex="0">
          <strong>
            <a href="#jessicawhite">
              Jessica Brentnall (prev. White)
            </a>
          </strong>
        </p>
        <p tabIndex="0">
          <strong>
            <a href="#moretonbrockley">
              Moreton Brentnall (prev. Brockley)
            </a>
          </strong>
        </p>
      </section>

      <section className="content-section" id="ontheday">
        <h1 tabIndex="0">On The Day</h1>
        <a name="dddem" />
        <p tabIndex="0">
          The two best ways to get in contact with the organisers on
          the day are:
        </p>
        <ul>
          <li tabIndex="0">At the information desk.</li>
          <li tabIndex="0">Through the volunteers.</li>
        </ul>
        <p tabIndex="0">
          We will try our upmost to always have one of us available at
          the information desk with the exception of during the
          opening and closing ceremonies.
        </p>
        <p tabIndex="0">
          If you want to get to one of us in particular on the day,
          the best way to reach us it through a volunteer. The
          volunteers will have contact details for the organisers
          which aren&apos;t available on this page that the organisers
          will be monitoring more closely on the day than their social
          media accounts.
        </p>
      </section>

      <section className="content-section" id="dddem">
        <h1 tabIndex="0">DDD East Midlands Accounts</h1>
        <a name="dddem" />
        <h2 tabIndex="0">Accounts Run By The Co-Organisers</h2>
        <ul>
          <li tabIndex="0">
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
              target="_blank"
              rel="noreferrer"
            >
              DDD East Midlands Limited
            </a>
          </li>
          <li tabIndex="0">
            <strong>Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/dddeastmidlands/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              @dddeastmidlands
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section" id="rachelwatson">
        <h1 tabIndex="0">Rachel Watson</h1>
        <a name="rachelwatson" />
        <div className="row">
          <div className="columnleft">
            <Image
              src="/static/organisers/rachel.jpg"
              alt=""
              className="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="columnright">
            <h2 tabIndex="0">Co-Organiser</h2>
            <ul tabIndex="0">
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

      <section className="content-section" id="jessicawhite">
        <h1>Jessica Brentnall (prev. White)</h1>

        <a name="jessicawhite" />
        <div className="row">
          <div className="columnleft">
            <Image
              src="/static/organisers/jess.jpg"
              alt=""
              className="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="columnright">
            <h2 tabIndex="0">Co-Founder and Co-Organiser</h2>
            <ul tabIndex="0">
              <li tabIndex="0">
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/jessica-brentnall/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jessica Brentnall
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" id="moretonbrockley">
        <h1 tabIndex="0">Moreton Brentnall (prev. Brockley)</h1>
        <a name="moretonbrockley" />
        <div className="row">
          <div className="columnleft">
            <Image
              src="/static/organisers/mort.jpg"
              alt=""
              className="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="columnright">
            <h2 tabIndex="0">Co-Founder and Co-Organiser</h2>
            <ul tabIndex="0">
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/moreton-brentnall/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Moreton Brentnall
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
