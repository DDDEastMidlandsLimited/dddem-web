import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import {
  Transport,
  SocialMedia,
  CodeOfConduct,
  PubConf,
} from '../../components/content';

export default () => (
  <Layout>
    <Head>
      <title>Sponsor Information</title>
    </Head>
    <Header title={'Sponsor Information'} />

    <section name="Contents">
      <h1 tabIndex="0">Contents</h1>

      <p>
        <strong>
          <a href="#sponsor-brief">Sponsor Brief</a>
        </strong>
      </p>

      <p>
        <strong>
          <a href="#code-of-conduct">Code of Conduct</a>
        </strong>
      </p>

      <p tabIndex="0">
        <strong>Before The Conference</strong>
      </p>
      <ul>
        <li>
          <a href="#tickets">Tickets</a>
        </li>
        <li>
          <a href="#items">Attendee Bag Items</a>
        </li>
        <li>
          <a href="#pat-before">PAT Testing</a>
        </li>
        <li>
          <a href="#gold-sponsors">Gold Representatives</a>
        </li>
      </ul>

      <p tabIndex="0">
        <strong>Setup The Day Before Conference</strong>
      </p>
      <ul>
        <li>
          <a href="#setup-time">Time To Setup</a>
        </li>
        <li>
          <a href="#before-parking">Parking</a>
        </li>
        <li>
          <a href="#lift-restrictions">Lift Restrictions</a>
        </li>
      </ul>

      <p tabIndex="0">
        <strong>Transport On The Day</strong>
      </p>
      <ul>
        <li>
          <a href="#train">Taking the train</a>
        </li>
        <li>
          <a href="#driving">Driving</a>
        </li>
      </ul>

      <p tabIndex="0">
        <strong>Setup On The Day</strong>
      </p>
      <ul>
        <li>
          <a href="#arrival">Arrival</a>
        </li>
        <li>
          <a href="#signing-in">Signing In</a>
        </li>
      </ul>

      <p tabIndex="0">
        <strong>General Conference Day Information</strong>
      </p>
      <ul>
        <li>
          <a href="#power">Power</a>
        </li>
        <li>
          <a href="#exhibition-staff">Exhibition Stall Staff</a>
        </li>
        <li>
          <a href="#health-and-safety">Health and Safety</a>
        </li>
        <li>
          <a href="#wifi">Wi-Fi</a>
        </li>
        <li>
          <a href="#catering">Catering</a>
        </li>
      </ul>

      <p tabIndex="0">
        <strong>Exhibition Stalls</strong>
      </p>
      <ul>
        <li>
          <a href="#space">Space</a>
        </li>
        <li>
          <a href="#provided">What Is Provided?</a>
        </li>
        <li>
          <a href="#provide">What To Bring</a>
        </li>
        <li>
          <a href="#booth-restrictions">Restrictions</a>
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
        <strong>Packing Up Day Of The Conference</strong>
      </p>
      <ul>
        <li>
          <a href="#teardown-time">Pick Up Time</a>
        </li>
      </ul>

      <p tabIndex="0">
        <strong>PubConf - The Unofficial After Party</strong>
      </p>
      <ul>
        <li>
          <a href="#after-party-about">About</a>
        </li>
        <li>
          <a href="#after-party-rules">Rules of PubConf</a>
        </li>
        <li>
          <a href="#pubconf-tickets">Be alerted about tickets</a>
        </li>
      </ul>

      <p>
        <strong>
          <a href="#contact">Contacts</a>
        </strong>
      </p>
    </section>

    <section id="sponsor-brief">
      <h1 tabIndex="0">Sponsor Brief</h1>
      <a name="sponsor-brief" />
      <h2 tabIndex="0">Thank you.</h2>
      <p tabIndex="0">
        Without your support, there wouldn’t be a DDD East Midlands
        event at all. This page outlines what you need to know on the
        day.
      </p>
      <p tabIndex="0">
        This year we expect around 350 - 400 attendees to join us for
        a day of learning and networking for the East Midlands
        technology community.
      </p>
    </section>

    <CodeOfConduct />

    <section id="before-the-conference">
      <h1 tabIndex="0">Before The Conference</h1>
      <a name="tickets" />
      <h2 tabIndex="0">Tickets</h2>
      <p tabIndex="0">
        If you have supported at Gold, Silver, Bronze or Standard
        Tier, you will have been allotted some tickets to the
        conference.
      </p>
      <p tabIndex="0">
        If you know who your guaranteed tickets are going to be given
        to, please provide us with their emails so that we can send a
        link to Eventbrite. If this is still unsure, we can provide a
        code for you to access tickets with.
      </p>
      <p tabIndex="0">
        <strong>
          If you have told us who to send your tickets to:
        </strong>
      </p>
      <ul>
        <li tabIndex="0">
          If you have an exhibition booth, please ensure that your
          booth will be covered by 1 - 3 of your ticket holders.
        </li>
        <li tabIndex="0">
          Please make sure the people assigned can still make it on
          the day.
        </li>
      </ul>
      <p tabIndex="0">
        <strong>
          If you haven't told us who to assign your tickets too:
        </strong>
      </p>
      <ul>
        <li tabIndex="0">
          If you have an exhibition booth we suggest that 1 - 3 of
          your tickets are given to those managing your exhibition
          booth.
        </li>
        <li tabIndex="0">
          If you don't have an exhibition booth or have tickets spare,
          you can:
          <ul>
            <li tabIndex="0">
              Give tickets out internally so your employees can
              benefit from the day.
            </li>
            <li tabIndex="0">Donate a ticket to local meetup.</li>
            <li tabIndex="0">
              Give a tickeet away in a competition.
            </li>
          </ul>
        </li>
      </ul>
      <p tabIndex="0">Whatever you think is best.</p>
      <p tabIndex="0">
        <strong>Assigning Tickets:</strong>
      </p>
      <p tabIndex="0">
        Contact{' '}
        <a href="mailto:jessica@dddeastmidlands.com">Jessica </a>with
        the email addresses and name of your recepients. She will send
        an Eventbrite invite to that email address.
      </p>
      <p tabIndex="0">
        Any tickets you consider “extra” as part of your sponsorship,
        you can dispense as you wish. Contact Jessica if you want
        assistance with this.
      </p>

      <a name="items" />
      <h2 tabIndex="0">Attendee Bag Items</h2>
      <p tabIndex="0">
        Gold and Silver Tier Sponsors can provide items and inserts
        for attendee bags. These bags will be given to all attendee's
        on the day of the conference. You can provide swag and/or
        printed media (company adverts, job adverts etc.).
      </p>
      <p tabIndex="0">
        <strong>
          Attendee bag items should be provided at least one week
          before the conference.
        </strong>{' '}
        This is so we can prepare the bags before the conference.
        Please make arrangements with Jessica for drop off or
        collection.
      </p>

      <a name="pat-before" />
      <h2 tabIndex="0">PAT Testing</h2>
      <h4 tabIndex="0">
        If you can, get any devices that will be plugged in PAT tested
        before the event.
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
          electrical items are less than a year old, evidence of this
          is provided.
        </li>
      </ul>
      <p tabIndex="0">
        This includes any laptop chargers or phone chargers.
      </p>
      <p tabIndex="0">
        We will provide limited PAT testing on the day, with speakers
        being priority candidates for this service. This service will
        be available between{' '}
        <strong>7.30am - 9.30am the day of the conference</strong>.
        Registration for the event opens to the general public at
        8.00am so there is a window in the morning where exclusively
        speakers and exhibitors can queue to get their devices PAT
        tested.
      </p>

      <a name="gold-sponsors" />
      <h2 tabIndex="0">Gold Representatives</h2>
      <p tabIndex="0">
        This section only concerns our Gold Tier Sponsors.
      </p>
      <p tabIndex="0">
        We will need some information from you before the event. As
        part of your sponsorship offering, we will say a short bit
        about your company but also present the details of a
        representative that can be approached at the conference. We
        will need the following:
      </p>
      <ul>
        <li tabIndex="0">
          A short brief about your company to be given at the opening
          presentation. A couple of paragraphs long.
        </li>
        <li tabIndex="0">
          The name of your represenative for the day.
        </li>
        <li tabIndex="0">
          The job title of your represenative for the day.
        </li>
        <li tabIndex="0">
          A photo of your represenative for the day.
        </li>
        <li tabIndex="0">
          Contact details that your represenative might want to share.
        </li>
      </ul>
      <p tabIndex="0">
        These will be presented alongside your logo in the opening
        ceremony.
      </p>
    </section>

    <section id="day-before">
      <h1 tabIndex="0">Setup The Day Before Conference</h1>

      <a name="setup-time" />
      <h2 tabIndex="0">Time To Setup</h2>
      <p tabIndex="0">
        You will be emailed a time slot closer to the event, in which
        you can set up your exhibition stall. This time slot will be
        somewhere between 18.00 – 21.30 on the 25th of October (the
        night before the event).
      </p>
      <p tabIndex="0">
        We have to arrange this into time slots due to the limited
        vehicle space at the venue. If there are any restrictions you
        have regarding time slot, please let us know in advance.
      </p>
      <p tabIndex="0">
        On the day of the event, the organisers will be at the venue
        from 07.15. You may turn up any time from then. Attendee
        registration opens at 8.00am.
      </p>

      <a name="before-parking" />
      <h2 tabIndex="0">Parking</h2>
      <p tabIndex="0">
        Please use the loading bay on South Sherwood Street during
        your allotted time.
      </p>
      <p tabIndex="0">
        The entrance to the South Sherwood Street loading bay on a
        busy road and right next to a bus stop. We ask that you do not
        obstruct this entrance, but instead, only park within the
        loading bay.
      </p>
      <p tabIndex="0">
        Please limit yourselves to using one vehicle at a time.
      </p>

      <a name="lift-restrictions" />
      <h2 tabIndex="0">Lift Restrictions</h2>
      <p tabIndex="0">
        Below are the lift restrictions. Please keep these in mind for
        anything you are bringing for your exhibition stall.
      </p>
      <table>
        <tr tabIndex="0">
          <th>Lift</th>
          <th>Dimensions</th>
          <th>Max Weight.</th>
        </tr>
        <tr tabIndex="0">
          <td>Loading bay lift</td>
          <td>Open topped x 1000 mm x 1470 mm</td>
          <td>1000 kg</td>
        </tr>
        <tr tabIndex="0">
          <td>Newton lift doors</td>
          <td>2100 mm x 1100 mm</td>
          <td>1000 kg</td>
        </tr>
      </table>
    </section>

    <Transport />

    <section id="setup-on-day">
      <h1 tabIndex="0">Setup On The Day</h1>

      <a name="arrival" />
      <h2 tabIndex="0">Arrival</h2>
      <p tabIndex="0">
        You can arrive at the venue any time after 7.15am on the day
        of the event. This will give you the opportunity to do any
        last minute set up and settle in before registration opens at
        8.00am.
      </p>
      <p tabIndex="0">
        If you need to use the PAT testing service we are providing,
        that opens from 7.30am.
      </p>

      <a name="signing-in" />
      <h2 tabIndex="0">Signing In</h2>
      <p tabIndex="0">
        All those who are looking after your exhibition booth that
        have a ticket through your sponsorship will have an Eventbrite
        ticket. On coming in, a crew member will scan the QR code on
        your Eventbrite ticket. You will then be directed to fill in
        your lanyards.
      </p>
    </section>

    <section id="general">
      <h1 tabIndex="0">General Conference Day Information</h1>
      <a name="power" />
      <h2 tabIndex="0">Power</h2>
      <p tabIndex="0">
        There will be some electricity sockets available on the day.
        DDD East Midlands will provide extension cables on request if
        you will need multiple ports on the day. Please contact
        Jessica:{' '}
        <a href="mailto:jessica@dddeastmidlands.com">
          jessica@dddeastmidlands.com
        </a>{' '}
        at least two weeks prior to the event.
      </p>
      <p tabIndex="0">
        Due to the venues insurance policy we require that any plugged
        in devices are PAT tested and have an in date sticker.
      </p>
      <p tabIndex="0">
        We can provide PAT testing for a limited number of devices on
        the day, but priority will be given to speakers for the
        available slots. Where possible please have your devices that
        will be plugged in on the day PAT tested.
      </p>

      <a name="exhibition-staff" />
      <h2 tabIndex="0">Exhibition Stall Staff</h2>
      <p tabIndex="0">
        We expect that you have 1-3 people working at the exhibition
        stall. These are included in your ticket allowance for the
        event. Please have these people register their ticket at
        check-in on the day.
      </p>
      <p tabIndex="0">
        Exhibitions stalls can be visited throughout the whole day,
        including during talk sessions. We expect you will be most
        busy during the breaks.
      </p>

      <a name="health-and-safety" />
      <h2 tabIndex="0">Health and Safety</h2>
      <p tabIndex="0">
        There will be space behind exhibition stall partitions for
        storage. Passageways, stairways and fire exits shall be kept
        free of obstruction; all loose packaging must be removed to
        keep walkways free from tripping hazards.
      </p>
      <p tabIndex="0">
        Exhibitors exhibit entirely at their own risk. Nottingham
        Conference Centre and DDD East Midlands are not liable for any
        losses or damage to property which may occur.
      </p>
      <p tabIndex="0">
        In the opening ceremony, there will be a briefing about fire
        evacuation procedures. If you are unable to attend the opening
        ceremony please request this information from either Moreton
        or Jessica.
      </p>

      <a name="wifi" />
      <h2 tabIndex="0">Wifi</h2>
      <p tabIndex="0">
        Free Wi-Fi is supplied by the venue. There will be separate
        access codes provided for staff/exhibitors and attendees.
        Access details are provided on the day.
      </p>

      <a name="catering" />
      <h2 tabIndex="0">Catering</h2>
      <p tabIndex="0">
        Lunch and snacks will be provided on the day.
      </p>
      <p tabIndex="0">
        All food is prepared in kitchens where nuts, gluten and other
        allergens could be present. As the menu descriptions cannot
        include all ingredients, please let us know prior to arrival
        if any of your representatives have a food allergy, and we
        will try to cater to them.
      </p>
    </section>

    <section id="stalls">
      <h1 tabIndex="0">Exhibition Stalls</h1>

      <a name="space" />
      <h2 tabIndex="0">Space</h2>
      <p tabIndex="0">
        The exhibition space you will have will be 3 meters x 2
        meters.
      </p>

      <a name="provided" />
      <h2 tabIndex="0">What Is Provided?</h2>
      <ul>
        <li tabIndex="0">Provided table size: 170 cm x 150 cm</li>
        <li tabIndex="0">
          Grey poster boards. 7 foot tall by 3 foot wide.
        </li>
      </ul>

      <a name="provide" />
      <h2 tabIndex="0">What Is Recommended To Bring?</h2>
      <ul>
        <li tabIndex="0">Linen</li>
        <li tabIndex="0">
          Anything for decorating your exhibition stall and background
          screens (swag, banners, leaflets, promotional material).
        </li>
        <li tabIndex="0">
          <i>(If included in your sponsorship)</i> Banners away from
          your exhibition booth
        </li>
      </ul>

      <a name="booth-restrictions" />
      <h2 tabIndex="0">Restrictions</h2>
      <ul>
        <li tabIndex="0">
          Please avoid bringing any displays with automatically moving
          parts, unless you can be assured that they will not be left
          unattended
        </li>
        <li tabIndex="0">
          The height/weight restrictions of the lifts.
        </li>
      </ul>
    </section>

    <SocialMedia />

    <section id="packing-up">
      <h1 tabIndex="0">Packing Up Day Of The Conference</h1>
      <a name="teardown-time" />
      <h2 tabIndex="0">Collecting your exhibition items.</h2>
      <p tabIndex="0">
        You will be emailed a time slot closer to the event, in which
        you can bring a vehicle to the venue to collect any remaining
        items from your exhibition stall. This time slot will be
        somewhere between 16.30 – 18.30 on the 26th of October (the
        day of the event).
      </p>
      <p tabIndex="0">
        We have to arrange this into time slots due to the limited
        vehicle space at the venue. If there are any restrictions you
        have regarding time slot, or you don’t think you will need
        one, please let us know in advance.
      </p>
      <p tabIndex="0">
        <strong>Location: </strong>We ask that you use the loading bay
        on South Sherwood Street.
      </p>
    </section>

    <PubConf />

    <section id="contact">
      <a name="contact" />
      <h1 tabIndex="0">Contact</h1>
      <p tabIndex="0">
        There are a number of ways to contact the organisers before
        and during the event:
      </p>
      <h2 tabIndex="0">Slack</h2>
      <p tabIndex="0">
        You will be added to a DDD East Midlands Slack Channel.
        Jessica and Moreton will be reachable on there. Please use
        their handle for anything urgent.
      </p>
      <h2 tabIndex="0">Email</h2>
      <p tabIndex="0">
        Using the @dddeastmidlands.com email addresses:
        <li>
          <a href="mailto:jessica@dddeastmidlands.com">
            Jessica's email
          </a>
        </li>
        <li>
          <a href="mailto:moreton@dddeastmidlands.com">
            Moreton's email
          </a>
        </li>
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

        .red {
          color: red;
        }

        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
          text-align: center;
        }

        tr th {
          background-color: #dddddd;
        }
      `}
    </style>
  </Layout>
);
