import Layout from '../../components/Layout'
import Header from "../../components/Header"
import theme from "../../theme/theme"
import Head from "next/head"

export default () => (
    <Layout>
        <Head>
            <title>Volunteer Information</title>
        </Head>
        <Header title={'Volunteer Information'}/>

        <section name="Contents">
            <h1>Contents</h1>
            
            <p><strong><a href="#introduction">Introduction</a></strong></p>
            <p><strong><a href="#code-of-conduct">Code of Conduct</a></strong></p>
            <p><strong>Responsibilities</strong></p>
            <ul>
                <li><a href="#time-commitment">What is the time commitment?</a></li>
                <li><a href="#volunteering-role">What does volunteering entail?</a></li>
                <li><a href="#voting">What is the voting about?</a></li>
                <li><a href="#free-time">What about the free half of the day?</a></li>
            </ul>
            <p><strong>Transport On The Day</strong></p>
            <ul>
                <li><a href="#train">Taking the train</a></li>
                <li><a href="#driving">Driving</a></li>
            </ul>
            <p><strong>General Conference Day Information</strong></p>
            <ul>
                <li><a href="#power">Power</a></li>
                <li><a href="#wifi">Wifi</a></li>
                <li><a href="#catering">Catering</a></li>
            </ul>
        </section>
        
        <section id="introduction">
        <h1>Introduction</h1> 
            <a name="introduction"/>
            <h2>Thank you.</h2>
            <p>
                This conference could not take place without a lot of dedicated help. Thank you for offering your time and effort
                 to help make this conference happen.
            </p>
        </section>     

        <section id="code-of-conduct">
        <h1>Code of Conduct</h1> 
            <a name="code-of-conduct"/>
            <h2>Please familiarise yourself with the Code of Conduct.</h2>
            <p>
               All involved in the DDD East Midlands Conference are subject to <a href="https://www.dddeastmidlands.com/code-of-conduct/">Code Of Conduct Page.</a> 
               This is not just for the day of the event, but for all presence of DDD East Midlands including Social Media.
            </p>
            <p>
                Please make sure you are familiar with it and adhere to it at all times to create the most inclusive and friendly event for all involved.
            </p>
            <p>
                Should you have any concerns regarding the Code of Conduct before, during or after the event, please contact the organisers.  
            </p>
        </section> 
    
        <section id="responsibilities">
        <h1>Responsibilities</h1>            
            <a name="time-commitment"/>
            <h2>What is the time commitment?</h2>
            <ul>
                <li>The evening of the 25th October (probably an hour or so)</li>
                <li>Half of the conference day.</li>
            </ul>
            
            <a name="volunteering-role"/>
            <h2>What does volunteering entail?</h2>
            <h4>The Friday evening before the event (25th October)</h4> 
            <p>We ask you to come to the venue to be shown around. Here we will:</p>
            <ul>
                <li>Re-iterate responsibilities.</li>
                <li>Show you the layout (where rooms are, toilets, fire escapes etc).</li>
                <li>Give you your hoodies.</li>
                <li>Ask you to help us set up lanyards and some of the area.</li>
            </ul>

            <h4>On the day of the conference</h4> 
            <h5>If you are responsible for a room:</h5>
            <ul>
                <li>Inform us if a speaker has not shown up to their session.</li>
                <li>Ensure there is water available for the speakers.</li>
                <li>Make sure the speaker has everything they need.</li>
                <li>Count votes at the end of each session and report them back to Moreton.</li>
            </ul>

            <h5>If you're responsibilities are outside of a room:</h5>
            <ul>
                <li>Answer attendee questions or direct them to the information desk if you can’t answer their queries.</li>
                <li>Help us manage the Information Desk.</li>
                <li>Help us with bits and bobs to ensure the event goes smoothly.</li>
            </ul>

            <a name="voting"/>
            <h2>What is the voting about?</h2>
            <p>
                There will be a box outside each room and cards provided for attendees to vote with.
            </p>
            <ul>
                <strong><li className="green">Green - That talk was EPIC.</li>
                <li className="yellow">Yellow  - That talk was good.</li>
                <li className="red">Red  -That talk wasn't for me.</li></strong>
            </ul>
            <p>
                These are used for feedback and so that we know which talks do well. You can share the results with the speaker if they ask for them
            </p>

            <a name="free-time"/>
            <h2>What about the free half of the day?</h2>
            <p>
                For the remaining half of the day, you can do as you please! Enjoy the conference and activities available.
            </p>

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
                There will be some electricity sockets available on the day. DDD East Midlands will provide extension cables on request if you will need multiple ports on the day. 
                Please contact Jessica: <a href="mailto:jessica@dddeastmidlands.com">jessica@dddeastmidlands.com</a> at least two weeks prior to the event.                 
            </p>
            <p>
                Due to the venues insurance policy we require that any plugged in devices are PAT tested and have an in date sticker.
            </p>
            <p>
                We can provide PAT testing for a limited number of devices on the day, but priority will be given to speakers for the available slots. Where possible 
                please have your devices that will be plugged in on the day PAT tested.
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
                All food is prepared in kitchens where nuts, gluten and other allergens could be present. As the menu descriptions cannot include all ingredients, we will try to cater depending on the details you gave on your Eventbrite order.
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

            .green{
                color: green;
            }

            .yellow{
                color: orange;
            }

            .red{
                color: red;
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