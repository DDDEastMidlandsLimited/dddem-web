import Layout from '../../components/Layout'
import Header from "../../components/Header"
import FullWidthImage from "../../components/FullWidthImage"
import theme from "../../theme/theme"
import Head from "next/head"
import { CodeOfConduct, Introduction, Transport, Catering, SocialMedia, Wifi, PubConf } from '../../components/content'

export default () => (
    <Layout>
        <Head>
            <title>Crew Information</title>
        </Head>
        <Header title={'Crew Information'}/>

        <section name="Contents">
            <h1>Contents</h1>
            
            <p><strong><a href="#introduction">Introduction</a></strong></p>
            <p><strong><a href="#code-of-conduct">Code of Conduct</a></strong></p>
            <p><strong><a href="#when-and-where">When and Where?</a></strong></p>
            <p><strong><a href="#absence">Absence</a></strong></p>
            <p><strong>Duties</strong></p>
            <ul>
                <li><a href="#code-of-conduct-duty">Code of conduct</a></li>
                <li><a href="#setup-and-orienteering">Setup and orienteering</a></li>
                <li><a href="#registration">Registration</a></li>
                <li><a href="#standby">Standby</a></li>
                <li><a href="#info-desk">Information desk</a></li>
                <li><a href="#exhibition-floors">Exhibition Floors</a></li>
                <li><a href="#speaker-room">Speaker Room</a></li>
                <li><a href="#packing-up">Packing up</a></li>
            </ul>
            <p><strong>Transport</strong></p>
            <ul>
                <li><a href="#train">Taking the train</a></li>
                <li><a href="#driving">Driving</a></li>
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
                <li><a href="#social-media">Social Media Posts</a></li>
            </ul>

            <p><strong><a href="#pubconf">PubConf - The Unofficial After Party</a></strong></p>
            <ul>
                <li><a href="#after-party-about">About</a></li>
                <li><a href="#after-party-rules">Rules of PubConf</a></li>
                <li><a href="#pubconf-tickets">Be alerted about tickets</a></li>
            </ul>

        </section>
        
        <Introduction />

        <CodeOfConduct />

        <section id="where-and-when">
            <a name="when-and-where"/>
            <h1>When and Where?</h1>
            <h2>When</h2>
            <p>
              You will be organised into shifts that cover half the day. Morning shift comprised registration through to the start of lunch. Afternoon shift covers lunch through to helping tear down.
            </p>
            <h2>Setup and orienteering</h2>
            <p>
              25th October 2019 6:00pm - 8:00pm.
            </p>
            <h2>Morning shift</h2>
            <p>
              26th October 2019 7:30am - 1:00pm.
            </p>
            <h2>Afternoon shift</h2>
            <p>
              26th October 2019 1:00pm - 7:00pm.
            </p>
            <h2>Where</h2>
            <p>
               <a href="http://www.nottinghamconferencecentre.co.uk/">The Nottingham Conference Centre</a>
            </p>
        </section>

        <section id="absence">
            <a name="absence"/>
            <h1>Absence</h1>
            <p>
              If you can't make your shift/will be late please let the organisers know as soon as possible via the crew slack.
            </p>
        </section>

        <section id="duties">
        <h1>Duties</h1> 
            <a name="code-of-conduct-duty"/>
            <h2>Code of conduct</h2>
            <p>
                More specifically this relates to occasions where attendees or others approach you to report code of conduct issues. 
                In all circumstances:
                <ul>
                    <li>Raise these as soon as possible in the crew slack (#code-of-conduct)</li>
                    <li>Tag in the organisers</li>
                    <li>Let them handle the issue</li>
                </ul>
                We take conduct issues seriously and will treat them as our top priority.
            </p>
            <a name="setup-and-orienteering"/>
            <h2>Setup and orienteering</h2>
            <p>
                This will comprise of a few elements:
                <ul>
                    <li>Run through of the duties on the day, what to expect and escalation points</li>
                    <li>Walking tour of the venue and rooms</li>
                    <li>Setup help with lanyards, banners, attendee bag etc.</li>
                    <li>Distribution of the personalised crew hoodies</li>
                </ul>
            </p>
            <a name="registration"/>
            <h2>Registration</h2>
            <p>
                If you are in the morning shift you will be helping people register. This involves:
                <ul>
                    <li>Scanning people into eventbrite</li>
                    <li>Ensuring they have a lanyard with the correct colour</li>
                    <li>Ensuring they receive an attendee bag</li>
                    <li>Ensuring they know that the lanyard slip contains information about the day</li>
                    <li>Guiding them to fill in their details</li>
                </ul>
            </p>
            <a name="standby"/>
            <h2>Standby</h2>
            <p>
                In this role you will:
                <ul>
                    <li>Help your fellow crew if there is need for support</li>
                    <li>Help triage issues/escalations where appropriate and with support</li>
                </ul>
            </p>
            <a name="info-desk"/>
            <h2>Information desk</h2>
            <p>
                In this role you will:
                <ul>
                    <li>Administer communication via the crew slack, tagging in organisers as needed</li>
                    <li>Help any attendees who approach the desk</li>
                </ul>
            </p>
            <a name="exhibition-floors"/>
            <h2>Exhibition floors</h2>
            <p>
                In this role you will:
                <ul>
                    <li>Have some fun taking part and engaging with attendees, exhibitors, etc.</li>
                    <li>Be visible as a potential escalation point for any questions/concerns in the space</li>
                    <li>Support exhibitors and suppliers in space</li>
                    <li>Communicate the arrival of catering</li>
                </ul>
            </p>
            <a name="speaker-room"/>
            <h2>Speaker room</h2>
            <p>
                In this role you will:
                <ul>
                    <li>Ensure the arrival of speakers, escalate if someone is not there 10 minutes before their talk so we have time to contact them</li>
                    <li>Be visible as a potential escalation point for any questions/concerns in the space</li>
                    <li>Ensure speakers are as comfortable as possible, have water, have what they need to set up. Be mindful that some people may want their own space, whilst others may welcome a chat</li>
                    <li>Count votes and reset after a talk. Communicate results via slack (#evaluations). You may need to ask some people if they want to vote who are still in the room</li>
                    <li>Ensure the next speaker has room/time to set up. You might need to gently herd people if there are a lot of questions or gently remind the current speaker about the time if things are running on</li>
                </ul>
                If you have any queries about the voting system or what the votes are used for, there is a section in the <a href="https://www.dddeastmidlands.com/about/attendee-information/#voting">attendee information</a> that goes over this in a bit more detail.
            </p>
            <a name="packing-up"/>
            <h2>Packing up</h2>
            <p>
                If you are in the afternoon shift you will be helping us pack up. This involves:
                <ul>
                    <li>Collecting banners, flags, posters, etc at the information desk</li>
                    <li>Helping move these items to a nearby car</li>
                    <li>Helping suppliers and exhibitors if needed</li>
                </ul>
            </p>
        </section> 

        <Transport />
        
        <Catering />

        <Wifi />

        <SocialMedia />

        <PubConf />

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