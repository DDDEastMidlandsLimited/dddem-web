import Layout from '../../components/Layout';
import Header from '../../components/Header';
import FullWidthImage from '../../components/FullWidthImage';
import theme from '../../theme/theme';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>Attendee Information</title>
    </Head>
    <Header title={'Attendee Information'} />

    <section name="Contents">
      <h1 tabIndex="0">Contents</h1>

      <p>
        <strong>
          <a href="#introduction">Introduction</a>
        </strong>
      </p>
      <p>
        <strong>
          <a href="#code-of-conduct">Code of Conduct</a>
        </strong>
      </p>
      <p>
        <strong>
          <a href="#when-and-where">When and Where?</a>
        </strong>
      </p>
      <p>
        <strong>
          <a href="#age">Age Restrictions</a>
        </strong>
      </p>
      <p>
        <strong>
          <a href="#accessibility">Accessibilty Concerns</a>
        </strong>
      </p>

      <p tabIndex="0">
        <strong>Tickets</strong>
      </p>
      <ul>
        <li>
          <a href="#using-tickets">Using Tickets</a>
        </li>
        <li>
          <a href="#returning-tickets">Returning Tickets</a>
        </li>
        <li>
          <a href="#waiting-list">Waiting List</a>
        </li>
      </ul>
      <p tabIndex="0">
        <strong>Before The Day</strong>
      </p>
      <ul>
        <li>
          <a href="#pat-before">PAT Testing</a>
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
        <strong>Coming To The Event</strong>
      </p>
      <ul>
        <li>
          <a href="#coffee-meet">Coffee Meet</a>
        </li>
        <li>
          <a href="#registration">Registration</a>
        </li>
      </ul>
      <p tabIndex="0">
        <strong>Catering</strong>
      </p>
      <ul>
        <li>
          <a href="#food">Food and Dietary Requirements</a>
        </li>
        <li>
          <a href="#drink">Alcohol</a>
        </li>
        <li>
          <a href="#coffee">Coffee</a>
        </li>
      </ul>
      <p>
        <strong>
          <a href="#wifi">Wifi</a>
        </strong>
      </p>
      <p>
        <strong>
          <a href="#voting">Voting</a>
        </strong>
      </p>
      <p tabIndex="0">
        <strong>Social Media and Photos</strong>
      </p>
      <ul>
        <li>
          <a href="#photographs">Photographs</a>
        </li>
        <li>
          <a href="#social-media">Social Media Posts</a>
        </li>
      </ul>

      <p>
        <strong>
          <a href="#pubconf">PubConf - The Unofficial After Party</a>
        </strong>
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
    </section>

    <section id="introduction">
      <h1 tabIndex="0">Introduction</h1>
      <a name="introduction" />
      <h2 tabIndex="0">Thank you.</h2>
      <p tabIndex="0">
        Without your support, there wouldn’t be a DDD East Midlands
        Conference. Thank you for being an involved and encouraging
        community.
      </p>
      <p tabIndex="0">
        This is going to be a great day full of amazing talks,
        exhibition stalls and more. We can't wait to meet you all and
        hope you have a fantastic day.
      </p>
    </section>

    <section id="code-of-conduct">
      <h1 tabIndex="0">Code of Conduct</h1>
      <a name="code-of-conduct" />
      <h2 tabIndex="0">
        Please familiarise yourself with the Code of Conduct.
      </h2>
      <p tabIndex="0">
        All involved in the DDD East Midlands Conference are subject
        to{' '}
        <a href="https://www.dddeastmidlands.com/code-of-conduct/">
          Code Of Conduct Page.
        </a>
        This is not just for the day of the event, but for all
        presence of DDD East Midlands including Social Media.
      </p>
      <p tabIndex="0">
        Please make sure you are familiar with it and adhere to it at
        all times to create the most inclusive and friendly event for
        all involved.
      </p>
      <p tabIndex="0">
        Should you have any concerns regarding the Code of Conduct
        before, during or after the event, please contact the
        organisers. See the{' '}
        <a href="/contact" target="_blank">
          contact page for information.
        </a>
      </p>
    </section>

    <section id="where-and-when">
      <a name="when-and-where" />
      <h1 tabIndex="0">When and Where?</h1>
      <h2 tabIndex="0">When</h2>
      <p tabIndex="0">26th October 2019 8:00am - 6:00pm.</p>
      <h2 tabIndex="0">Where</h2>
      <p>
        <a href="http://www.nottinghamconferencecentre.co.uk/">
          The Nottingham Conference Centre
        </a>
      </p>
    </section>

    <section id="age-restrictions">
      <a name="age" />
      <h1 tabIndex="0">Age Restrictions</h1>
      <p tabIndex="0">
        For insurance reasons, only people over the age of 18 can
        attend DDD East Midlands. We would love to bring this age
        limit down in the future, but for the first event, we want to
        keep some of the cost and organisational overhead relatively
        low.
      </p>
    </section>

    <section id="accessibility">
      <a name="accessibility" />
      <h1 tabIndex="0">Accessibility Concerns</h1>
      <p tabIndex="0">
        We have attempted to answer a number of questions around
        accessibilty concerns{' '}
        <a href="/about/accessibility-information" targe="_blank">
          see the accessibilty page for more information.
        </a>
      </p>
    </section>

    <section id="tickets">
      <h1 tabIndex="0">Tickets</h1>

      <a name="using-tickets" />
      <h2 tabIndex="0">Using Tickets</h2>
      <p tabIndex="0">
        We are using Eventbrite for our ticketing. Registration will
        open from 8am. On entrance one of the crew of volunteers will
        ask to scan your QR code.
      </p>

      <a name="returning-tickets" />
      <h2 tabIndex="0">Returning Tickets</h2>
      <p tabIndex="0">
        If for any reason you are no longer able to attend the
        conference, please return your ticket so that someone else can
        claim the place. We do pay per person, so this will have an
        impact on us if you can no longer attend but don't return the
        ticket.
      </p>

      <a name="waiting-list" />
      <h2 tabIndex="0">Waiting List</h2>
      <p tabIndex="0">
        The tickets for this event sold out within a day for both
        releases. If you were not lucky enough to get a ticket, please
        <a href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058">
          sign up to the waitlist here
        </a>
        . If a ticket becomes available, and you are next on the
        waitlist you will recieve an email and given 24 hours to claim
        your ticket.
      </p>
    </section>

    <section id="before-the-day">
      <h1 tabIndex="0">Before The Day</h1>
      <a name="pat-before" />
      <h2 tabIndex="0">PAT Testing</h2>
      <p tabIndex="0">
        <strong>
          This point is particularly important if you are taking part
          in our "Hacktober Corner".
        </strong>
      </p>
      <p tabIndex="0">
        Any devices that will be plugged in during the day need to be
        PAT tested. They need to have a valid visible sticker on them
        or a certificate present. Where possible, please try to get
        your devices PAT tested before the day. This includes any
        laptop chargers.
      </p>
      <p tabIndex="0">
        There will be a limited amount of PAT testing available on the
        day. First priority will go to speakers and then to
        exhibitors.
      </p>
    </section>

    <section id="transport">
      <h1 tabIndex="0">Transport On The Day</h1>
      <a name="train" />
      <h2 tabIndex="0">Taking the train</h2>
      <h4 tabIndex="0">Head to Nottingham Train Station</h4>
      <p tabIndex="0">
        Nottingham Station is the mainline train station close to
        Nottingham city centre. The train station is a 15 minute walk
        from Nottingham Conference Centre, but for those new to the
        city, it might be easier to take a taxi or use Nottingham’s
        tram NET (Nottingham Express Transit) system. Directions to
        the station tram stop are signposted throughout the train
        station building. The Conference Centre is located between the
        Royal Centre and Nottingham Trent University tram stop. Take a
        tram heading to either Phoenix Park or Hucknall. Exit the tram
        at the Royal Centre, continue down Goldsmith Street taking the
        first right turn onto Burton Street where you will find the
        Nottingham Conference Centre entrance on the left.
      </p>

      <a name="driving" />
      <h2 tabIndex="0">Driving</h2>
      <h4 tabIndex="0">Directions to Park and Rides</h4>
      <p tabIndex="0">
        From the north, exit the M1 at junction 26 and follow the
        signs for the A610 towards Nottingham city centre.
      </p>
      <p tabIndex="0">
        There is a Park and Ride (tram) facility situated close to the
        M1 junction 26. The Park and Ride (Phoenix Park) site is
        clearly sign-posted off the A610.
      </p>
      <p tabIndex="0">
        Leave the tram at the Nottingham Trent University tram stop
        which is located on Goldsmith Street and walk past the main
        University entrance, turn left on to Burton Street where you
        will find the Nottingham Conference Centre entrance.
      </p>
      <p tabIndex="0">
        From the south, exit the M1 at junction 24 and follow the
        signs for the A453 to Nottingham city centre.
      </p>
      <p tabIndex="0">
        The Queen’s Drive Park and Ride is located just off the A453
        (Queen’s Drive), follow signs for A453 / Queen’s Drive
        Industrial Estate and merge on to the A453 (Queen’s Drive).
        The Park and Ride is located on the opposite side of the road
        to the retail park and is clearly sign-posted.
      </p>
      <p tabIndex="0">
        Alight from the Park and Ride bus on Lower Parliament Street
        (Victoria Centre); Nottingham Conference Centre is a short
        walk away.
      </p>

      <h4 tabIndex="0">Car parks</h4>
      <p tabIndex="0">
        Car parks in the city centre are clearly signposted from all
        major approach routes. There are two car parks close to
        Nottingham Conference Centre, Trinity Square car park on North
        Church Street and Talbot Street car park. For satellite
        navigation systems please use the following information:
      </p>
      <p tabIndex="0">
        <strong>
          <a
            href="http://www.nottinghamcity.gov.uk/transport-parking-and-streets/parking-and-permits/city-centre-parking/car-parks/trinity-square-car-park/"
            target="_blank"
          >
            Trinity Square car park:
          </a>
        </strong>{' '}
        postcode NG1 4BR
        <br />
        co-ordinates 52.956785,-1.149316
      </p>
      <p tabIndex="0">
        <strong>
          <a
            href="https://www.q-park.co.uk/en-gb/cities/nottingham/talbot-street/"
            target="_blank"
          >
            Talbot Street car park:
          </a>
        </strong>{' '}
        postcode NG1 5GG
        <br />
        co-ordinates 52.956143,-1.154433
      </p>
    </section>

    <section id="registration">
      <h1 tabIndex="0">Coming To The Event</h1>
      <a name="coffee-meet" />
      <h2 tabIndex="0">Coffee Meet</h2>
      <p tabIndex="0">
        We know that it isn't always easy to walk into an event alone.
        One of our volunteers will be at the Costa near the venue to
        meet those who want to come to the conference with company.
        They will be heading off from Costa at 8.30 to walk to the
        venue and get you all signed in.
      </p>

      <a name="registration" />
      <h2 tabIndex="0">Registration</h2>
      <p tabIndex="0">
        Registration opens at 8.00am with the opening ceremony
        starting at 9.00am. You will need your Eventbrite ticket as
        volunteers will be scanning the QR code.
      </p>
      <p tabIndex="0">
        Once you have been scanned in you will be given a lanyard (the
        colour of which is based on whether you are happy having your
        photo taken or not) and asked to fill in the information on
        the front (Name, Pronoun).
      </p>
    </section>

    <section id="catering">
      <h1 tabIndex="0">Catering</h1>
      <a name="food" />
      <h2>Food and Dietary Requirements</h2>
      <p tabIndex="0">
        Lunch and snacks will be provided on the day. This will be a
        hot buffet lunch and the options will be chefs choice on the
        day.
      </p>
      <p tabIndex="0">
        All food is prepared in kitchens where nuts, gluten and other
        allergens could be present. As the menu descriptions cannot
        include all ingredients, we will try to cater to the
        requirements you listed as part of your ticket registration.
      </p>
      <p tabIndex="0">
        <strong>
          Here is an example menu provided by the menu to give you an
          idea of what might be provided for lunch:
        </strong>
      </p>
      <p>
        <ul>
          <li tabIndex="0">
            Stir fried vegetables and beans in a Korean style bulgogi
            sauce
          </li>
          <li tabIndex="0">
            Chicken, leek and mushroom pie topped with shortcrust
            pastry
          </li>
          <li tabIndex="0">
            Lamb rogan josh served with naan and mango chutney
          </li>
          <li tabIndex="0">Parmentier potatoes</li>
          <li tabIndex="0">Steamed coriander rice</li>
          <li tabIndex="0">Medley of garden vegetables</li>
          <li tabIndex="0">Carrot, spring onion and sultana salad</li>
          <li tabIndex="0">Spiced cous cous</li>
        </ul>
      </p>

      <a name="drink" />
      <h2 tabIndex="0">Alcohol</h2>
      <p tabIndex="0">
        We will not be serving alcohol as part of the event and ask
        that you don't bring any with you as we are not licenced.
      </p>

      <a name="coffee" />
      <h2 tabIndex="0">Coffee</h2>
      <p tabIndex="0">
        There is a coffee cart at the event being run by{' '}
        <a href="https://www.cartwheelcoffee.com/" target="_blank">
          Cartwheel Coffee
        </a>
        , thanks to our Sponsors UNiDAYS.
      </p>
    </section>

    <section id="wifi">
      <a name="wifi" />
      <h1 tabIndex="0">Wifi</h1>
      <h2 tabIndex="0">There will be free Wifi on the day</h2>
      <p tabIndex="0">
        This is provided by the venue and we will give out details on
        the day.
      </p>
    </section>

    <section id="voting">
      <h1 tabIndex="0">Voting</h1>
      <a name="voting" />
      <h2 tabIndex="0">
        You can vote on talks using a traffic light system.
      </h2>
      <p tabIndex="0">
        During the day there will boxes outside each room for you to
        put your votes into. All voted will be conducted with a
        traffic light system:
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
            Red - That talk wasn't for me.
          </li>
        </strong>
      </ul>
      <p tabIndex="0">
        This is mostly so we can see which talks have a good reception
        to help us plan for our future events.
      </p>
    </section>

    <section id="social-media">
      <h1 tabIndex="0">Social Media and Photos</h1>
      <p tabIndex="0">
        Feel free to take photos and post on social media before,
        after and during the event. There are just a few guidelines we
        ask you to respect.
      </p>
      <a name="photographs" />
      <h2 tabIndex="0">Photographs</h2>
      <p tabIndex="0">
        We will have a coloured lanyard system at the event to
        indicate whether attendees are OK with their photo being taken
        and used.
      </p>
      <ul>
        <li tabIndex="0" className="green">
          Green — It’s fine for their photo to be taken
        </li>
        <li tabIndex="0" className="red">
          Red — Do not include me in your photos or promotional
          material
        </li>
      </ul>
      <p tabIndex="0">
        You will be able to pick your lanyard on registration.
      </p>
      <a name="social-media" />
      <h2 tabIndex="0">Social Media Posts</h2>
      <p tabIndex="0">
        Please use any of the below information to tag us. If using
        our hashtag or handles though, please avoid promoting anything
        that doesn’t align with our code of conduct.
      </p>
      <h3 tabIndex="0">DDD East Midlands on Social Media</h3>
      <ul tabIndex="0">Hashtags: #DDDEM | #DDDEM2019</ul>
      <ul tabIndex="0">
        Twitter:{' '}
        <a href="https://twitter.com/dddeastmidlands" target="_blank">
          @dddeastmidlands
        </a>
      </ul>
      <ul tabIndex="0">
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/company/ddd-east-midlands-limited/"
          target="_blank"
        >
          DDD East Midlands Limited
        </a>
      </ul>
      <ul tabIndex="0">
        Instagram:{' '}
        <a
          href="https://www.instagram.com/dddeastmidlands/?hl=en"
          target="_blank"
        >
          @dddeastmidlands
        </a>
      </ul>
    </section>

    <section id="pubconf">
      <h1 tabIndex="0">PubConf - The Unofficial After Party</h1>

      <a name="after-party-about" />
      <h2 tabIndex="0">About</h2>
      <p tabIndex="0">
        After the conference, there will be a special{' '}
        <a
          href="https://pubconf.io/events/2019/nottingham/"
          target="_blank"
        >
          PubConf
        </a>{' '}
        featuring some of our speakers and special guests. This
        evening event has comedy talks, music, food and beverages.
        It's great fun for all and we encourage you to come along.
      </p>
      <p>
        <h4 tabIndex="0">Quick about:</h4>
        <ul>
          <li tabIndex="0">
            The talks conducted at PubConf are 5 minute, comedy ignite
            talks:
          </li>
          <li tabIndex="0">
            20 slides timed to increment every 15 seconds. The
            speakers have no control
          </li>
          <li tabIndex="0">
            The top three talks will go into a final battle to win
            prizes. These three finalists will be presented with a
            ignite deck they have never seen before and given a topic.
            They will then have to come up with an impromptu talk on
            the spot.
          </li>
          <li tabIndex="0">
            Talk topics have an emphasis on humour. Often the content
            is not suitable to be shared away from the safety of
            PubConf.
          </li>
          <li tabIndex="0">
            PubConf is a separate entity and business from DDD East
            Midlands. As such they have their own Code of Conduct.
            Hence "Unofficial" after party. We are not involved in its
            organisation.
          </li>
        </ul>
      </p>
      <p tabIndex="0">
        This is the first PubConf in the UK outside of London and it's
        going to be brilliant.
      </p>

      <FullWidthImage url={'/static/banners/pubconf.png'} />

      <a name="after-party-rules" />
      <h2 tabIndex="0">Rules of PubConf</h2>
      <p>
        <h4 tabIndex="0">
          What happens at PubConf, stays at Pubconf.
        </h4>
        <ul>
          <li tabIndex="0">
            No photos or videos unless you have the speakers explicit
            permission.
          </li>
          <li tabIndex="0">
            No quoting talks. (Taken out of context, a joke can be
            damaging)
          </li>
        </ul>
        <h4 tabIndex="0">
          This is an event for over 18's as there will be alcohol
          present.
        </h4>
      </p>

      <a name="pubconf-tickets" />
      <h2 tabIndex="0">Be alerted about tickets</h2>
      <p tabIndex="0">
        Go to the{' '}
        <a
          href="https://pubconf.io/events/2019/nottingham/"
          target="_blank"
        >
          PubConf website
        </a>{' '}
        to find out more and sign up for an email alert when tickets
        are released.
      </p>
      <p tabIndex="0">
        Anyone can buy a ticket to PubConf, even if they aren't
        attending the DDD East Midlands conference.
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
