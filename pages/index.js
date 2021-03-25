import React from 'react';
import theme from '../theme/theme';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ImportantDatesList from '../components/home/ImportantDatesList';
import TieredCompanies from '../components/companies/TieredCompanies';
import dates from '../data/dates';
import gold from '../data/sponsors/gold';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>DDD East Midlands</title>
      </Head>

      {/* Switch statement takes the number of month as an expression.
  More number of cases can be added based on new banners that are supposed
  to be added for the months that are left out.
   */}

      {(() => {
        const monthNumber = new Date().getMonth() + 1;
        switch (monthNumber) {
          case 6:
            return (
              <Header
                title={'DDD East Midlands'}
                banner="
        /static/banners/pride-header.jpg"
              />
            );
          case 9:
          case 10:
          case 11:
            return (
              <Header
                title={'DDD East Midlands'}
                banner="
            /static/banners/autumn-header.jpg"
              />
            );
          case 12:
            return (
              <Header
                title={'DDD East Midlands'}
                banner="
        /static/banners/christmas-header.jpg"
              />
            );
          default:
            return (
              <Header
                title={'DDD East Midlands'}
                banner="
        /static/banners/home.jpg"
              />
            );
        }
      })()}

      <div className="banner">
        <h3 tabIndex="0">
          {' '}
          Returning 2nd October 2021 at
          <br />
          <a
            rel="noopener noreferrer"
            href="https://www.dddeastmidlands.com/information/venue-information/"
            target="_blank"
          >
            the Nottingham Conference Center
          </a>{' '}
        </h3>
      </div>

      <section>
        <p tabIndex="0">
          DDD East Midlands is an inclusive, not-for-profit technology
          conference happening on <b>2nd October 2021</b> that
          celebrates the unique tech, talent and companies that the
          East Midlands has to offer. This event is run by community
          members to promote collaboration and the amazing tech
          community that has already grown in the East Midlands.
        </p>
      </section>

      {/* Gold Sponsors */}
      <section>
        <h2>Gold Sponsors</h2>
        <TieredCompanies partners={gold} />
      </section>

      {/* Important Dates */}
      <section>
        <br />
        <br />
        <h2 tabIndex="0">Important Dates</h2>
        <ImportantDatesList dates={dates} />
      </section>

      {/* Principles */}
      <section>
        <br />
        <h2 tabIndex="0">Principles</h2>
        <p tabIndex="0">
          This conference follows these DDD principles:
        </p>
        <ul>
          <li tabIndex="0">
            The event is hosted on a Saturday so that attendees do not
            have to take time from work.
          </li>
          <li tabIndex="0">Tickets to attend the event are free.</li>
        </ul>
        <p tabIndex="0">As well as these following principles:</p>
        <ul>
          <li tabIndex="0">All talk submissions are anonymous.</li>
          <li tabIndex="0">
            There is a democratic selection process for talks
            involving attendees voting for what they want to see.
          </li>
          <li tabIndex="0">
            The event is arranged with the community in mind.
          </li>
        </ul>
        <p tabIndex="0">
          To find out more, see our{' '}
          <a href="/information/main-page">information pages</a>. If
          you are interested in sponsoring the event please
          <a href="/2020/sponsor">
            fill in the sponsorship interest form.
          </a>
        </p>
        <br />
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          h2 {
            text-align: center;
          }
          h3 {
            text-align: center;
          }
          .subheader {
            margin: 0px;
            padding-bottom: 15px;
          }
          .banner {
            text-align: center;
            padding: 5px 5px;
            background: ${theme.palette.primary};
            color: ${theme.palette.light};
          }
          .banner a {
            text-align: center;
            color: ${theme.palette.light};
          }
          .infolink {
            margin: 10px;
          }
        `}
      </style>
    </Layout>
  );
}
