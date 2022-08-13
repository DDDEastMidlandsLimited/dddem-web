import React from 'react';
import theme from '../theme/theme';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ImportantDatesList from '../components/home/ImportantDatesList';
import dates from '../data/dates';
import SponsorButton from '../components/sponsorship/SponsorButton';
import Image from 'next/image';

export default function Index() {
  return (
    <Layout>
      <Header banner="/static/banners/home.jpg" />

      <h3>Developer! Developer! Developer! East Midlands</h3>

      <section>
        <div className="row">
          <p tabIndex="0">
            DDD East Midlands is an inclusive, not-for-profit
            technology conference happening on <b>7th October 2023</b>{' '}
            that celebrates the unique tech, talent and companies that
            the East Midlands has to offer. This event is run by
            community members to promote collaboration and the amazing
            tech community that has already grown in the East
            Midlands.
          </p>
        </div>
      </section>

      <section>
        <div>
          <Image
            className="pageimage"
            src="/static/pageimage/happy.jpg"
            alt={`Image of the attendees of DDD East Midlands Conference 2019 seated in red auditorium seating.`}
            height="100"
            width="200"
            layout="responsive"
          />
        </div>
      </section>

      {/* Gold Sponsors */}
      {/*       <section>
        <h2>Gold Sponsors</h2>
        <h3>To be confirmed</h3>
        <GoldSponsorLogos />
        <TieredCompanies partners={gold} />
      </section> */}

      {/* Silver Sponsors */}
      <section>
        <h2>Sponsors</h2>
        <SponsorButton />
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
            color: ${theme.palette.primary};
          }

          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }
          .column {
            display: flex;
            flex-direction: column;
            flex-basis: 80%;
            flex: 1;
            padding: 5px 5px;
            margin-left: 15px;
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

          .platinum {
            text-align: center;
            padding: 5px 5px;
          }

          .pageimage {
            object-fit: contain;
            text-align: center;
            max-width: 100%;
            padding: 5px 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .info-text {
            padding: 1% 5%;
          }

          .silver {
            margin: auto;
            width: 35%;
          }

          .infolink {
            margin: 10px;
          }
          .silver {
            text-align: center;
            width: 70%;
          }
        `}
      </style>
    </Layout>
  );
}
