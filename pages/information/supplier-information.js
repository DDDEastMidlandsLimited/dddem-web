import Layout from '../../components/Layout'
import Header from "../../components/Header"
import FullWidthImage from "../../components/FullWidthImage"
import theme from "../../theme/theme"
import Head from "next/head"


export default () => (
    <Layout>
        <Head>
            <title>Supplier Information</title>
        </Head>
        <Header title={'Supplier Information'}/>

        <section name="Contents">
            <h1>Contents</h1>

            <p><strong><a href="#code-of-conduct">Code of Conduct</a></strong></p>

            <p><strong>Before The Conference</strong></p>
            <ul>
                <li><a href="#we-need-to-know">What we need to know</a></li>
                <li><a href="#what-to-prepare">What to prepare</a></li>
            </ul>

            <p><strong>Setup The Day Before Conference</strong></p>
            <ul>
                <li><a href="#setup-time">Time To Setup</a></li>
                <li><a href="#before-parking">Parking</a></li>
                <li><a href="#lift-restrictions">Lift Restrictions</a></li>
            </ul>

            <p><strong>The Day Of The Conference</strong></p>
            <ul>
                <li><a href="#conference-arrival">Letting us know you have arrived</a></li>
                <li><a href="#pat-testing">PAT Testing</a></li>
                <li><a href="#green-room">Green Room</a></li>
            </ul>

            <p><strong>Social Media and Photos</strong></p>
            <ul>
                <li><a href="#photographs">Photographs</a></li>
                <li><a href="#social-posts">Social Media Posts</a></li>
            </ul>


            <p><strong>Transport</strong></p>
            <ul>
                <li><a href="#train">Taking the train</a></li>
                <li><a href="#driving">Driving</a></li>
                <li><a href="#air">By Air</a></li>
            </ul>

            <p><strong>Packing Up Day Of The Conference</strong></p>
            <ul>
                <li><a href="#teardown-time">Pick Up Time</a></li>
            </ul>

            <p><strong>PubConf - The Unofficial After Party</strong></p>
            <ul>
                <li><a href="#after-party-about">About</a></li>
                <li><a href="#after-party-rules">Rules of PubConf</a></li>
                <li><a href="#pubconf-tickets">Be alerted about tickets</a></li>
                <li><a href="#speak-pubconf">Fancy giving it a shot?</a></li>
            </ul>

            <p><strong><a href="#contact">Contacts</a></strong></p>
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
        
        <section id="day-before">
        <h1>Setup The Day Before Conference</h1> 
            
            <a name="general"/>
            <h2>General</h2>
            <p>
                We will be at the venue the evening of Friday 25th October. If you need to do any set up before the event, please let Jessica know 
                so that she can arrange a time for you to park at the venue.
            </p>

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
                Please use the loading bay on South Sherwood Street during your allotted time.
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


        <section id="before">
        <h1>Before The Conference</h1> 

            <a name="we-need-to-know"/>
            <h2>What we need to know</h2>
            <li>Any requirements you have for set-up etc</li>

            <a name="what-to-prepare"/>
            <h2>What to prepare</h2>
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
                This will be a safe space. Use it as you wish. You can leave equipment here if you wish, or at the information desk (as there will always be 
                someone at the information desk from the DDD East Midlands staff).
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
            <p>
                The closest airport to Nottingham is East Midlands Airport which is 15 miles (approximately 24
                kilometres) outside of the city. It takes about half an hour from there to travel into the city by car
                or bus. There is a Skylink bus service that runs every half hour from the airport into Nottingham city
                centre and stops a few minutes walk away from Nottingham Conference Centre.
            </p>

        </section>

        <section id="packing-up">
        <h1>Packing Up Day Of The Conference</h1> 
            <a name="teardown-time"/>
            <h2>Collecting your exhibition items.</h2>
            <p>
                You will be emailed a time slot closer to the event, in which you can bring a vehicle to the venue to collect any items you need to collect by car.  
                This time slot will be somewhere between 16.30 – 18.30 on the 26th of October (the day of the event).
            </p>
            <p>
                We have to arrange this into time slots due to the limited vehicle space at the venue. If there are any restrictions you have regarding time slot, 
                or you don’t think you will need one, please let us know in advance.
            </p>
            <p>
                <strong>Location: </strong>We ask that you use the loading bay on South Sherwood Street.
            </p>
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

        <section id="contact">
        <a name="contact"/>
        <h1>Contact</h1> 
            <p>
                There are a number of ways to contact the organisers before and during the event:
            </p>
            <h2>Slack</h2>
            <p>
                You will be added to a DDD East Midlands Slack Channel. Jessica and Moreton will be reachable on there. Please use their handle for anything urgent.
            </p>
            <h2>Email</h2>
            <p>
                Using the @dddeastmidlands.com email addresses:
                <li><a href="mailto:jessica@dddeastmidlands.com">Jessica's email</a></li>
                <li><a href="mailto:moreton@dddeastmidlands.com">Moreton's email</a></li>
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