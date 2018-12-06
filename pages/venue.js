import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Header from "../components/Header";
import ImportantDatesList from "../components/ImportantDatesList";
import PartnerList from "../components/PartnersList";

import dates from "../data/dates.js"
import partners from "../data/partners.js"
import Head from "next/head";

export default (props) => (
    <Layout>
        <Head>
            <title>Venue</title>
        </Head>
        <Header title={'Venue'}/>

        <section>
            <h2>
                Directions to Nottingham Conference Centre
            </h2>
        </section>

        <section>
            <h2>
                By rail
            </h2>
            <p>
                Nottingham Station is the mainline train station close to Nottingham city centre. The train station is a
                15 minute walk from Nottingham Conference Centre, but for those new to the city it might be easier to
                take a taxi or use Nottingham’s tram NET (Nottingham Express Transit) system. Directions to the station
                tram stop are signposted throughout the train station building. The Conference Centre is located between
                the Royal Centre and Nottingham Trent University tram stop. Take a tram heading to either Phoenix Park
                or Hucknall. Exit the tram at the Royal Centre, continue down Goldsmith Street taking the first right
                turn onto Burton Street where you will find the Nottingham Conference Centre entrance on the left.
            </p>
        </section>

        <section>
            <h2>
                By air
            </h2>
            <p>
                The closest airport to Nottingham is East Midlands Airport which is 15 miles (approximately 24
                kilometres) outside of the city. It takes about half an hour from there to travel into the city by car
                or bus. There is a Skylink bus service that runs every half hour from the airport into Nottingham city
                centre and stops a few minutes walk away from Nottingham Conference Centre.
            </p>
        </section>

        <section>
            <h2>
                By car
            </h2>
            <p>
                From the north, exit the M1 at junction 26 and follow the signs for the A610 towards Nottingham city
                centre. There is a Park and Ride (tram) facility situated close to the M1 junction 26. The Park and Ride
                (Phoenix Park) site is clearly sign-posted off the A610. Leave the tram at the Nottingham Trent
                University tram stop which is located on Goldsmith Street and walk past the main University entrance,
                turn left on to Burton Street where you will find the Nottingham Conference Centre entrance. From the
                south, exit the M1 at junction 24 and follow the signs for the A453 to Nottingham city centre. The
                Queen’s Drive Park and Ride is located just off the A453 (Queen’s Drive), follow signs for A453 /
                Queen’s Drive Industrial Estate and merge on to the A453 (Queen’s Drive). The Park and Ride is located
                on the opposite side of the road to the retail park and is clearly sign-posted. Alight from the Park and
                Ride bus on Lower Parliament Street (Victoria Centre); Nottingham Conference Centre is a short walk
                away.
            </p>
        </section>

        <section>
            <h2>
                Car parking
            </h2>
            <p>
                Car parks in the city centre are clearly signposted from all major approach routes. There are two car
                parks close to Nottingham Conference Centre, Trinity Square car park on North Church Street and Talbot
                Street car park. For satellite navigation systems please use the following information:
            </p>
            <p>
                <strong>Trinity Square car park:</strong> postcode NG1 4BR<br />
                co-ordinates 52.956785,-1.149316
            </p>
            <p>
                <strong>Talbot Street car park:</strong> postcode NG1 5GG<br />
                co-ordinates 52.956143,-1.154433
            </p>
        </section>


        <section>
            <h2>Important Dates</h2>
            <ImportantDatesList dates={dates}/>
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
)