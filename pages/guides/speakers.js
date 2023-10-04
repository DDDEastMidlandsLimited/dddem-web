import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import CovidPrecautions from '../../components/content/CovidPrecautions';
import Head from 'next/head';
import FullWidthImage from '../../components/FullWidthImage';
import {
  CodeOfConduct,
  Transport,
  SocialMedia,
} from '../../components/content';

export default function SpeakerInformation() {
  return (
    <Layout>
      <Head>
        <title>Speaker Information</title>
      </Head>
      <Header
        title={'Speaker Information'}
        banner="/static/banners/speaker-info.jpg"
      />

      <section className="content-section" name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p>
          <strong>
            <a href="#links">Important Links</a>
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
      </section>

      <a name="links" />
      <section className="content-section" id="links">
        <h1 tabIndex="0">Important Links</h1>
        <ul>
          <li tabIndex="0">
            <a
              href="https://dddeastmidlands.com/code-of-conduct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section" id="general">
        <h1 tabIndex="0">General</h1>
        <a name="rooms" />
        <h2 tabIndex="0">Rooms</h2>

        <strong>Room 1 (Lecture Theatre 2)</strong>
        <FullWidthImage url={'/static/rooms/LT2.jpg'} />
        <p tabIndex="0">Seats up to 470 people</p>

        <strong>Room 2 (Lecture Theatre 4)</strong>
        <FullWidthImage url={'/static/rooms/LT4.jpg'} />
        <p tabIndex="0">Seats up to 100 people</p>

        <strong>Room 3 (Lecture Theatre 5)</strong>
        <FullWidthImage url={'/static/rooms/LT5.jpg'} />
        <p tabIndex="0">Seats up to 100 people</p>

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

      <section className="content-section" id="before">
        <h1 tabIndex="0">Before The Conference</h1>

        <a name="we-need-to-know" />
        <h2 tabIndex="0">What we need to know</h2>
        <ul>
          <li tabIndex="0">
            Is there sound/video in your presentation?
          </li>
        </ul>
        <a name="what-to-prepare" />
        <h2 tabIndex="0">What to prepare</h2>
        <ul>
          <li tabIndex="0">
            The device (laptop/mac) your plan to present from.
          </li>
          <li tabIndex="0">
            A copy of your presentation on a usb stick (in case of
            emergency)
          </li>
          <li tabIndex="0">A clicker</li>
          <li tabIndex="0">
            If possible, get any electricals you will need on the day
            PAT Tested.
          </li>
        </ul>
      </section>

      <section className="content-section" id="day-of">
        <h1 tabIndex="0">The Day Of The Conference</h1>
        <a name="conference-arrival" />
        <h2 tabIndex="0">Letting us know you have arrived</h2>
        <h4 tabIndex="0">
          Check in at registration and come say hi at the information
          desk. We will ask you to do a flow test on arrival. You'll
          then be offered a arm band to show if you are social
          distancing or not, and your lanyard.
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
          <strong>8.30am - 10.30am the day of the conference</strong>.
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

      <section className="content-section" id="after">
        <h1 tabIndex="0">After The Conference Media</h1>
        <a name="talk-videos" />
        <h2 tabIndex="0">Videoed Talks</h2>
        <p tabIndex="0">
          All the talks are being videoed by the local company
          ShutterSocks. These will be posted on Vimeo as soon as they
          are available. There are a few reasons we are videoing the
          talks:
        </p>
        <ul>
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
        </ul>
      </section>

      <Transport />
    </Layout>
  );
}
