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
              Cartwheel Coffee
            </a>
          </li>
          <li></li>
        </ul>

        <h4 tabIndex="0">Dinner</h4>
        <a name="breakfast" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://www.oscarandrosies.com/"
              target="_blank"
              rel="noreferrer"
            >
              Oscar and Rosies
            </a>
          </li>
          <li>
            <a
              href="https://anniesburgershack.com/menu/main-menu"
              target="_blank"
              rel="noreferrer"
            >
              Annies Burger Shack
            </a>
          </li>
          <li>
            <a
              href="https://www.yamas.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Yamas
            </a>
          </li>
          <li>
            <a
              href="https://www.cocotang.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Coco Tang
            </a>
          </li>
          <li>
            <a
              href="https://www.pistachionottingham.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Pistachio
            </a>
          </li>
          <li>
            <a
              href="http://www.bonzai-japaneserestaurant.co.uk/our-menus.html"
              target="_blank"
              rel="noreferrer"
            >
              Bonzai
            </a>
          </li>
          <li>
            <a
              href="https://www.streetfoodclub.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Street Food Club
            </a>
          </li>
          <li>
            <a
              href="https://www.baribericotapas.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bar Iberico
            </a>
          </li>
          <li>
            <a
              href="https://www.revoluciondecuba.com/bar/nottingham/menus/?scroll=1"
              target="_blank"
              rel="noreferrer"
            >
              Revolution De Cuba
            </a>
          </li>
          <li>
            <a
              href="https://turtlebay.co.uk/menu"
              target="_blank"
              rel="noreferrer"
            >
              Turtle Bay
            </a>
          </li>
          <li>
            <a
              href="https://www.wagamama.com/restaurants/nottingham/nottingham"
              target="_blank"
              rel="noreferrer"
            >
              Wagamamas
            </a>
          </li>
          <li>
            <a
              href="https://truebarbecue.com/nottingham/"
              target="_blank"
              rel="noreferrer"
            >
              Reds True Barbecue
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Coffee</h2>
        <a name="coffee" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://cartwheelcoffee.com/pages/nottingham-cafe"
              target="_blank"
              rel="noreferrer"
            >
              Cartwheel
            </a>
          </li>
          <li>
            <a
              href="https://200degs.com/pages/nottingham-shop-flying-horse-walk"
              target="_blank"
              rel="noreferrer"
            >
              200 Degrees
            </a>
          </li>
          <li>
            <a
              href="https://outpost.coffee/"
              target="_blank"
              rel="noreferrer"
            >
              Outpost
            </a>
          </li>
          <li>
            <a
              href="https://www.blendnottingham.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Blend
            </a>
          </li>
          <li>
            <a
              href="https://www.thespecialtycoffeeshop.com/"
              target="_blank"
              rel="noreferrer"
            >
              The Specialty Coffee Shop
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Ales</h2>
        <a name="ales" />
        <p tabIndex="0">
          This page has an excellent list of
          <a
            href="https://www.nottinghamcraftbeer.co.uk/venues"
            target="_blank"
            rel="noreferrer"
          >
            Craft Beer Venues.
          </a>{' '}
          We have a lot of local brews for you to try and cosy venues
          to try them in!
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Cocktails</h2>
        <a name="cocktails" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://www.tiltbar.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Tilt
            </a>
          </li>
          <li>
            <a
              href="https://www.fourhundredrabbits.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              400 Rabbits
            </a>
          </li>
          <li>
            <a
              href="http://thewalrusnottingham.com/"
              target="_blank"
              rel="noreferrer"
            >
              The Walrus
            </a>
          </li>
          <li>
            <a
              href="https://www.bocalima.com/"
              target="_blank"
              rel="noreferrer"
            >
              Boca Lima
            </a>
          </li>
          <li>
            <a
              href="https://www.lostpropertynottingham.co.uk/thelostcaves"
              target="_blank"
              rel="noreferrer"
            >
              The Lost Caves
            </a>
          </li>
          <li>
            <a
              href="https://thealchemist.uk.com/venues/nottingham-king-street/"
              target="_blank"
              rel="noreferrer"
            >
              The Alchemist
            </a>
          </li>
          <li>
            <a
              href="https://www.cocotang.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Coco Tang
            </a>
          </li>
          <li>
            <a
              href="http://thehockleyartsclub.com/"
              target="_blank"
              rel="noreferrer"
            >
              The Hockley Arts Club
            </a>
          </li>
          <li>
            <a
              href="http://pennylanebars.com/"
              target="_blank"
              rel="noreferrer"
            >
              Penny Lane
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Escape Rooms</h2>
        <a name="escape-rooms" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://www.escapologic.com/nottingham-escape-rooms/"
              target="_blank"
              rel="noreferrer"
            >
              Escapologic
            </a>
          </li>
          <li>
            <a
              href="https://www.caveescape.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Cave Escape
            </a>
          </li>
          <li>
            <a
              href="https://logiclock.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Logiclock
            </a>
          </li>
          <li>
            <a
              href="https://cryptologyrooms.co.uk/nottingham/"
              target="_blank"
              rel="noreferrer"
            >
              Cryptology
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Boardgame Cafes</h2>
        <a name="boardgame-cafe" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://www.ludoraticafe.com/"
              target="_blank"
              rel="noreferrer"
            >
              Ludorati
            </a>
          </li>
          <li>
            <a
              href="https://dicecupcafe.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Dicecup
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Other Activities</h2>
        <a name="other-activities" />
        <ul tabIndex="0">
          <li>
            <a
              href="https://nottingham.hatchetharrys.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Hatchett Harrys Axe Throwing
            </a>
          </li>
          <li>
            <a
              href="https://www.roxyballroom.co.uk/nottingham/"
              target="_blank"
              rel="noreferrer"
            >
              Roxy Ballroom Games bar
            </a>
          </li>
          <li>
            <a
              href="https://www.nottinghamcastle.org.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Nottingham Castle
            </a>
          </li>
          <li>
            <a
              href="https://www.sneintonmarketavenues.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sneinton Market Avenues
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 tabIndex="0">Independent Book Stores</h2>
        <a name="book-stores" />
        <ul tabIndex="0">
          <li>
            <a
              href="http://www.page45.com/"
              target="_blank"
              rel="noreferrer"
            >
              Page45
            </a>
          </li>
          <li>
            <a
              href="https://fiveleavesbookshop.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Five Leaves
            </a>
          </li>
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
