import Layout from '../../components/Layout'
import Header from "../../components/Header"
import theme from "../../theme/theme"
import Head from "next/head"
import FullWidthImage from "../../components/FullWidthImage"


export default () => (
    <Layout>
        <Head>
            <title>Speaker Information</title>
        </Head>
        <Header title={'Speaker Information'}/>

        <section name="Contents">
            <h1>Contents</h1>

            <p><strong><a href="#introduction">Introduction</a></strong></p>

            <p><strong><a href="#code-of-conduct">Code of Conduct</a></strong></p>
            
            <p><strong>General</strong></p>
            <ul>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#tech"> Available Tech</a></li>
            </ul>
            
            <p><strong>Before The Conference</strong></p>
            <ul>
                <li><a href="#we-need-to-know">What we need to know</a></li>
                <li><a href="#what-to-prepare">What to prepare</a></li>
            </ul>

            <p><strong><a href="#voting">Voting</a></strong></p>

            <p><strong>The Day Of The Conference</strong></p>
            <ul>
                <li><a href="#conference-arrival">Letting us know you have arrived</a></li>
                <li><a href="#pat-testing">PAT Testing</a></li>
                <li><a href="#green-room">Green Room</a></li>
                <li><a href="#room-arrival">Arriving at the room</a></li>
                <li><a href="#clickers">Clickers</a></li>
                <li><a href="#q-and-a">Q and A space</a></li>
            </ul>

            <p><strong>Social Media and Photos</strong></p>
            <ul>
                <li><a href="#photographs">Photographs</a></li>
                <li><a href="#instagram">Instagram Stories</a></li>
                <li><a href="#social-posts">Social Media Posts</a></li>
            </ul>

            <p><strong>After The Conference Media</strong></p>
            <ul>
                <li><a href="#talk-videos">Videoed Talks</a></li>
            </ul>

            <p><strong>PubConf - The Unofficial After Party</strong></p>
            <ul>
                <li><a href="#after-party-about">About</a></li>
                <li><a href="#after-party-rules">Rules of PubConf</a></li>
                <li><a href="#pubconf-tickets">Be alerted about tickets</a></li>
                <li><a href="#speak-pubconf">Fancy giving it a shot?</a></li>
            </ul>

            <p><strong><a href="#checklist">Suggested Checklist</a></strong></p>

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
                <li><a href="#restaurants">Restaurants</a></li>
            </ul>
        </section>
                      
        <section id="introduction">
        <h1>Introduction</h1> 
            <a name="introduction"/>
            <h2>Thank you.</h2>
            <p>
                Without your support and effort, there wouldn’t be a DDD East Midlands event at all. This page outlines what you need to know on the day. 
            </p>
        </section>     

        <section id="code-of-conduct">
        <h1>Code of Conduct</h1> 
            <a name="code-of-conduct"/>
            <h2>Please familiarise yourself with the Code of Conduct.</h2>
            <p>
               All involved in the DDD East Midlands Conference are subject to the <a href="https://www.dddeastmidlands.com/code-of-conduct/">Code Of Conduct.</a> 
               This is not just for the day of the event, but for all presence of DDD East Midlands including Social Media.
            </p>
            <p>
                Please make sure you are familiar with it and adhere to it at all times to create the most inclusive and friendly event for all involved.
            </p>
            <p>
                Should you have any concerns regarding the Code of Conduct before, during or after the event, please contact the organisers.  
            </p>
        </section>

        <section id="general">
        <h1>General</h1> 
            <a name="rooms"/>
            <h2>Rooms</h2>
        
            <h4>Room 1 (Lecture Theatre 2)</h4>
            <FullWidthImage url={'/static/rooms/LT2.png'}/>
            <p>
                <ul>
                    <strong>Seats:</strong> up to 470 people
                </ul>
            </p>

            <h4>Room 2 (Lecture Theatre 4)</h4>
            <FullWidthImage url={'/static/rooms/LT4.png'}/>
            <p>
                <ul>
                    <strong>Seats:</strong> up to 100 people
                </ul>
            </p>

            <h4>Room 3 (Lecture Theatre 5)</h4>
            <FullWidthImage url={'/static/rooms/LT5.png'}/>            
            <p>
                <ul>
                    <strong>Seats:</strong> up to 100 people
                </ul>
            </p>
            
            <a name="tech"/>
            <h2>Available Tech</h2>

            <h4>Screen sizes/aspect ratio</h4>
            <p>
                All of these screens are widescreen and are a mixture of 16:9 or 16:10 aspect ratio.
            </p>
            <h4>Adaptors (HDMI etc)</h4>
            <p>
                All rooms have wireless capabilities for MAC and PC, they also have both HDMI and VGA adaptors.
                The main lecture theatre (Room 1/Lecture Theatre 2) has all of the above plus Mini Display Port and Mini HDMI. 
                There is also a visualizer available in each Lecture Theatre.
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

        <section id="voting">
        <h1>Voting</h1> 
            <a name="voting"/>
            <h2>Attendees can vote using a traffic light system.</h2>
           <p>
               During the day there will boxes outside each room for attendees to put their votes into. All votes will be 
               conducted with a traffic light system:
           </p>
           <ul>
                <strong><li className="green">Green - That talk was EPIC</li>
                <li className="yellow">Yellow  - That talk was good</li>
                <li className="red">Red  - That talk wasn't for me.</li></strong>
            </ul>
            <p>
                There are a couple of reasons we have this voting system in place:
            </p>
            <ul>
                <li>
                    <strong>To give our speakers some light indication around the reception of their talks.</strong> We cannot offer more in-depth means of feedback this 
                    year as it would require a level of moderation and work that, unfortunately, we don't have the time to invest in this first year.
                </li>
                <li>
                    <strong>To give us an indication of which subject areas are of particular interest in the local area.</strong> This is not for any future talk 
                    curation, but to give us more knowledge about the local area so that we can help our sponsors target their efforts appropriately, 
                    and to aid us in our own marketing efforts.
                </li>
            </ul>
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
            <h4>If you can, get any devices that will be plugged in PAT tested before the event.</h4>
            <p>            
                Due to venue insurance restrictions, we need to be sure that anything that may be plugged 
                into a socket on the day <strong>either:</strong>
            </p>
            <ul>
                <li>Has a current PAT test sticker/certificate</li>
                <li>Is less than one year old. Please ensure that where electrical items are less than a year old, evidence of this is provided.</li>
            </ul>
            <p>
                This includes any laptop chargers or phone chargers.
            </p>
            <p>
                We will provide limited PAT testing on the day, with speakers being priority candidates for this service.
                This service will be available between <strong>7.30am - 9.30am the day of the conference</strong>. Registration for the 
                event opens to the general public at 8.00am so there is a window in the morning where exclusively speakers and exhibitors can 
                queue to get their devices PAT tested.
            </p>
            <p>
                If you will need your laptop cables PAT tested but cannot make it to the venue between those hours, contact Jessica to arrange 
                dropping off your chargers the evening before.
            </p>

            <a name="green-room"/>
            <h2>Green Room</h2>
            <h4>There is a room for speakers to get some space.</h4>
            <p>
                On the day there will be a speakers green room. Here you can practice or prepare for your talk, or just get some peace away 
                from the hustle and bustle of the conference.
            </p>
            <p>
               <strong>Try out the visualiser</strong> 
            </p>
            <p>
                A visualiser will be set up in the Speakers Green Room so that you can try it out before you do your talk.
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
                There are a variety of microphones available in each room. Clip-on, static and hand held are available, so 
                please let the technicians know if you have a preference.
            </p>
            <a name="clickers"/>
            <h2>Clickers</h2>
            <h4>You can bring your own clicker or we can provide one.</h4>
            <p>
                We can provide 3 clickers for the day (one per room). So if you do use one of the clickers provided, please
                make sure it stays in the room for the next speaker who might need it.
            </p>
            <a name="q-and-a"/>
            <h2>Q and A space</h2>
            <h4>Want a place where people can approach you with their questions after your talk?</h4>
            <p>
                We'll provide a space in the breakout area with a table and chair. Book in a time slot with Jessica, and you can advertise
                during or at the end of your talk that you will be available there to be approached by attendees after your talk.
            </p>
        </section>

        <section id="social-media">
        <h1>Social Media and Photos</h1>
            <p>
                Feel free to take photos and post on social media before, after and during the event. There are just a few guidelines we ask you to respect.
            </p> 
            <a name="photographs"/>
            <h2>Photographs</h2>
            <p>
                We will have a coloured lanyard system at the event to indicate whether attendees are OK with their photo being taken and used.
            </p>
            <ul>
                <li className="green">Green — It’s fine for their photo to be taken</li>
                <li className="red">Red — Do not include me in your photos or promotional material</li>
            </ul>
            <p>
                We ask that you please respect this system and only use photos that have attendees with green lanyards only.
            </p>

            <a name="instagram"/>
            <h2>Instagram Stories</h2>
            <p>
                As part of the first event, we are going to have some select volunteers run a couple of our social media accounts. 
                If you would not mind appearing on our Instagram stories with a short video of what you have thought about the event 
                and your experience of taking part, please let us know so our helpful volunteers can meet you at the Q and A space to record 
                a short interview on our Instagram.
            </p>

            <a name="social-media"/>
            <h2>Social Media Posts</h2>
            <p>
                Please use any of the below information to tag us. If using our hashtag or handles though, please avoid promoting 
                anything that doesn’t align with our code of conduct.
            </p>
            <h3>DDD East Midlands on Social Media</h3>
            <ul>Hashtags:   #DDDEM   |    #DDDEM2019</ul>
            <ul>Twitter: <a href="https://twitter.com/dddeastmidlands" target="_blank">@dddeastmidlands</a></ul>
            <ul>LinkedIn: <a href="https://www.linkedin.com/company/ddd-east-midlands-limited/" target="_blank">DDD East Midlands Limited</a></ul>
            <ul>Instagram: <a href="https://www.instagram.com/dddeastmidlands/?hl=en" target="_blank">@dddeastmidlands</a></ul>

        </section> 

        <section id="after">
        <h1>After The Conference Media</h1> 
            <a name="talk-videos"/>
            <h2>Videoed Talks</h2>
            <p>
                All the talks are being videoed by the local company ShutterSocks. These will be posted on Vimeo as soon as they are available. There are a few reasons we are videoing the talks:
            </p>
            <li>For future conference submissions. Often conference submissions are strengthened with the evidence of your presentation skills.</li>
            <li>To keep the conversation going after the conference. Your talks can be shared with all those who might find them useful.</li>
        </section>


        <section id="pubconf">
        <h1>PubConf - The Unofficial After Party</h1> 

            <a name="after-party-about"/>
            <h2>About</h2>
            <p>
                After the conference, there will be a special <a href="https://pubconf.io/events/2019/nottingham/" target="_blank">PubConf</a> featuring some of our speakers and special guests. This 
                evening event has comedy talks, music, food and beverages. It's great fun for all and we encourage you to come along.
            </p>
            <p>
                <strong>Quick about:</strong>
                <ul>
                    <li>
                        The talks conducted at PubConf are 5 minute, comedy ignite talks:
                    </li>
                    <li>
                        20 slides timed to increment every 15 seconds. The speakers have no control
                    </li>
                    <li>
                        The top three talks will go into a final battle to win prizes. These three finalists will be presented 
                        with a ignite deck they have never seen before and given a topic. They will then have to come up with an 
                        impromptu talk on the spot.
                    </li>
                    <li>
                        Talk topics have an emphasis on humour. Often the content is not suitable to be shared away 
                        from the safety of PubConf.
                    </li>
                    <li>
                        PubConf is a separate entity and business from DDD East Midlands. As such they have their own 
                        Code of Conduct. Hence "Unofficial" after party. We are not involved in its organisation.
                    </li>
                </ul>
            </p>
            <p>
                This is the first PubConf in the UK outside of London and it's going to be brilliant.
            </p>
            
            <FullWidthImage url={'/static/banners/pubconf.png'}/>

            <a name="after-party-rules"/>
            <h2>Rules of PubConf</h2>
            <p>
                <strong>What happens at PubConf, stays at Pubconf.</strong>
                <ul>
                    <li>No photos or videos unless you have the speakers explicit permission.</li>
                    <li>No quoting talks. (Taken out of context, a joke can be damaging)</li>
                </ul>
            </p>

            <a name="pubconf-tickets"/>
            <h2>Be alerted about tickets</h2>
            <p>
                Go to the <a href="https://pubconf.io/events/2019/nottingham/" target="_blank">PubConf website</a> to find out more and 
                sign up for an email alert when tickets are released.
            </p>

            <a name="speak-pubconf"/>
            <h2>Fancy giving it a shot?</h2>
            <p>
                Dylan Beattie is organising PubConf Nottingham. If you are a speaker and are interested in taking part (it's a great challenge 
                and a lot of fun) do the following:
            </p>
           <ul>
               <li>
                   <a href="https://www.technottingham.com/slack" target="_blank">Join the Tech Nottingham Slack Group</a>
               </li>
               <li>
                   Join the channel #pubconf or DM Dylan Beattie
               </li>
               <li>
                   Send Dylan a photo, talk title and tagline for yourself.
               </li>
           </ul>
           <p>
               See an example of a previous PubConf talk <a href="https://youtu.be/USmUlshjcd4" target="_blank">here</a>
            </p>

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
                is often used by us at other events. Thank you <a href="https://twitter.com/Brunty" target="_blank">Brunty</a> for sharing this with us.
            </p>
        </section>

        <section id="transport">
        <h1>Transport</h1> 
            
            <a name="train"/>
            <h2>Taking the train</h2>
            <h4>Head to Nottingham Train Station</h4>
            <p>
                Nottingham Station is the mainline train station close to Nottingham city centre. The train station is a
                15 minute walk from Nottingham Conference Centre, but for those new to the city, it might be easier to
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
            <p>
                The closest airport to Nottingham is East Midlands Airport which is 15 miles (approximately 24
                kilometres) outside of the city. It takes about half an hour from there to travel into the city by car
                or bus. There is a Skylink bus service that runs every half hour from the airport into Nottingham city
                centre and stops a few minutes walk away from Nottingham Conference Centre.
            </p>
        </section>

        <section id="nottingham">
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
            <p>We don't have any partnerships or deals with any local hotels but here is a list of a few in City Center:</p>
            <li><a href="https://www.ihg.com/crowneplaza/hotels/gb/en/nottingham/notws/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-GB-_-NOTWS" target="_blank">Crowne Plaza</a></li>
            <li><a href="https://www.accorhotels.com/gb/hotel-6160-ibis-nottingham-centre/index.shtml" target="_blank">Ibis</a></li>
            <li><a href="https://www.roomzzz.com/locations/nottingham/" target="_blank">Roomzzz</a></li>
            <li><a href="https://www.mercurenottingham.com/" target="_blank">Mercure</a></li>

            <a name="restaurants"/>
            <h2>Restaurants</h2>
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
                If you need to know about any vegan, vegetarian or gluten-free restaurants, get in touch and we will point
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
            .green{
                color: green;
            }
             .yellow{
                color: orange;
            }
             .red{
                color: red;
            }
        `}
        </style>
    </Layout>
)