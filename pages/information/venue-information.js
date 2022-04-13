import React from 'react';
import Layout from '../../components/Layout';
import theme from '../../theme/theme';
import Header from '../../components/Header';
import Head from 'next/head';

export default function VenueInformation() {
  return (
    <Layout>
      <Head>
        <title>Venue</title>
      </Head>
      <Header
        title={'Venue'}
        banner="/static/banners/venue.jpg"
      />

      <section>
        <h1 tabIndex="0">How to find DDD East Midlands</h1>
        <p>
          The venue for DDD is now part of{' '}
          <a href="https://www.ntueventsandconferencing.co.uk/">
            NTU Events and Conferencing
          </a>
          , formerly known as Nottingham Conference Centre. DDD takes
          place in the{' '}
          <strong>
            Nottingham Trent University Newton &amp; Arkwright
          </strong>{' '}
          buildings, whose entrance is at 10 Goldsmith St, Nottingham
          NG1 4BU.
        </p>
        <h2>Useful links</h2>
        <ul>
          <li>
            Google:{' '}
            <a href="https://goo.gl/maps/87Vxkzg3DU64j9bb9">Maps</a>
            &bull;
            <a href="https://goo.gl/maps/zeA7UcHfwjtchpjP8">
              StreetView
            </a>{' '}
          </li>
          <li>
            What3Words:{' '}
            <a href="https://what3words.com/jazz.darker.wins">
              {'///'}jazz.darker.wins
            </a>
          </li>
        </ul>
        <p>
          The entrance is directly opposite St Andrews with Castle
          Gate URC Church.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">By rail</h2>
        <p tabIndex="0">
          Nottingham Station is the mainline train station close to
          Nottingham city centre. The train station is a 15 minute
          walk from the conference centre, but for those new to
          Nottingham it might be easier to take a taxi or use the
          Nottingham Express Transit (NET) system. Directions to the
          the station tram stop are signposted throughout the train
          station building. The conference venue is located between
          the Royal Centre and Nottingham Trent University tram stop.
          Take a tram heading to either Phoenix Park or Hucknall. Exit
          the tram at the Royal Centre, and continue along Goldsmith
          Street past Burton Street. The entrance is on your left,
          through the big glass doors marked "Nottingham Trent
          University Newton &amp; Arkwright".
        </p>
      </section>
      <section>
        <h2 tabIndex="0">By air</h2>
        <p tabIndex="0">
          The closest airport to Nottingham is East Midlands Airport
          which is 15 miles (approximately 24 kilometres) outside of
          the city. It takes about half an hour from there to travel
          into the city by car or bus. There is a Skylink bus service
          that runs every half hour from the airport into Nottingham
          city centre and stops a few minutes walk away from the
          conference venue.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">By car</h2>
        <p tabIndex="0">
          From the north, exit the M1 at junction 26 and follow the
          signs for the A610 towards Nottingham city centre.
        </p>
        <p tabIndex="0">
          There is a Park and Ride (tram) facility situated close to
          the M1 junction 26. The Park and Ride (Phoenix Park) site is
          clearly sign-posted off the A610.
        </p>
        <p tabIndex="0">
          Leave the tram at the Nottingham Trent University tram stop
          which is located on Goldsmith Street. Head south along
          Goldsmith Street. the entrance to DDD is on your right,
          opposite St Andrews URC Church.
        </p>
        <p tabIndex="0">
          From the south, exit the M1 at junction 24 and follow the
          signs for the A453 to Nottingham city centre.
        </p>
        <p tabIndex="0">
          The Queen’s Drive Park and Ride is located just off the A453
          (Queen’s Drive), follow signs for A453 / Queen’s Drive
          Industrial Estate and merge on to the A453 (Queen’s Drive).
          The Park and Ride is located on the opposite side of the
          road to the retail park and is clearly sign-posted.
        </p>
        <p tabIndex="0">
          Alight from the Park and Ride bus on Lower Parliament Street
          (Victoria Centre); The conference venue is a short walk
          away.
        </p>
      </section>

      <section>
        <h4 tabIndex="0">Car parking</h4>
        <p tabIndex="0">
          Car parks in the city centre are clearly signposted from all
          major approach routes. There are two car parks close to
          venue; Trinity Square car park on North Church Street and
          Talbot Street car park. For satellite navigation systems
          please use the following information:
        </p>
        <p tabIndex="0">
          <strong>
            <a
              href="http://www.nottinghamcity.gov.uk/transport-parking-and-streets/parking-and-permits/city-centre-parking/car-parks/trinity-square-car-park/"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
            >
              Talbot Street car park:
            </a>
          </strong>{' '}
          postcode NG1 5GG
          <br />
          co-ordinates 52.956143,-1.154433
        </p>
      </section>
      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
}
