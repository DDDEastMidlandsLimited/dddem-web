import Layout from '../../components/Layout'
import theme from '../../theme/theme'
import Header from "../../components/Header"
import VenueButton from '../../components/VenueButton'
import FullWidthImage from "../../components/FullWidthImage"
import Head from "next/head"

export default (props) => (
    <Layout>
        <Head>
            <title>Venue</title>
        </Head>
        <Header title={'Venue'}/>

        <section>
            <h2 tabIndex="0" className="aligncenter">
                We are super excited to announce that we will be hosted by 
                <br/>
                <a href="http://www.nottinghamconferencecentre.co.uk/">The Nottingham Conference Centre</a>.
            </h2>
        </section>
        <section>
            <FullWidthImage url={'/static/banners/thencc.jpg'}/>
        </section>
        <section>
            <h1 tabIndex="0">
                Directions to Nottingham Conference Centre
            </h1>
        </section>
        <VenueButton/>
        <section>
            <h2 tabIndex="0">
                By rail
            </h2>
            <p tabIndex="0">
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
            <h2 tabIndex="0">
                By air
            </h2>
            <p tabIndex="0">
                The closest airport to Nottingham is East Midlands Airport which is 15 miles (approximately 24
                kilometres) outside of the city. It takes about half an hour from there to travel into the city by car
                or bus. There is a Skylink bus service that runs every half hour from the airport into Nottingham city
                centre and stops a few minutes walk away from Nottingham Conference Centre.
            </p>
        </section>

        <section>
            <h2 tabIndex="0">
                By car
            </h2>
            <p tabIndex="0">
                From the north, exit the M1 at junction 26 and follow the signs for the A610 towards Nottingham city
                centre.
            </p>
            <p tabIndex="0">
                There is a Park and Ride (tram) facility situated close to the M1 junction 26. The Park and Ride
                (Phoenix Park) site is clearly sign-posted off the A610. 
            </p>
            <p tabIndex="0">
                Leave the tram at the Nottingham Trent University tram stop which is located on Goldsmith Street and walk past the main University entrance,
                turn left on to Burton Street where you will find the Nottingham Conference Centre entrance. 
            </p>
            <p tabIndex="0">
                From the south, exit the M1 at junction 24 and follow the signs for the A453 to Nottingham city centre. 
            </p>
            <p tabIndex="0">
                The Queen’s Drive Park and Ride is located just off the A453 (Queen’s Drive), follow signs for A453 /
                Queen’s Drive Industrial Estate and merge on to the A453 (Queen’s Drive). The Park and Ride is located
                on the opposite side of the road to the retail park and is clearly sign-posted. 
            </p>
            <p tabIndex="0">
                Alight from the Park and Ride bus on Lower Parliament Street (Victoria Centre); Nottingham Conference Centre is a short walk
                away.
            </p>
        </section>

        <section>
            <h4 tabIndex="0">
                Car parking
            </h4>
            <p tabIndex="0">
                Car parks in the city centre are clearly signposted from all major approach routes. There are two car
                parks close to Nottingham Conference Centre, Trinity Square car park on North Church Street and Talbot
                Street car park. For satellite navigation systems please use the following information:
            </p>
            <p tabIndex="0">
                <strong><a href="http://www.nottinghamcity.gov.uk/transport-parking-and-streets/parking-and-permits/city-centre-parking/car-parks/trinity-square-car-park/" target="_blank">Trinity Square car park:</a></strong> postcode NG1 4BR<br />
                co-ordinates 52.956785,-1.149316
            </p>
            <p tabIndex="0">
                <strong><a href="https://www.q-park.co.uk/en-gb/cities/nottingham/talbot-street/" target="_blank">Talbot Street car park:</a></strong> postcode NG1 5GG<br />
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
)