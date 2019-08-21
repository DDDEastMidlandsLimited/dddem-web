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
                <li><a href="#vehicle">Vehicle Details</a></li>
                <li><a href="#setup-time">Time To Setup</a></li>
                <li><a href="#before-parking">Parking</a></li>
                <li><a href="#venue-access">Venue Access</a></li>
                <li><a href="#lift-restrictions">Lift Restrictions</a></li>
            </ul>

            <p><strong>General Conference Day Information</strong></p>
            <ul>
                <li><a href="#parking">Parking</a></li>
                <li><a href="#power">Power</a></li>
                <li><a href="#exhibition-staff">Exhibition Staff</a></li>
                <li><a href="#health-and-safety">Health and Safety</a></li>
                <li><a href="#wifi">Wi-Fi</a></li>
                <li><a href="#catering">Catering</a></li>
                <li><a href="#timetable">Timetable</a></li>
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