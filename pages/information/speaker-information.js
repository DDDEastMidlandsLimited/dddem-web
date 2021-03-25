import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import FullWidthImage from '../../components/FullWidthImage';
import {
  CodeOfConduct,
  Transport,
  SocialMedia,
  //PubConf,
} from '../../components/content';

export default function SpeakerInformation() {
  return (
    <Layout>
      <Head>
        <title>Speaker Information</title>
      </Head>
      <Header
        title={'Speaker Information'}
        banner="/static/banners/information/speakers.jpg"
      />

      <section name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p>
          <strong>
            <a href="#code-of-conduct">Code of Conduct</a>
          </strong>
        </p>

        <p tabIndex="0">
          <strong>General</strong>
        </p>
        <ul>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#tech"> Available Tech</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Before The Conference</strong>
        </p>
        <ul>
          <li>
            <a href="#we-need-to-know">What we need to know</a>
          </li>
          <li>
            <a href="#what-to-prepare">What to prepare</a>
          </li>
        </ul>

        <p>
          <strong>
            <a href="#voting">Voting</a>
          </strong>
        </p>

        <p tabIndex="0">
          <strong>The Day Of The Conference</strong>
        </p>
        <ul>
          <li>
            <a href="#conference-arrival">
              Letting us know you have arrived
            </a>
          </li>
          <li>
            <a href="#pat-testing">PAT Testing</a>
          </li>
          <li>
            <a href="#green-room">Green Room</a>
          </li>
          <li>
            <a href="#room-arrival">Arriving at the room</a>
          </li>
          <li>
            <a href="#clickers">Clickers</a>
          </li>
          <li>
            <a href="#q-and-a">Q and A space</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Social Media and Photos</strong>
        </p>
        <ul>
          <li>
            <a href="#photographs">Photographs</a>
          </li>
          <li>
            <a href="#instagram">Instagram Stories</a>
          </li>
          <li>
            <a href="#social-posts">Social Media Posts</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>After The Conference Media</strong>
        </p>
        <ul>
          <li>
            <a href="#talk-videos">Videoed Talks</a>
          </li>
        </ul>

        <p>
          <strong>
            <a href="#checklist">Suggested Checklist</a>
          </strong>
        </p>

        <p tabIndex="0">
          <strong>Transport</strong>
        </p>
        <ul>
          <li>
            <a href="#train">Taking the train</a>
          </li>
          <li>
            <a href="#driving">Driving</a>
          </li>
          <li>
            <a href="#air">By Air</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Staying in Nottingham</strong>
        </p>
        <ul>
          <li>
            <a href="#important-contacts">Important Contacts</a>
          </li>
          <li>
            <a href="#hotels">Hotels</a>
          </li>
          <li>
            <a href="#restaurants">Restaurants</a>
          </li>
        </ul>
      </section>

      <CodeOfConduct />

      <section id="general">
        <h1 tabIndex="0">General</h1>
        <a name="rooms" />
        <h2 tabIndex="0">Rooms</h2>

        <h4 tabIndex="0">Room 1 (Lecture Theatre 2)</h4>
        <FullWidthImage url={'/static/rooms/LT2.jpg'} />
        <p tabIndex="0">
          <strong>Seats:</strong> up to 470 people
        </p>

        <h4 tabIndex="0">Room 2 (Lecture Theatre 4)</h4>
        <FullWidthImage url={'/static/rooms/LT4.jpg'} />
        <p tabIndex="0">
          <strong>Seats:</strong> up to 100 people
        </p>

        <h4 tabIndex="0">Room 3 (Lecture Theatre 5)</h4>
        <FullWidthImage url={'/static/rooms/LT5.jpg'} />
        <p tabIndex="0">
          <strong>Seats:</strong> up to 100 people
        </p>

        <a name="tech" />
        <h2 tabIndex="0">Available Tech</h2>

        <h4 tabIndex="0">Screen sizes/aspect ratio</h4>
        <p tabIndex="0">
          All of these screens are widescreen and are a mixture of
          16:9 or 16:10 aspect ratio.
        </p>
        <h4 tabIndex="0">Adaptors (HDMI etc)</h4>
        <p tabIndex="0">
          All rooms have wireless capabilities for MAC and PC, they
          also have both HDMI and VGA adaptors. The main lecture
          theatre (Room 1/Lecture Theatre 2) has all of the above plus
          Mini Display Port and Mini HDMI. There is also a visualizer
          available in each Lecture Theatre.
        </p>
        <h4 tabIndex="0">Microphones</h4>
        <p tabIndex="0">
          All rooms have the choice of clip-on, static or hand held
          microphones. Please let your AV support person/volunteer
          know if you have a preference.
        </p>
        <h4 tabIndex="0">Wi-Fi</h4>
        <p tabIndex="0">
          We will email the Wi-Fi details shortly before the event.
        </p>
      </section>

      <section id="before">
        <h1 tabIndex="0">Before The Conference</h1>

        <a name="we-need-to-know" />
        <h2 tabIndex="0">What we need to know</h2>
        <li tabIndex="0">
          Is there sound/video in your presentation?
        </li>

        <a name="what-to-prepare" />
        <h2 tabIndex="0">What to prepare</h2>
        <li tabIndex="0">
          A copy of your presentation on a usb stick
        </li>
        <li tabIndex="0">A clicker</li>
        <li tabIndex="0">
          If possible, get any electricals you will need on the day
          PAT Tested.
        </li>
      </section>

      <section id="voting">
        <h1 tabIndex="0">Voting</h1>
        <a name="voting" />
        <h2 tabIndex="0">
          Attendees can vote using a traffic light system.
        </h2>
        <p tabIndex="0">
          During the day there will boxes outside each room for
          attendees to put their votes into. All votes will be
          conducted with a traffic light system:
        </p>
        <ul>
          <strong>
            <li tabIndex="0" className="green">
              Green - That talk was EPIC
            </li>
            <li tabIndex="0" className="yellow">
              Yellow - That talk was good
            </li>
            <li tabIndex="0" className="red">
              Red - That talk wasn&apos;t for me.
            </li>
          </strong>
        </ul>
        <p tabIndex="0">
          There are a couple of reasons we have this voting system in
          place:
        </p>
        <ul>
          <li tabIndex="0">
            <strong>
              To give our speakers some light indication around the
              reception of their talks.
            </strong>{' '}
            We cannot offer more in-depth means of feedback this year
            as it would require a level of moderation and work that,
            unfortunately, we don&apos;t have the time to invest in
            this first year.
          </li>
          <li tabIndex="0">
            <strong>
              To give us an indication of which subject areas are of
              particular interest in the local area.
            </strong>{' '}
            This is not for any future talk curation, but to give us
            more knowledge about the local area so that we can help
            our sponsors target their efforts appropriately, and to
            aid us in our own marketing efforts.
          </li>
        </ul>
      </section>

      <section id="day-of">
        <h1 tabIndex="0">The Day Of The Conference</h1>
        <a name="conference-arrival" />
        <h2 tabIndex="0">Letting us know you have arrived</h2>
        <h4 tabIndex="0">
          Check in at registration and come say hi at the information
          desk.
        </h4>
        <p tabIndex="0">
          At least one of the organisers will be at the registration
          desk in the morning.
        </p>

        <a name="pat-testing" />
        <h2 tabIndex="0">PAT Testing</h2>
        <h4 tabIndex="0">
          If you can, get any devices that will be plugged in PAT
          tested before the event.
        </h4>
        <p tabIndex="0">
          Due to venue insurance restrictions, we need to be sure that
          anything that may be plugged into a socket on the day{' '}
          <strong>either:</strong>
        </p>
        <ul>
          <li tabIndex="0">
            Has a current PAT test sticker/certificate
          </li>
          <li tabIndex="0">
            Is less than one year old. Please ensure that where
            electrical items are less than a year old, evidence of
            this is provided.
          </li>
        </ul>
        <p tabIndex="0">
          This includes any laptop chargers or phone chargers.
        </p>
        <p tabIndex="0">
          We will provide limited PAT testing on the day, with
          speakers being priority candidates for this service. This
          service will be available between{' '}
          <strong>7.30am - 9.30am the day of the conference</strong>.
          Registration for the event opens to the general public at
          8.00am so there is a window in the morning where exclusively
          speakers and exhibitors can queue to get their devices PAT
          tested.
        </p>
        <p tabIndex="0">
          If you will need your laptop cables PAT tested but cannot
          make it to the venue between those hours, contact Jessica to
          arrange dropping off your chargers the evening before.
        </p>

        <a name="green-room" />
        <h2 tabIndex="0">Green Room</h2>
        <h4 tabIndex="0">
          There is a room for speakers to get some space.
        </h4>
        <p tabIndex="0">
          On the day there will be a speakers green room. Here you can
          practice or prepare for your talk, or just get some peace
          away from the hustle and bustle of the conference.
        </p>
        <p tabIndex="0">
          <strong>Try out the visualiser</strong>
        </p>
        <p tabIndex="0">
          A visualiser will be set up in the Speakers Green Room so
          that you can try it out before you do your talk.
        </p>

        <a name="room-arrival" />
        <h2 tabIndex="0">Arriving at the room</h2>

        <h4 tabIndex="0">
          Please arrive 10 - 15 minutes before your presentation.
        </h4>
        <p tabIndex="0">
          This is so that there is enough time to get you all set up.
        </p>

        <h4>
          Introduce yourself to the crew member looking after your
          room.
        </h4>
        <p tabIndex="0">
          The crew member will make sure there is water, and will be
          happy to help you with your presentation needs. They will
          also help us make sure everything is running smoothly in
          your room. Please let them know if there is anything we can
          provide to help you.
        </p>

        <h4 tabIndex="0">
          Meet the AV technician and get Mic&apos;d up
        </h4>
        <p tabIndex="0">
          There are a variety of microphones available in each room.
          Clip-on, static and hand held are available, so please let
          the technicians know if you have a preference.
        </p>
        <a name="clickers" />
        <h2 tabIndex="0">Clickers</h2>
        <h4 tabIndex="0">
          You can bring your own clicker or we can provide one.
        </h4>
        <p tabIndex="0">
          We can provide 3 clickers for the day (one per room). So if
          you do use one of the clickers provided, please make sure it
          stays in the room for the next speaker who might need it.
        </p>
        <a name="q-and-a" />
        <h2 tabIndex="0">Q and A space</h2>
        <h4 tabIndex="0">
          Want a place where people can approach you with their
          questions after your talk?
        </h4>
        <p tabIndex="0">
          We&apos;ll provide a space in the breakout area with a table
          and chair. Book in a time slot with Jessica, and you can
          advertise during or at the end of your talk that you will be
          available there to be approached by attendees after your
          talk.
        </p>
      </section>

      <SocialMedia />

      <section id="after">
        <h1 tabIndex="0">After The Conference Media</h1>
        <a name="talk-videos" />
        <h2 tabIndex="0">Videoed Talks</h2>
        <p tabIndex="0">
          All the talks are being videoed by the local company
          ShutterSocks. These will be posted on Vimeo as soon as they
          are available. There are a few reasons we are videoing the
          talks:
        </p>
        <li tabIndex="0">
          For future conference submissions. Often conference
          submissions are strengthened with the evidence of your
          presentation skills.
        </li>
        <li tabIndex="0">
          To keep the conversation going after the conference. Your
          talks can be shared with all those who might find them
          useful.
        </li>
      </section>

      {/* <PubConf /> */}

      <section id="checklist">
        <h1 tabIndex="0">Suggested Checklist</h1>
        <li tabIndex="0">Twitter handle on slides</li>
        <li tabIndex="0">Clicker</li>
        <li tabIndex="0">Backup of slides</li>
        <li tabIndex="0">Laptop charger</li>
        <li tabIndex="0">Timer</li>
        <li tabIndex="0">
          The awesome{' '}
          <a
            href="https://open.spotify.com/playlist/0kTPxCiWN0kyYa8FSWpdi2?"
            target="_blank"
            rel="noreferrer"
          >
            Get Pumped Playlist
          </a>
        </li>

        <h4 tabIndex="0">Our favourite available list</h4>
        <p tabIndex="0">
          <a
            href="https://csswizardry.com/2016/06/speakers-checklist-before-and-after-your-talk/"
            target="_blank"
            rel="noreferrer"
          >
            This list by csswizardry
          </a>
          is often used by us at other events. Thank you{' '}
          <a
            href="https://twitter.com/Brunty"
            target="_blank"
            rel="noreferrer"
          >
            Brunty
          </a>{' '}
          for sharing this with us.
        </p>
      </section>

      <Transport />

      <section id="nottingham">
        <h1 tabIndex="0">Staying in Nottingham</h1>

        <a name="important-contacts" />
        <h2 tabIndex="0">Important Contacts</h2>
        <h4 tabIndex="0">Conference</h4>
        <ul>
          <li tabIndex="0">
            <strong>Co-organiser Jessica White:</strong>
          </li>
          <p tabIndex="0">Tel: number will be emailed to you </p>
          <p tabIndex="0">Email: jessica@dddeastmidlands.com </p>
          <li tabIndex="0">
            <strong>Co-organiser Moreton Brockley:</strong>
          </li>
          <p tabIndex="0">Email: moreton@dddeastmidlands.com</p>
        </ul>

        <a name="hotels" />
        <h2 tabIndex="0">Hotels</h2>
        <p tabIndex="0">
          We don&apos;t have any partnerships or deals with any local
          hotels but here is a list of a few in City Center:
        </p>
        <li>
          <a
            href="https://www.ihg.com/crowneplaza/hotels/gb/en/nottingham/notws/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-GB-_-NOTWS"
            target="_blank"
            rel="noreferrer"
          >
            Crowne Plaza
          </a>
        </li>
        <li>
          <a
            href="https://www.accorhotels.com/gb/hotel-6160-ibis-nottingham-centre/index.shtml"
            target="_blank"
            rel="noreferrer"
          >
            Ibis
          </a>
        </li>
        <li>
          <a
            href="https://www.roomzzz.com/locations/nottingham/"
            target="_blank"
            rel="noreferrer"
          >
            Roomzzz
          </a>
        </li>
        <li>
          <a
            href="https://www.mercurenottingham.com/"
            target="_blank"
            rel="noreferrer"
          >
            Mercure
          </a>
        </li>

        <a name="restaurants" />
        <h2 tabIndex="0">Restaurants</h2>
        <h4 tabIndex="0">Coffee</h4>
        <li>
          <a
            href="https://www.cartwheelcoffee.com/"
            target="_blank"
            rel="noreferrer"
          >
            Cartwheel
          </a>
        </li>
        <li>
          <a
            href="https://www.outpost.coffee/"
            target="_blank"
            rel="noreferrer"
          >
            Outpost
          </a>
        </li>
        <li>
          <a
            href="https://200degs.com/"
            target="_blank"
            rel="noreferrer"
          >
            200 Degrees
          </a>
        </li>
        <li>
          <a
            href="https://www.thespecialtycoffeeshop.com/"
            target="_blank"
            rel="noreferrer"
          >
            Speciality
          </a>
        </li>

        <h4 tabIndex="0">Breakfast</h4>
        <li>
          <a
            href="https://anniesburgershack.com/menu/breakfast-menu"
            target="_blank"
            rel="noreferrer"
          >
            Annies Burger Shack
          </a>
        </li>
        <li>
          <a
            href="https://www.thepuddingpantry.co.uk/breakfast"
            target="_blank"
            rel="noreferrer"
          >
            Pudding Pantry
          </a>
        </li>

        <h4 tabIndex="0">Dinner</h4>
        <li>
          <a
            href="http://www.oscarandrosies.com/menu"
            target="_blank"
            rel="noreferrer"
          >
            Oscar And Rosies
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
            href="https://www.tripadvisor.co.uk/Restaurant_Review-g186356-d11933005-Reviews-Sexy_Mamma_Love_Spaghetti-Nottingham_Nottinghamshire_England.html"
            target="_blank"
            rel="noreferrer"
          >
            Sexy Mama&apos;s Spaghetti
          </a>
        </li>
        <li>
          <a
            href="http://bonzai-japaneserestaurant.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Bonzai
          </a>
        </li>

        <h4 tabIndex="0">Extra Requirements?</h4>
        <p tabIndex="0">
          If you need to know about any vegan, vegetarian or
          gluten-free restaurants, get in touch and we will point you
          in the direction of some great ones.
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
          .green {
            color: green;
          }
          .yellow {
            color: orange;
          }
          .red {
            color: red;
          }
        `}
      </style>
    </Layout>
  );
}
