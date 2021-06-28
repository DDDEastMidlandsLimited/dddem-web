import React from 'react';
import theme from '../theme/theme';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ExternalLink from '../components/ExternalLink';
import ImportantDatesList from '../components/home/ImportantDatesList';
import TieredCompanies from '../components/companies/TieredCompanies';
import GoldSponsorLogos from '../components/companies/GoldSponsorLogos';
import SilverSponsorLogos from '../components/companies/SilverSponsorLogos';
import dates from '../data/dates';
import platinum from '../data/sponsors/platinum';
import gold from '../data/sponsors/gold';
import silver from '../data/sponsors/silver';

export default function Index() {
  return (
    <Layout>
      <Header
        banner="/static/banners/home.jpg"
      />

      <section>
      <div className="row">
        <div className="column">
          <div className="platinum" >
          <h2 tabIndex="0">Platinum Sponsor</h2>
          <ExternalLink
            href={platinum[0].link}
            target="_blank"
            category="logo"
            eventType="Calyx"
            rel="noopener noreferrer"
          >
            <img
              src={platinum[0].image}
              alt={`Click to go to the ${platinum[0].name} site`}
              className=""
            />
          </ExternalLink>
          </div>
        </div>
        <div className="column info-text">
          <p tabIndex="0">
            DDD East Midlands is an inclusive, not-for-profit technology
            conference happening on <b>2nd October 2021</b> that
            celebrates the unique tech, talent and companies that the
            East Midlands has to offer. This event is run by community
            members to promote collaboration and the amazing tech
            community that has already grown in the East Midlands.
          </p>
        </div>
      </div>
      </section>

      <section>
        <div>
          <img
                className="pageimage"
                src="/static/pageimage/happy.jpg"
              />
        </div>
      </section>

      {/* Gold Sponsors */}
      <section>
        <h2>Gold Sponsors</h2>
        <GoldSponsorLogos />
        <TieredCompanies partners={gold} />
      </section>

      {/* Silver Sponsors */}
      <section>
        <h2>Silver Sponsors</h2>
        <div className="silver">
          <SilverSponsorLogos />
          <TieredCompanies partners={silver} />
        </div>
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

          .pageimage{
            text-align: center;
            max-width: 100%;
            height: auto;
            padding: 5px 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
          }

          .info-text{
            padding: 1% 5%;
          }

          .silver {
            margin: auto;
            width: 35%;
          }
            
          .infolink {
            margin: 10px;
          }
        `}
      </style>
    </Layout>
  );
}
