import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';

export default function Sponsor() {
  return (
    <Layout>
      <Head>
        <title>Why would my company sponsor</title>
      </Head>
      <Header
        title={'Sponsor'}
        banner="/static/banners/sponsor.jpg"
      />

      <section id="indicating-interest">
        <h1 tabIndex="0">
          Why would my company sponsor? What is in it for us?
        </h1>

        <a name="sponsor" />
        <p tabIndex="0">
          There are many reasons to sponsor DDD East Midlands - Maybe
          your company is well-established in the East Midlands and
          you want to have a presence at the regions' only local tech
          conference? Or maybe your tech teams are doing great things
          and you want to shout about it? Maybe you're just starting
          up and you want to get some exposure to some of the best
          techies in the area? Whatever YOUR reason, previous sponsors
          have sighted their main reasons for sponsoring as:
        </p>
        <li tabIndex="0">
          Improving brand-recognition within the local tech community
        </li>
        <li tabIndex="0">
          <a href="#recruitment">
            Recruitment and building connections across the community
          </a>
        </li>
        <li tabIndex="0">
          <a href="#free-training">Free training</a>
        </li>
        <li tabIndex="0">
          <a href="#marketing">
            Marketing - In and out of DDD East Midlands
          </a>
        </li>
        <li tabIndex="0">
          <a href="#exhibition">Exhibition booth</a>
        </li>
        <li tabIndex="0">
          <a href="#community">
            Supporting and endorsing the local tech community
          </a>
        </li>
      </section>

      <section id="recruitment">
        <a name="recruitment" />
        <h2 tabIndex="0">
          Recruitment and building connections across the community
        </h2>
        <p tabIndex="0">
          At a time when companies are fighting for the best technical
          talent, taking a booth at DDD East Midlands is a great way
          to show potential recruits why they should be applying to
          you directly and to get attention from the sort of
          professionals you are targeting whilst avoiding recruitment
          fees.
        </p>
        <p tabIndex="0">
          Whether you have a booth at DDD East Midlands or are
          sponsoring the bathroom baskets at the event, this is a
          fantastic opportunity for getting seen by and getting to
          know the best of the best in the East Midlands technology
          scene.
        </p>
      </section>

      <section id="free-training">
        <a name="free-training" />
        <h2 tabIndex="0">Free training</h2>
        <p tabIndex="0">
          All of the sponsorship tiers include guaranteed tickets to
          the event. The employees you send will be able to enjoy the
          conference, learn from the talks and gain as much as an
          attendee, saving some serious money out of your training
          budgets and coming back with some new ideas to try!
        </p>
      </section>

      <section id="marketing">
        <a name="marketing" />
        <h2 tabIndex="0">Marketing - Reaching a wider audience</h2>
        <p tabIndex="0">
          Not only have we seen that our website and blog have a
          global reach, but people attend DDD East Midlands from all
          over the UK.
        </p>
      </section>

      <section id="exhibition">
        <a name="exhibition" />
        <h2 tabIndex="0">Exhibition booth</h2>
        <p tabIndex="0">
          Some of the sponsorship opportunities include having a booth
          in the exhibition space. This includes the opportunity to
          decorate this space in any way you see fit: with banners,
          tablecloth, games, swag and more.
        </p>
        <p tabIndex="0">
          Potential recruits will approach to find out if your company
          is right for their next move, or you can have the
          opportunity to turn the eye of some top talent that isn’t
          even aware they are looking. Show off the parts of your
          company and culture you are especially proud of.
        </p>
        <p tabIndex="0">
          Representatives from other companies may also come to find
          out more about your product with the idea of collaborating
          and integrating with you.
        </p>
        <p tabIndex="0">
          You could take this opportunity to run a competition at your
          booth go get attendees interactively involved. Competitions
          are a great way to make a positive and lasting impression.
          We announce the winners of competitions at the end of the
          day.{' '}
        </p>
      </section>

      <section id="community">
        <a name="community" />
        <h2 tabIndex="0">
          Supporting and endorsing the local tech community
        </h2>
        <p tabIndex="0">
          As is probably made clear by now, a key focus of DDD East
          Midlands is giving back to, celebrating and promoting the
          outstanding tech community that has grown in and across the
          East Midlands.
        </p>
        <p tabIndex="0">
          By sponsoring this event you will be supporting this amazing
          community and helping DDD East Midlands to promote it
          nationally, if not globally. We are sure you are as invested
          in the East Midlands tech community and the talent produced
          by it as much as we are, and we thank you for considering
          providing your support.
        </p>
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
