import React from 'react';
import theme from '../../theme/theme';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

export default function SponsorshipPack() {
  return (
    <Layout>
      <Header banner="/static/banners/home.jpg" />

      <section>
        <h1>Sponsor 2023</h1>
      </section>
      <section>
        <div className="row">
          <div className="column">
            <div className="platinum">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1ATh2PbQx1Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="column info-text">
            <p tabIndex="0">
              DDD East Midlands is an inclusive, not-for-profit
              technology conference happening on{' '}
              <b>7th October 2023</b>.
            </p>
            <p tabIndex="0">
              There are talks, exhibition spaces, hacktober support,
              coffee, food, networking and MORE. See{' '}
              <a>our testimony page</a> to hear more from our
              attendees, sponsors and speakers about past events.
            </p>
          </div>
        </div>
      </section>

      {/*       <section>
            <div className="platinum">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1ATh2PbQx1Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div>
          <p tabIndex="0">
            Bacon ipsum dolor amet turducken chuck andouille pork pork
            loin. Hamburger kevin frankfurter shankle meatball doner.
            Spare ribs salami turkey ribeye, biltong capicola t-bone
            pastrami. Filet mignon alcatra ham jerky cow doner. Ground
            round fatback pork belly biltong spare ribs strip steak.
            Leberkas andouille landjaeger drumstick bresaola, corned
            beef tenderloin frankfurter strip steak ground round pork
            loin picanha pig spare ribs short ribs. Short ribs salami
            cupim beef, shankle fatback pig hamburger drumstick
            tri-tip. Tongue doner drumstick pork chop. Beef ribs pig
            t-bone, cupim pork loin doner alcatra leberkas pork chop
            buffalo ribeye spare ribs.
          </p>
        </div>
      </section> */}

      <section>
        <h2>Platinum Sponsor</h2>
      </section>
      <section>
        <div>
          <img
            className="pageimage"
            src="/static/pageimage/happy.jpg"
            alt={`Image of the attendees of DDD East Midlands Conference 2019 seated in red auditorium seating.`}
          />
        </div>
        <div>
          <p tabIndex="0">
            Bacon ipsum dolor amet turducken chuck andouille pork pork
            loin. Hamburger kevin frankfurter shankle meatball doner.
            Spare ribs salami turkey ribeye, biltong capicola t-bone
            pastrami. Filet mignon alcatra ham jerky cow doner. Ground
            round fatback pork belly biltong spare ribs strip steak.
            Leberkas andouille landjaeger drumstick bresaola, corned
            beef tenderloin frankfurter strip steak ground round pork
            loin picanha pig spare ribs short ribs. Short ribs salami
            cupim beef, shankle fatback pig hamburger drumstick
            tri-tip. Tongue doner drumstick pork chop. Beef ribs pig
            t-bone, cupim pork loin doner alcatra leberkas pork chop
            buffalo ribeye spare ribs.
          </p>
          <p>
            <b>Benefits of Platinum</b>
          </p>
          <li>
            <b>Blah Blah:</b> Bacon ipsum dolor amet turducken chuck
            andouille pork pork loin. Hamburger kevin frankfurter
            shankle meatball doner. Spare ribs salami turkey ribeye,
            biltong capicola t-bone pastrami. Filet mignon alcatra ham
            jerky cow doner. Ground round fatback pork belly biltong
            spare ribs strip steak.
          </li>
          <li>
            <b>Blah Blah:</b> Bacon ipsum dolor amet turducken chuck
            andouille pork pork loin. Hamburger kevin frankfurter
            shankle meatball doner. Spare ribs salami turkey ribeye,
            biltong capicola t-bone pastrami. Filet mignon alcatra ham
            jerky cow doner. Ground round fatback pork belly biltong
            spare ribs strip steak.
          </li>
        </div>
      </section>

      <section>
        <h2>Gold</h2>
      </section>
      <section>
        <div className="row">
          <div className="column">
            <div className="platinum">
              <p tabIndex="0">
                DDD East Midlands is an inclusive, not-for-profit
                technology conference happening on{' '}
                <b>7th October 2023</b>.
              </p>
            </div>
          </div>
          <div className="column info-text">
            <img
              className="pageimage"
              src="/static/sponsorship/gold.jpg"
              alt={`Image of the attendees of DDD East Midlands Conference 2019 seated in red auditorium seating.`}
            />
          </div>
        </div>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          h1 {
            text-align: center;
            color: ${theme.palette.primary};
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
            text-align: center;
            max-width: 100%;
            height: auto;
            padding: 5px 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
          }

          .smallpageimage {
            max-width: 100%;
            height: auto;
            padding: 5px 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
          }

          . iframe {
            align: center;
            display: block;
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
