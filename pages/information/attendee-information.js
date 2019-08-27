import Layout from '../../components/Layout'
import Header from "../../components/Header"
import theme from "../../theme/theme"
import Head from "next/head"

export default () => (
    <Layout>
        <Head>
            <title>Attendee Information</title>
        </Head>
        <Header title={'Attendee Information'}/>

        <section name="Contents">
            <h1>Contents</h1>
            
            <p><strong><a href="#attendee-brief">Attendee Brief</a></strong></p>
            <p><strong><a href="#code-of-conduct">Code of Conduct</a></strong></p>
            <p><strong><a href="#when-and-where">When and Where?</a></strong></p>
            <p><strong><a href="#age">Age Restrictions</a></strong></p>
            <p><strong>Tickets</strong></p>
            <ul>
                <li><a href="#using-tickets">Using Tickets</a></li>
                <li><a href="#returning-tickets">Returning Tickets</a></li>
                <li><a href="#waiting-list">Waiting List</a></li>
            </ul>
            <p><strong>Before The Day</strong></p>
            <ul>
                <li><a href="#pat-before">PAT Testing</a></li>
            </ul>
            <p><strong>Transport On The Day</strong></p>
            <ul>
                <li><a href="#train">Taking the train</a></li>
                <li><a href="#driving">Driving</a></li>
            </ul>
            <p><strong>Coming To The Event</strong></p>
            <ul>
                <li><a href="#coffee-meet">Coffee Meet</a></li>
                <li><a href="#registration">Registration</a></li>
            </ul>
            <p><strong>Catering</strong></p>
            <ul>
                <li><a href="#food">Food and Dietary Requirements</a></li>
                <li><a href="#drink">Alcohol</a></li>
                <li><a href="#coffee">Coffee</a></li>
            </ul>
            <p><strong><a href="#wifi">Wifi</a></strong></p>
            <p><strong>Social Media and Photos</strong></p>
            <ul>
                <li><a href="#photographs">Photographs</a></li>
                <li><a href="#social-posts">Social Media Posts</a></li>
            </ul>
            <p><strong><a href="#pubconf">The Unofficial After Party</a></strong></p>


        </section>
        
        <section id="attendee-brief">
        <h1>Attendee Brief</h1> 
            <a name="attendee-brief"/>
            <h2>Thank you.</h2>
            <p>
                Without your support, there wouldn’t be a DDD East Midlands Conference. Thank you for being an involved and encouraging community.
            </p>
            <p>
                This is going to be a great day full of amazing talks, exhibition stalls and more. We can't wait to meet you all and hope you have a fantastic day.
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

        <section id="where-and-when">
            <a name="when-and-where"/>
            <h1>When and Where?</h1>
            <h2>When</h2>
            <p>
              26th October 2019 8:00am - 6:00pm.
            </p>
            <h2>Where</h2>
            <p>
               <a href="http://www.nottinghamconferencecentre.co.uk/">The Nottingham Conference Centre</a>
            </p>
        </section> 

        <section id="age-restrictions">
            <a name="age"/>
            <h1>Age Restrictions</h1>
            <p>
                For insurance reasons, only people over the age of 18 can attend DDD East Midlands. We would love to bring this age limit down in the future, but for the first event we want to keep some of the cost and organisational overhead relatively low.
            </p>
        </section> 

        <section id="tickets">
        <h1>Tickets</h1>            

            <a name="using-tickets"/>
            <h2>Using Tickets</h2>
            <p>
                We are using Eventbrite for our ticketing. Registration will open from 8am. On entrance one of the crew of volunteers will ask to scan your QR code.
            </p>
            
            <a name="returning-tickets"/>
            <h2>Returning Tickets</h2>
            <p>
                If for any reason you are no longer able to attend the conference, please return your ticket so that someone else can claim the place. We do pay per person, 
                so this will have an impact on us if you can no longer attend but don't return the ticket. 
            </p>

            <a name="waiting-list"/>
            <h2>Waiting List</h2>
            <p>
                The tickets for this event sold out within a day for both releases. If you were not lucky enough to get a ticket, please 
                <a href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058">sign up to the waitlist here</a>. If a ticket becomes available, and you are next on 
                the waitlist you will recieve an email and given 24 hours to claim your ticket.
            </p>
        </section> 
 
        <section id="before-the-day">
        <h1>Before The Day</h1>            
            <a name="pat-before"/>
            <h2>PAT Testing</h2>
            <p>
                This point is particularly important if you are taking part in our "Hacktober Corner".
            </p>
            <p>
                Any devices that will be plugged in during the day need to be PAT tested. They need to have a valid visible sticker on them or a certificate present. 
                Where possible, please try to get your devices PAT tested before the day. This includes any laptop chargers. 
            </p>
            <p>
               There will be a limited amount of PAT testing available on the day. First priority will go to speakers and then to exhibitors.
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

        <section id="registration">
        <h1>Coming To The Event</h1>            
            <a name="coffee-meet"/>
            <h2>Coffee Meet</h2>
            <p>
                We know that it isn't always easy to walk into an event alone. One of our volunteers will be at the Costa near the venue to meet those who want to come to the conference with company.
                They will be heading off from Costa at 8.30 to walk to the venue and get you all signed in.
            </p>

            <a name="registration"/>
            <h2>Registration</h2>
            <p>
                Registration opens at 8.00am with the opening ceremony starting at 9.00am. You will need your Eventbrite ticket as volunteers will be scanning the QR code.
            </p>
            <p>
                Once you have been scanned in you will be given a lanyard (the colour of which is base don whether you are happy having your photo taken or not) and asked to fill in the information on the front (Name, Pronoun).
            </p>
        </section> 

        <section id="catering">
        <h1>Catering</h1>            
            <a name="food"/>
            <h2>Food and Dietary Requirements</h2>
            <p>
                Lunch and snacks will be provided on the day.
            </p>
            <p>
                All food is prepared in kitchens where nuts, gluten and other allergens could be present. As the menu descriptions cannot include all ingredients, we will try to cater to the requirements you listed as part of your ticket registration.
            </p>

            <a name="drink"/>
            <h2>Alcohol</h2>
            <p>
                We will not be serving alcohol as part of the event and ask that you don't bring any with you as we are not licenced.
            </p>

            <a name="coffee"/>
            <h2>Coffee</h2>
            <p>
                There is a coffee cart at the event being run by <a href="https://www.cartwheelcoffee.com/" target="_blank">Cartwheel Coffee</a>, thanks to our Sponsors UNiDAYS.
            </p>

        </section> 

        <section id="wifi">
        <a name="wifi"/>
        <h1>Wifi</h1>            
            <h2>There will be free Wifi on the day</h2>
            <p>
                This is provided by the venue and we will give out details on the day.
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
                You will be able to pick your lanyard on registration.
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

        <section id="pubconf">
        <a name="pubconf"/>
        <h1>The Unofficial After Party</h1>            
            <h2>PubConf</h2>
            <p>
                After the conference there will be an unofficial after party at <a href="https://montysbarandsocial.co.uk" target="_blank">Montys Bar and Social</a>
            </p>
            <p>
                PubConf is an evening of comedy and music. Selected speakers will give humerous talks against the clock. All talks are "Ignite" talks. Speakers have 
                20 slides which self increment every 15 seconds. The top three presenters then go on to compete for prizes by presenting ignite decks which they have never 
                seen before.
            </p>
            <p>
                There will also be music from Dylan Beattie, drinks and food.
            </p>
            <p>
                This is an event for over 18's as there will be alcohol present. It will be a great evening and we highly recommend you come along. 
            </p>
            <p>
                Tickets are to be released soon and ANYONE can buy a ticket. You don't have to come to DDD East Midlands Conference to attend PubConf.
            </p>
            <p>
                Find out more about PubConf <a href="https://pubconf.io/" target="_blank">here</a>.
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