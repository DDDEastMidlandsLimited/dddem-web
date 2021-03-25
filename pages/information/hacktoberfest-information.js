import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default function HacktoberfestInformation() {
  return (
    <Layout>
      <Head>
        <title>Hacktoberfest</title>
      </Head>
      <Header
        title={'Hacktoberfest'}
        banner="/static/banners/information/hacktober.jpg"
      />

      <section>
        <h1 tabIndex="0">The Hacktoberfest Corner</h1>
        <p tabIndex="0">
          Join{' '}
          <a
            target="_blank"
            href="https://annadodson.co.uk"
            rel="noreferrer"
          >
            Anna Dodson
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://www.jvt.me"
            rel="noreferrer"
          >
            Jamie Tanna
          </a>{' '}
          at their Hacktoberfest stand, where you&apos;ll be able to
          learn all about{' '}
          <a href="https://hacktoberfest.digitalocean.com/">
            Hacktoberfest
          </a>
          , a month-long celebration of Free and Open Source software.
        </p>
        <p tabIndex="0">
          Anna and Jamie will tell you all about Hacktoberfest, the
          great Free and Open Source causes you can contribute to over
          the month, and the cool swag you can get by contributing.
        </p>
        <p tabIndex="0">
          Anna and Jamie will also be bringing their own
          limited-edition stickers for those who manage to contribute
          to an Free or Open Source project during the day!
        </p>

        <h3 tabIndex="0">About Hacktoberfest</h3>
        <div className="row">
          <div className="columnleft">
            <img
              src="/static/hacktoberfest.svg"
              alt="Hacktoberfest 2019 Logo"
              className="speakerpic"
            />
          </div>
          <div className="columnright">
            <p tabIndex="0">
              <i>Hacktoberfest</i>
            </p>
            <p tabIndex="0">
              Hacktoberfest is a month-long celebration of Free and
              Open Source software during October, which is organised
              by{' '}
              <a href="https://www.digitalocean.com/">
                Digital Ocean
              </a>{' '}
              and sponsored by <a href="https://dev.to">DEV</a>, and
              aims to get more folks dipping their toes in
              contributing to Free and Open Source software, and
              showing everyone that there&apos;s more to a project
              than just code!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 tabIndex="0">Want to take part?</h1>
        <p tabIndex="0">
          If you would like to contribute there is a lot of
          opportunity to do so. At the 2021 event Anna and Jamie will
          be promoting a lot of great opportunities - including
          (hopefully) a sponsor challenge. There are also numerous
          ways in which you can contribute to the DDD East Midlands
          website and blog. To find out more information about how to
          contribute to the DDD East Midlands pages
          <a
            target="_blank"
            href="https://blog.dddeastmidlands.com/2019/10/10/how-to-pr-with-your-post.html"
            rel="noreferrer"
          >
            {' '}
            read through this blog post by Marcus Noble.
          </a>
        </p>
        <p tabIndex="0">
          <a
            target="_blank"
            href="https://blog.dddeastmidlands.com/2019/10/26/hacktoberfest-corner.html"
            rel="noreferrer"
          >
            {' '}
            You can also see some peoples contributions from DDD East
            Midlands Conference here.
          </a>
        </p>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section center-video {
            text-align: center;
          }
          .columnright {
            padding: 10px;
            float: right;
            width: 70%;
          }

          .columnleft {
            padding: 10px;
            float: left;
            width: 25%;
          }

          .row:after {
            content: '';
            display: table;
            clear: both;
          }

          .speakerpic {
            width: 95%;
            border-radius: 50%;
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
            padding: 10px;
            flex-flow: row;
            justify-content: space-evenly;
            flex-wrap: nowrap;
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

          @media only screen and (max-width: 810px) {
            .speakerpic {
              display: none;
            }
            .columnright {
              width: 100%;
              padding-top: 0px;
            }
            .columnleft {
              padding-top: 0px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
