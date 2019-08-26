import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"
import FullWidthImage from "../components/FullWidthImage"


export default () => (
    <Layout>
        <Head>
            <title>Sponsor Information</title>
        </Head>
        <Header title={'Speaker Information'}/>

        <section name="Contents">
            <h1>Contents</h1>
            
            <p><strong><a href="#sponsor-brief">Sponsor Brief</a></strong></p>

            <p><strong><a href="#code-of-conduct">Code of Conduct</a></strong></p>

            <p><strong>Before The Conference</strong></p>
            <ul>
                <li><a href="#tickets">Tickets</a></li>
                <li><a href="#pat-before">PAT Testing</a></li>
            </ul>

            <p><strong>Setup The Day Before Conference</strong></p>
            <ul>
                <li><a href="#setup-time">Time To Setup</a></li>
                <li><a href="#before-parking">Parking</a></li>
                <li><a href="#lift-restrictions">Lift Restrictions</a></li>
            </ul>

            <p><strong>Transport On The Day</strong></p>
            <ul>
                <li><a href="#train">Taking the train</a></li>
                <li><a href="#driving">Driving</a></li>
            </ul>

            <p><strong>General Conference Day Information</strong></p>
            <ul>
                <li><a href="#power">Power</a></li>
                <li><a href="#exhibition-staff">Exhibition Staff</a></li>
                <li><a href="#health-and-safety">Health and Safety</a></li>
                <li><a href="#wifi">Wi-Fi</a></li>
                <li><a href="#catering">Catering</a></li>
            </ul>

            <p><strong>Exhibition Stalls</strong></p>
            <ul>
                <li><a href="#provided">What Is Provided?</a></li>
                <li><a href="#provide">What To Bring</a></li>
                <li><a href="#booth-restrictions">Restrictions</a></li>
            </ul>

            <p><strong>Social Media and Photos</strong></p>
            <ul>
                <li><a href="#photographs">Photographs</a></li>
                <li><a href="#social-posts">Social Media Posts</a></li>
                <li><a href="#dddem-social">DDD East Midlands on Social Media</a></li>
            </ul>

            <p><strong>Packing Up Day Of The Conference</strong></p>
            <ul>
                <li><a href="#teardown-time">Pick Up Time</a></li>
                <li><a href="#parking">Parking</a></li>
            </ul>

        </section>
        
        <section id="sponsor-brief">
        <h1>Sponsor Brief</h1> 
            <a name="sponsor-brief"/>
            <h2>Thank you.</h2>
            <p>
                Without your support, there wouldn’t be a DDD East Midlands event at all. This page outlines what you need to know on the day. 
            </p>
            <p>
                This year we expect around 350 - 400 attendees to join us in a day of learning and networking for the East Midlands technology community. 
            </p>
        </section>     

        <section id="code-of-conduct">
        <h1>Code of Conduct</h1> 
            <a name="code-of-conduct"/>
            <h2>Please Familiarise yourself with the Code of Conduct.</h2>
            <p>
               All involved in the DDD East Midlands Conference are subject to <a href="https://www.dddeastmidlands.com/code-of-conduct/">Code Of Conduct Page.</a> 
               This is not just for the day of the event, but for all presence of DDD East Midlands including Soical Media.
            </p>
            <p>
                Please make sure you are familiar with it and adhere to it at all times to create the most inclusive and friendly event for all involved.
            </p>
            <p>
                Should you have any concerns regarding the Code of Conduct before, during or after the event, please use the contact the organisers.  
            </p>
        </section> 

        <section id="before-the-conference">
        <h1>Before The Conference</h1> 
            <a name="tickets"/>
            <h2>Tickets</h2>
            <p>
                Depending on the sponsorship tier you have supported us with, you may have a number of tickets to the conference.
            </p>
            <p>
                If you know who your guaranteed tickets are going to be given to, please provide us with their emails so that we can send a link to Eventbrite. If this is still unsure, we can provide a code for you to access tickets with.
            </p>
            <p>
                We suggest that 2 - 3 of your tickets are given to those managing your exhibition booth. If you have more, you can give out internally, donate to local meetups, give away in competitions - what ever you think is best.
            </p>
            <p>
                Any tickets you consider “extra” as part of your sponsorship, you can dispense as you wish. Contact Jessica if you want assistance with this.
            </p>
            <a name="pat-before"/>
            <h2>PAT Testing</h2>
            <p>
                Any devices that will be plugged in during the day need to be PAT tested. They need to have a valid visible sticker on them or a certificate present. 
                Where possible, please try to get your devices PAT tested before the day. This includes any laptop chargers. 
            </p>
            <p>
                We are currently looking into having PAT testing available on the day. First priority will go to speakers and then to exhibitors.
            </p>
        </section> 

        <section id="day-before">
        <h1>Setup The Day Before Conference</h1> 
    
            <a name="setup-time"/>
            <h2>Time To Setup</h2>
            <p>
                You will be emailed a time slot closer to the event, in which you can set up your exhibition stall. This time slot will be somewhere between 18.00 – 21.30 on the 25th of October (the night before the event).
            </p>
            <p>
                We have to arrange this into time slots due to the limited vehicle space at the venue. If there are any restrictions you have regarding time slot, please let us know in advance.
            </p>
            <p>
                On the day of the event, the organisers will be at the venue from 07.30. You may turn up any time from then. Attendee registration opens at 08.30.
            </p>
            
            <a name="before-parking"/>
            <h2>Parking</h2>
            <p>
                Please use the loading bay on South Sherwood Street during your alloted time.
            </p>
            <p>
                The entrance to the South Sherwood Street loading bay on a busy road and right next to a bus stop. We ask that you do not obstruct this entrance, but instead, only park within the loading bay.
            </p>
            <p>
                Please limit yourselves to using one vehicle at a time.  
            </p>

            <a name="lift-restrictions"/>
            <h2>Lift Restrictions</h2>
            <p>
                Below are the lift restrictions. Please keep these in mind for anything you are bringing for your exhibition stall.
            </p>
            <table>
              <tr>
                <th>Lift</th>
                <th>Dimensions</th>
                <th>Max Weight.</th>
              </tr>
              <tr>
                <td>Loading bay lift</td>
                <td>Open topped x 1000 mm x 1470 mm</td>
                <td>1000 kg</td>
              </tr>
              <tr>
                <td>Newton lift doors</td>
                <td>2100 mm x 1100 mm</td>
                <td>1000 kg</td>
              </tr>
            </table>

        </section> 

        <section id="transport">
        <h1>Transport On The Day</h1>            
            <a name="train"/>
            <h2>Taking the train</h2>
            <h4>Head to Nottingham Train Station</h4>
            <p>
                Nottingham Station is the mainline train station close to Nottingham city centre. The train station is a
                15 minute walk from Nottingham Conference Centre, but for those new to the city it might be easier to
                take a taxi or use Nottingham’s tram NET (Nottingham Express Transit) system. Directions to the station
                tram stop are signposted throughout the train station building. The Conference Centre is located between
                the Royal Centre and Nottingham Trent University tram stop. Take a tram heading to either Phoenix Park
                or Hucknall. Exit the tram at the Royal Centre, continue down Goldsmith Street taking the first right
                turn onto Burton Street where you will find the Nottingham Conference Centre entrance on the left.
            </p>
            
            <a name="driving"/>
            <h2>Driving</h2>
            <h4>Directions to Park and Rides</h4>
            <p>
                From the north, exit the M1 at junction 26 and follow the signs for the A610 towards Nottingham city
                centre.
            </p>
            <p>
                There is a Park and Ride (tram) facility situated close to the M1 junction 26. The Park and Ride
                (Phoenix Park) site is clearly sign-posted off the A610. 
            </p>
            <p>
                Leave the tram at the Nottingham Trent University tram stop which is located on Goldsmith Street and walk past the main University entrance,
                turn left on to Burton Street where you will find the Nottingham Conference Centre entrance. 
            </p>
            <p>
                From the south, exit the M1 at junction 24 and follow the signs for the A453 to Nottingham city centre. 
            </p>
            <p>
                The Queen’s Drive Park and Ride is located just off the A453 (Queen’s Drive), follow signs for A453 /
                Queen’s Drive Industrial Estate and merge on to the A453 (Queen’s Drive). The Park and Ride is located
                on the opposite side of the road to the retail park and is clearly sign-posted. 
            </p>
            <p>
                Alight from the Park and Ride bus on Lower Parliament Street (Victoria Centre); Nottingham Conference Centre is a short walk
                away.
            </p>
            
            <h4>Car parks</h4>
            <p>
                Car parks in the city centre are clearly signposted from all major approach routes. There are two car
                parks close to Nottingham Conference Centre, Trinity Square car park on North Church Street and Talbot
                Street car park. For satellite navigation systems please use the following information:
            </p>
            <p>
                <strong><a href="http://www.nottinghamcity.gov.uk/transport-parking-and-streets/parking-and-permits/city-centre-parking/car-parks/trinity-square-car-park/" target="_blank">Trinity Square car park:</a></strong> postcode NG1 4BR<br />
                co-ordinates 52.956785,-1.149316
            </p>
            <p>
                <strong><a href="https://www.q-park.co.uk/en-gb/cities/nottingham/talbot-street/" target="_blank">Talbot Street car park:</a></strong> postcode NG1 5GG<br />
                co-ordinates 52.956143,-1.154433
            </p>
        </section>

        <section id="general">
        <h1>General Conference Day Information</h1> 
            <a name="power"/>
            <h2>Power</h2>
            <p>
                There will be some ports available on the day. DDD East Midlands will provide extension cables on request if you will need multiple ports on the day. 
                Please contact Jessica: <a href="mailto:jessica@dddeastmidlands.com">jessica@dddeastmidlands.com</a> at least two weeks prior to the event.                 
            </p>
            <p>
                Due to the venues insurance policy we require that any plugged in devices are PAT tested and have an in date sticker.
            </p>
            <p>
                We can provide PAT testing for a limited number of devices on the day, but priority will be given to speakers for the available slots. Where possible 
                please have your devices that will be plugged in on the day PAT tested.
            </p>

            <a name="exhibition-staff"/>
            <h2>Exhibition Staff</h2>
            <p>
                We expect that you have 1-3 people working at the exhibition stall. These are included in your ticket allowance for the event.
                Please have these people register their ticket at check-in on the day.
            </p>
            <p>
                Exhibitions stalls can be visited throughout the whole day, including during talk sessions. We expect you will be most busy during the breaks.
            </p>

            <a name="health-and-safety"/>
            <h2>Health and Safety</h2>
            <p>
                There will be space behind exhibition stall partitions for storage. Passageways, stairways and fire exits shall be kept free of obstruction; all loose packaging must be removed to keep walkways free from tripping hazards.
            </p>
            <p>
                Exhibitors exhibit entirely at their own risk. Nottingham Conference Centre and DDD East Midlands are not liable for any losses or damage to property which may occur.
            </p>
            <p>
                In the opening ceremony, there will be a briefing about fire evacuation procedures. If you are unable to attend the opening ceremony please request this information from either Moreton or Jessica.
            </p>

            <a name="wifi"/>
            <h2>Wifi</h2>
            <p>
                Free Wi-Fi is supplied by the venue. There will be separate access codes provided for staff/exhibitors and attendees. Access details are provided on the day. 
            </p>

            <a name="catering"/>
            <h2>Catering</h2>
            <p>
                Lunch and snacks will be provided on the day.
            </p>
            <p>
                All food is prepared in kitchens where nuts, gluten and other allergens could be present. As the menu descriptions cannot include all ingredients, please let us know prior to arrival if any of your representatives have a food allergy, and we will try to cater to them.
            </p>
        </section>

        <section id="stalls">
        <h1>Exhibition Stalls</h1> 
            <a name="provided"/>
            <h2>What Is Provided?</h2>
            <ul>
                <li>Provided table size: 170 cm x 150 cm</li>
                <li>Grey background screens.</li>
                <li>Grey background screens.</li>
            </ul>

            <a name="provide"/>
            <h2>What Is Recommended To Bring?</h2>
            <ul>
                <li>Linen</li>
                <li>Grey background screens.</li>
                <li>Anything for decorating your exhibition stall and background screens (swag, banners, leaflets, promotional material).</li>
                <li><i>(If included in your sponsorship)</i> Banners away from your exhibition booth</li>
            </ul>

            <a name="booth-restrictions"/>
            <h2>Restrictions</h2>
            <ul>
                <li>Please avoid bringing any displays with automatically moving parts, unless you can be assured that they will not be left unattended</li>
                <li>The height/weight restrictions of the lifts.</li>
            </ul>

        </section> 

        <section id="social-media">
        <h1>Social Media and Photos</h1> 
            <a name="photographs"/>
            <h2>Photographs</h2>
            <p>
            </p>

        </section> 

        <style jsx>
            {`
            section {
                max-width: ${theme.sizes.maxContentWidth};
                padding: ${theme.sizes.contentPadding};
                margin: auto;
            }
            section div{
                padding-bottom: 10px;
            }

            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
                text-align: center;
            }

            tr th{
                background-color: #dddddd;
            }
        `}
        </style>
    </Layout>
)