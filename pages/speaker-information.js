import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"
import FullWidthImage from "../components/FullWidthImage"


export default () => (
    <Layout>
        <Head>
            <title>Speaker Information</title>
        </Head>
        <Header title={'Speaker Information'}/>

        <section name="Contents">
            <h1>Contents</h1>
            <p><strong>General</strong></p>
            <ul>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#tech">Tech</a></li>
            </ul>

            <p><strong>Before The Conference</strong></p>
            <ul>
                <li><a href="#we-need-to-know">What we need to know</a></li>
                <li><a href="#what-to-prepare">What to prepare</a></li>
            </ul>

            <p><strong>The Day Of The Conference</strong></p>
            <ul>
                <li><a href="#conference-arrival">Letting us know you have arrived</a></li>
                <li><a href="#pat-testing">PAT Testing</a></li>
                <li><a href="#room-arrival">Arriving at the room</a></li>
            </ul>

            <p><strong>After The Conference</strong></p>
            <ul>
                <li><a href="#after-party">The Unofficial After Party</a></li>
                <li><a href="#talk-videos">Videoed Talks</a></li>
            </ul>

            <p><strong>Suggestest Checklist</strong></p>
            <ul>
            </ul>

            <p><strong>Transport</strong></p>
            <ul>
                <li><a href="#train">Taking the train</a></li>
                <li><a href="#driving">Driving</a></li>
                <li><a href="#air">By Air</a></li>
            </ul>

            <p><strong>Staying in Nottingham</strong></p>
            <ul>
                <li><a href="#important-contacts">Important Contacts</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#resturants">Resturants</a></li>
            </ul>
        </section>
        
        <section id="general">
        <h1>General</h1> 
            <a name="rooms"/>
            <h2>Rooms</h2>
        
            <h4>Lecture Theatre 2</h4>
            <FullWidthImage url={'/static/rooms/LT2.png'}/>
            <p>
                <ul>
                    <strong>Seats:</strong> up to 470 people
                </ul>
            </p>

            <h4>Lecture Theatre 4</h4>
            <FullWidthImage url={'/static/rooms/LT4.png'}/>
            <p>
                <ul>
                    <strong>Seats:</strong> up to 100 people
                </ul>
            </p>

            <h4>Lecture Theatre 5</h4>
            <FullWidthImage url={'/static/rooms/LT5.png'}/>            
            <p>
                <ul>
                    <strong>Seats:</strong> up to 100 people
                </ul>
            </p>
            
            <a name="tech"/>
            <h2>Tech</h2>

            <h4>Screen sizes/aspect ratio</h4>
            <p>
                All of these screens are widescreen and are a mixture of 16:9 or 16:10 aspect ratio.
            </p>
            <h4>Adaptors (HMDI etc)</h4>
            <p>
                All rooms have wireless capabilities for MAC and PC, they also have both HDMi and VGA adaptors.
                The main lecture theatre (Lecture Theatre 2) has all of the above plus Mini Display Port and Mini HDMi. 
                There is also a visualizer available in each Lecture Theatre.
            </p>
            <h4>PAT testing</h4>
            <p>
                Any device which can be plugged in (including laptop chargers) needs to be less than 1 year old or PAT tested.
                We are currently looking into details around PAT testing to share.
            </p>
            <h4>Microphones</h4>
            <p>
                All rooms have the choice of clip-on, static or hand held microphones. Please let your AV support person/volunteer know if you have a preference.
            </p>
            <h4>Wi-Fi</h4>
            <p>
                We will email the Wi-Fi details shortly before the event.
            </p>
        </section>

        <section id="before">
        <h1>Before The Conference</h1> 

            <a name="we-need-to-know"/>
            <h2>What we need to know</h2>
            <li>Is there sound/video in your presentation?</li>

            <a name="what-to-prepare"/>
            <h2>What to prepare</h2>
            <li>A copy of your presentation on a usb stick</li>
            <li>A clicker</li>
            <li>If possible, get any electricals you will need on the day PAT Tested.</li>
        </section>

        <section id="day-of">
        <h1>The Day Of The Conference</h1> 
            <a name="conference-arrival"/>
            <h2>Letting us know you have arrived</h2>
            <h4>Check in at registration and come say hi at the information desk.</h4>
            <p>
                At least one of the organisers will be at the registration desk in the morning.
            </p>

            <a name="pat-testing"/>
            <h2>PAT Testing</h2>
            <h4>If you can, get your charger PAT tested before the event.</h4>
            <p>
                We are currently looking into providing PAT testing on the day. This depends on the available budget
                before the event. Due to venue insurance restrictions we need to be sure than anything that may be plugged 
                into a socket on the day, has a current PAT test sticker and certificate. This includes any laptop chargers.
            </p>

            <a name="room-arrival"/>
            <h2>Arriving at the room</h2>
            
            <h4>Please arrive 10 - 15 minutes before your presentation.</h4>
            <p>
                This is so that there is enough time to get you all set up.
            </p>
            
            <h4>Introduce yourself to the crew member looking after your room.</h4>
            <p>
                The crew member will make sure there is water, and will be happy to help you with your presentation
                needs. They will also help us make sure everything is running smoothly in your room. Please let them know 
                if there is anything we can provide to help you.
            </p>
            
            <h4>Meet the AV technician and get Mic'd up</h4>
            <p>
                There are a variety of microphones available in each room. Clip-on, static and hand held are avaiable, so 
                please let the technicians know if you have a preference.
            </p>
        </section>

        <section id="after">
        <h1>After The Conference</h1> 

            <a name="after-party"/>
            <h2>The Unofficial After Party</h2>
            <p>
                After the conference there will be a special PubConf featuring some of our speakers and special guests. This 
                evening event has comedy talks, music, food and beverages. It's great fun for all and we encourage you to come along.
            </p>

            <a name="talk-videos"/>
            <h2>Videoed Talks</h2>
            <p>
                All the talks are being videoed by the local company ShutterSocks. These will be posted on Vimeo as soon as they are available. There are a few reasons we are videoing the talks:
            </p>
            <li>For future conference submissions. Often conference submissions are strengthened with the evidence of your presentation skills.</li>
            <li>To keep the conversation going after the conference. Your talks can be shared to all those who might find them useful.</li>
        </section>

        <section id="checklist">
        <h1>Suggested Checklist</h1> 
            <li>Twitter handle on slides</li>
            <li>Clicker</li>
            <li>Backup of slides</li>
            <li>Laptop charger</li>
            <li>Timer</li>
            <li>The awesome <a href="https://open.spotify.com/playlist/0kTPxCiWN0kyYa8FSWpdi2?" target="_blank">Get Pumped Playlist</a></li>

            <h4>Our favourite available list</h4>
            <p>
                <a href="https://csswizardry.com/2016/06/speakers-checklist-before-and-after-your-talk/" target="_blank">This list by csswizardry</a> 
                is often used by us at other events. Thank you <a href=" https://twitter.com/Brunty" target="_blank">Brunty</a> for sharing this with us.
            </p>
        </section>

        <section>
        <h1>Transport</h1> 
            
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

            <a name="air"/>
            <h2>By Air</h2>
            <h4>From East Midlands Airport</h4>
            <section>
                <p>
                    The closest airport to Nottingham is East Midlands Airport which is 15 miles (approximately 24
                    kilometres) outside of the city. It takes about half an hour from there to travel into the city by car
                    or bus. There is a Skylink bus service that runs every half hour from the airport into Nottingham city
                    centre and stops a few minutes walk away from Nottingham Conference Centre.
                </p>
            </section>
        </section>

        <section>
        <h1>Staying in Nottingham</h1> 

            <a name="important-contacts"/>
            <h2>Important Contacts</h2>
            <h4>Conference</h4>
            <p>
                <li><strong>Co-organiser Jessica White:</strong></li>
                    <p>Tel: number will be emailed to you </p>
                    <p>Email: jessica@dddeastmidlands.com </p>
                    <li><strong>Co-organiser Moreton Brockley:</strong></li> 
                    <p>Email: moreton@dddeastmidlands.com</p>
            </p>

            <a name="hotels"/>
            <h2>Hotels</h2>
            <p>We don't have any partnerships or deals with any local hotels but here are a list of a few in City Center:</p>
            <li><a href="https://www.ihg.com/crowneplaza/hotels/gb/en/nottingham/notws/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-GB-_-NOTWS" target="_blank">Crowne Plaza</a></li>
            <li><a href="https://www.accorhotels.com/gb/hotel-6160-ibis-nottingham-centre/index.shtml" target="_blank">Ibis</a></li>
            <li><a href="https://www.roomzzz.com/locations/nottingham/" target="_blank">Roomzzz</a></li>
            <li><a href="https://www.mercurenottingham.com/" target="_blank">Mercure</a></li>

            <a name="resturants"/>
            <h2>Resturants</h2>
            <h4>Coffee</h4>
            <li><a href="https://www.cartwheelcoffee.com/" target="_blank">Cartwheel</a></li>
            <li><a href="https://www.outpost.coffee/" target="_blank">Outpost</a></li>
            <li><a href="https://200degs.com/" target="_blank">200 Degrees</a></li>
            <li><a href="https://www.thespecialtycoffeeshop.com/" target="_blank">Speciality</a></li>


            <h4>Breakfast</h4>
            <li><a href="https://anniesburgershack.com/menu/breakfast-menu" target="_blank">Annies Burger Shack</a></li>
            <li><a href="https://www.thepuddingpantry.co.uk/breakfast" target="_blank">Pudding Pantry</a></li>
            
            <h4>Dinner</h4>
            <li><a href="http://www.oscarandrosies.com/menu" target="_blank">Oscar And Rosies</a></li>
            <li><a href="https://anniesburgershack.com/menu/main-menu" target="_blank">Annies Burger Shack</a></li>
            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186356-d11933005-Reviews-Sexy_Mamma_Love_Spaghetti-Nottingham_Nottinghamshire_England.html" target="_blank">Sexy Mama's Spaghetti</a></li>
            <li><a href="http://bonzai-japaneserestaurant.co.uk/" target="_blank">Bonzai</a></li>

            <h4>Extra Requirements?</h4>
            <p>
                If you need to know about any vegan, vegetarian or gluten free resturants, get in touch and we will point
                you in the direction of some great ones. 
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
        `}
        </style>
    </Layout>
)