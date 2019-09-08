import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"

export default () => (
    <Layout>
        <Head>
            <title>FAQ</title>
        </Head>
        <Header title={'Frequently Asked Questions'}/>

        <section name="Contents">
            <h1>Contents of Questions</h1>
            <p><strong>Event Information</strong></p>
            <ul>
                <li><a href="#whenandwhere">When and where is the event?</a></li>
                <li><a href="#agelimit">Is there an age limit for attending DDD East Midlands</a></li>
                <li><a href="#dddmeaning">What does DDD stand for?</a></li>
                <li><a href="#dddprinciples">What are the DDD principles you are abiding to?</a></li>
                <li><a href="#refreshments">Will refreshments be provided?</a></li>
                <li><a href="#wifi">Is there WiFi access at the venue?</a></li>
                <li><a href="#hashtag">Whats the hashtag?</a></li>
                <li><a href="#coordinators">Who is coordinating the event?</a></li>
                <li><a href="#imagery">Can I say if I don't want to appear in photos or videos at the event?</a></li>
                <li><a href="#sponsors">Are you still looking for sponsors?</a></li>
            </ul>

            <p><strong>Applying To Speak</strong></p>
            <ul>
                <li><a href="#applicationdate">When can I apply to talk?</a></li>
                <li><a href="#applicationhow">How do I apply to talk?</a></li>
                <li><a href="#tande">Are travel and accomodation expenses provided for speakers?</a></li>
            </ul>
        </section>

        <section>
           <h1>Event Information</h1>  
            
           <div>
                <a name="whenandwhere"/>
                <h2>Q: When and where is the event?</h2>
                <p>
                <strong>A: </strong> The event is on the 26th October 2019 at <a href="http://www.nottinghamconferencecentre.co.uk/">The Nottingham Conference Centre</a>
            </p>
            </div>
           <div>
                <a name="agelimit"/>
                <h2>Q: Is there an age limit for attending DDD East Midlands</h2>
                <p>
                    <strong>A: </strong> For insurance reasons, only people over the age of 18 can attend DDD East Midlands. We would love to bring this age limit down in the future, but for the first event we want to keep some of the cost and organisational overhead relatively low.
                </p>
            </div>
           <div>
                <a name="dddmeaning"/>
                <h2>Q: What does DDD stand for?</h2>
                <p>
                    <strong>A: </strong> Developer! Developer! Developer! See more details on our <a href="/about/">About page</a>. 
                </p>
            </div>
            <div>
                <a name="dddprinciples"/>
                <h2>Q: What are the DDD principles you are abiding to?</h2>
                <p><strong>A: </strong></p> 
                    <ul>
                        <li>The event is hosted on a Saturday so that attendees do not have to take time from work.</li>
                        <li> Tickets to attend the event are free.</li>
                        <li>All talk submissions are anonymous.</li>
                        <li>There is a democratic selection process for talks involving attendees voting for what they want to see.
                        </li>
                        <li>The event is arranged with the community in mind.
                        </li>
                    </ul>
            </div>
            <div>
                <a name="refreshments"/>
                <h2>Q: Will refreshments be provided?</h2>
                <p>
                    <strong>A: </strong> Yes. There will be catering at the event which will include options for eating restrictions (vegetarian, ceoliac, vegan). Get in touch before the event if you have specific requirements and we will try to cater for you.
                </p>
            </div>
            <div>
                <a name="wifi"/>
                <h2>Q: Is there WiFi access at the venue?</h2>
                <p>
                    <strong>A: </strong> Yes there will be public wifi at the event.
                </p>
            </div>
            <div>
                <a name="hashtag"/>
                <h2>Q: Whats the hashtag?</h2>
                <p>
                    <strong>A: </strong> #DDDEM
                </p>
            </div>
            <div>
                <a name="coordinators"/>
                <h2>Q: Who is coordinating the event?</h2>
                <p>
                    <strong>A: </strong> Jessica White and Moreton Brockley. For more information see the bottom of the <a href="/about/">About page</a>. 
                </p>
            </div>
            <div>
                <a name="imagery"/>
                <h2>Q: Can I say if I don't want to appear in photos or videos at the event?</h2>
                <p>
                    <strong>A: </strong> Yes. Our skilled photographers will not include any person wearing a red lanyard in their imagery. We will provide coloured lanyards at the event.
                </p>
            </div>
            <div>
                <a name="sponsors"/>
                <h2>Q: Are you still looking for sponsors?</h2>
                <p>
                    <strong>A: </strong> Yes! We would love to here from interested sponsors and partners. Get in touch: <a href="mailto:sponsor@dddeastmidlands.com">sponsor@dddeastmidlands.com</a>
                </p>
            </div>
        </section>

        <section>
            <h1>Applying To Speak</h1>
            <div>
                <a name="applicationdate"/>
                <h2>Q: When can I apply to talk?</h2>
                <p>
                    <strong>A: </strong> Applications open on the 26th January 2019. Applications close 27th April.
                </p>
            </div>
            <div>
                <a name="applicationhow"/>
                <h2>Q: How do I apply to talk?</h2>
                <p>
                    <strong>A: </strong> The CFP link on this webpages navigation bar will open the link to the submission form in a new tab. To ensure all talk submissions are anonomised we are used Sessionize for talk submissions.
                </p>
            </div>
            <div>
                <a name="tande"/>
                <h2>Q: Are travel and accomodation expenses provided for speakers?</h2>
                <p>
                    <strong>A: </strong> As we want to encourage local speakers and keep our costs low, we cannot provide expenses (i.e. travel and accomodation costs) to speakers.
                </p> 
            </div>
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