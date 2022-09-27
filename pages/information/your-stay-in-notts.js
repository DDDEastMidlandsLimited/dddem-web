import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import Image from 'next/image';

export default function YourStayInNotts() {
  return (
    <Layout>
      <Head>
        <title>Your Stay In Nottingham</title>
      </Head>
      <Header
        title={'Your Stay In Nottinghams'}
        banner="/static/banners/activities.jpg"
      />

      <section>
        <h1 tabIndex="0">
          Where to stay, see and eat in Nottingham.
        </h1>

        <a name="sponsor" />
        <p tabIndex="0">
          While you are in Nottingham there are many ways to enjoy the
          city, so stay a while and make the most of it! This list
          will keep getting up dated on the run up to the event with
          more and more things to see do and eat!
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Hotels</h2>

        <a name="hotels" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://www.ihg.com/crowneplaza/hotels/gb/en/nottingham/notws/hoteldetail"
              target="_blank"
              rel="noreferrer"
            >
              Crowne Plaza
            </a>
          </li>
          <li>
            <a
              href="https://www.travelodge.co.uk/hotels/290/Nottingham-Central-hotel"
              target="_blank"
              rel="noreferrer"
            >
              Travel Lodge
            </a>
          </li>
          <li>
            <a
              href="https://all.accor.com/hotel/6160/index.en.shtml?dateIn=&nights=&compositions=1&stayplus=false#origin=ibis"
              target="_blank"
              rel="noreferrer"
            >
              Ibis
            </a>
          </li>
          <li>
            <a
              href="https://www.bwnottinghamcitycentre.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Best Western
            </a>
          </li>
          <li>
            <a
              href="https://all.accor.com/hotel/8061/index.en.shtml?dateIn=&nights=&compositions=1&stayplus=false#origin=ibis"
              target="_blank"
              rel="noreferrer"
            >
              Mercure
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Food</h2>
        <a name="food" />
        <h4 tabIndex="0">Breakfast</h4>
        <a name="breakfast" />

        <ul tabIndex="0">
          <li>
            <a
              href="https://anniesburgershack.com/menu/breakfast-menu"
              target="_blank"
              rel="noreferrer"
            >
              Annies
            </a>
          </li>
          <li>
            <a
              href="https://www.thepuddingpantry.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Pudding Pantry
            </a>
          </li>
          <li>
            <a
              href="https://www.yolknotts.com/breakfast"
              target="_blank"
              rel="noreferrer"
            >
              Yolk
            </a>
          </li>
          <li>
            <a
              href="https://cartwheelcoffee.com/pages/nottingham-cafe"
              target="_blank"
              rel="noreferrer"
            >
              Cartwheel Coffeehouse
            </a>
          </li>
          <li></li>
        </ul>

        <h4 tabIndex="0">Dinner</h4>
        <a name="breakfast" />

        <ul tabIndex="0">
          <li>Oscar and Rosies</li>
          <li>Annies Burger Shack</li>
          <li>Yamas</li>
          <li>Coco Tang</li>
          <li>Pistachio</li>
          <li>Bonzai</li>
          <li>Street Food Club</li>
          <li>Bar Iberico</li>
          <li>Revolution De Cuba</li>
          <li>Turtle Bay</li>
          <li>Hand on Heart</li>
          <li>Wagamamas</li>
          <li>Reds True Barbecue</li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Coffee</h2>

        <a name="coffee" />
        <ul tabIndex="0">
          <li>Cartwheel</li>
          <li>200 Degrees</li>
          <li>Outpost</li>
          <li>Blend</li>
          <li>The Specialty Coffee Shop</li>
        </ul>
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

          .smallpageimage {
            max-width: 100%;
            height: 95%;
            padding: 5px 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
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
