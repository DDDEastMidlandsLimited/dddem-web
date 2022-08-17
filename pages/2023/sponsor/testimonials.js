import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <Layout>
      <Head>
        <title>Testimonials</title>
      </Head>
      <Header
        title={'Testimonials'}
        banner="/static/banners/testimonials.jpg"
      />

      <section id="intro">
        <a name="intro" />
        <p tabIndex="0">
          Don't take our word for it, hear from our past sponsors,
          speakers and attendees about what they thought of the past
          events here:
        </p>
      </section>

      <section id="sponsor-testimonials">
        <h2 tabIndex="0">From our past sponsors</h2>
      </section>

      <section>
        <div className="row">
          <div className="column">
            <div>
              <Image
                className="smallpageimage"
                src="/static/sponsorship/testimonials/bjss.png"
                alt={`Image of BJSS.`}
                height={200}
                width={200}
                layout="responsive"
              />
            </div>
          </div>
          <div className="column info-text">
            <a name="bjss" />
            <p tabIndex="0">
              <i>
                “We love supporting DDD East Midlands and always have
                lots of great conversations with delegates throughout
                the day. We love being part of the vibrant technology
                scene and look forward to being yet more involved as
                we continue to grow across Nottingham, Yorkshire and
                the Midlands.”
              </i>
            </p>
            <b tabIndex="0" className="pink">
              BJSS,
            </b>
            <i tabIndex="0" className="grey">
              GOLD SPONSOR FOR DDD EAST MIDLANDS 2019 and SILVER
              SPONSOR FOR DDD EAST MIDLANDS 2021
            </i>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="column">
            <div>
              <a name="ert" />
              <p tabIndex="0">
                <i>
                  "We sponsored DDD East Midlands because we wanted to
                  improve our brand recognition in the local area,
                  hoping it would help us to hire the best developers
                  locally. Following the conference we arranged 6
                  interviews with delegates we had met on the day!"
                </i>
              </p>
              <b tabIndex="0" className="pink">
                ERT / CLARIO,
              </b>
              <i tabIndex="0" className="grey">
                GOLD SPONSOR FOR DDD EAST MIDLANDS 2021
              </i>
            </div>
          </div>
          <div className="column info-text">
            <Image
              className="smallpageimage"
              src="/static/sponsorship/testimonials/ert.png"
              alt={`Image of ERT.`}
              height={200}
              width={200}
              layout="responsive"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="column">
            <div>
              <Image
                className="smallpageimage"
                src="/static/sponsorship/testimonials/oakbrook.png"
                alt={`Image of Oakbrook`}
                height={200}
                width={200}
                layout="responsive"
              />
            </div>
          </div>
          <div className="column info-text">
            <a name="oakbrook" />
            <p tabIndex="0">
              <i>
                “Our reason to support DDD East Midlands was to
                further integrate ourselves into the local tech
                community. Several of our team submitted talks & were
                selected to speak on the day, plus we had a great turn
                out at our booth where we were able to showcase the
                great stuff we’re doing here at Oakbrook. We have
                found it easier to attract talent since the day, and
                one of our team has even gone on to talk at other
                events!”
              </i>
            </p>
            <b tabIndex="0" className="pink">
              OAKBROOK FINANCE,
            </b>
            <i tabIndex="0" className="grey">
              SILVER SPONSOR FOR DDD EAST MIDLANDS 2021
            </i>
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

          section div {
            padding-bottom: 10px;
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

          .picture {
            width: 150px;
            border-radius: 50%;
          }

          .pink {
            color: ${theme.palette.secondary};
          }

          .grey {
            color: ${theme.palette.quaternary};
          }

          .smallpageimage {
            width: 80%;
            margin: 10px;
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
