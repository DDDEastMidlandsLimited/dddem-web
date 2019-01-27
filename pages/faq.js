import Layout from '../components/Layout.js'
import Header from "../components/Header";
import theme from "../theme/theme";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>FAQ</title>
        </Head>
        <Header title={'Frequently Asked Questions'}/>

        <section name="Thing">
            <h1>Contents of Questions</h1>
            <p><strong>Event Information</strong></p>
            <ul>
                <li><a href="#whenandwhere">When and where is the event?</a></li>
                <li><a href="#agelimit">Is there an age limit for attending DDD East Midlands</a></li>
                <li><a href="#dddmeaning">What does DDD stand for?</a></li>
                <li><a href="#dddprinciples">What are the DDD principles you are abiding to?</a></li>
                <li><a href="#refreshments">Will refreshments be provided?</a></li>
                <li><a href="#wifi">Is there WiFi access at the venue?</a></li>
                <li><a href="#childcare">Will childcare be available?</a></li>
                <li><a href="#hashtag">Whats the hashtag?</a></li>
                <li><a href="#coordinators">Who is coordinating the event?</a></li>
                <li><a href="#imagery">Can I say if I don't want to appear in photos or videos at the event?</a></li>
                <li><a href="#sponsors">Are you still looking for sponsors?</a></li>
            </ul>
            <p><strong>Accessibility Information</strong></p>
            <ul>
                <li><a href="#genderbathrooms">Are bathrooms gender neutral?</a></li>
                <li><a href="#wheelchairaccessoutside">What is wheelchair access like outside the venue? I.e. Are kerbs high?</a></li>
                <li><a href="#wheelchairaccessinside">What is wheelchair access like inside the venue? Is it easy to get in/around the building?</a></li>
                <li><a href="#wheelchairbathrooms">Are there accessible bathrooms for wheelchair users?</a></li>
                <li><a href="#largeprint">Do you have large print versions of your materials, flyers, resources etc?</a></li>
                <li><a href="#audiodescribed">Will you have audio-described resources?</a></li>
                <li><a href="#captionedtalks">Will talks be captioned?</a></li>
                <li><a href="#ownfood">Are people welcome to bring their own food?</a></li>
                <li><a href="#alcohol">Are people going to be using alcohol?</a></li>
                <li><a href="#assistanceanimals">Are assistance animals allowed in the venue?</a></li>
            </ul>
            <p><strong>Ticket Information</strong></p>
            <ul>
                <li><a href="#ticketcost">How much will tickets cost?</a></li>
                <li><a href="#ticketrelease">When will tickets be released?</a></li>
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
                <a name="childcare"/>
                <h2>Q: Will childcare be available?</h2>
                <p>
                    <strong>A: </strong> Unfortunately we will not be able to provide childcare at this first event. The overhead and cost were too high on this instance, but we would love to find a way in the future. Accessibility is important to us and we would love to make it easier for parents to attend the conference.
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
            <h1>Accessibility Information</h1>
            <div>
                <a name="genderbathrooms"/>
                <h2>Q: Are bathrooms gender neutral?</h2>
                <p>
                    <strong>A: </strong> Unfortunately, this isn't the case at this years event. The NCC is converting some of it's toilets to be gender neutral but this won't be in place until after the event.
                </p>           
            </div>
            <div>
                <a name="wheelchairaccessoutside"/>
                <h2>Q: What is wheelchair access like outside the venue?</h2>
                <p>
                    <strong>A: </strong> Both the Goldsmith Street entrance and the Burton street entrance are accessible and there are lifts to all levels. The wheelchair door on Burton Street is a push button entrance door            
                </p>           
            </div>
            <div>
                <a name="wheelchairaccessinside"/>
                <h2>Q:  What is wheelchair access like inside the venue? Is it easy to get in/around the building?</h2>
                <p>
                    <strong>A: </strong> Wheelchair access is good. There are no steps/lips on doors to watch out for.
                </p>           
            </div>
            <div>
                <a name="wheelchairbathrooms"/>
                <h2>Q:  Are there accessible bathrooms for wheelchair users?</h2>
                <p>
                    <strong>A: </strong> There are on each level.
                </p>           
            </div>
            <div>
                <a name="largeprint"/>
                <h2>Q:  Do you have large print versions of your materials, flyers, resources etc?</h2>
                <p>
                    <strong>A: </strong> No. Unfortunately, with this being our first event, this is one level of complexity we won't be covering this year.
                </p>           
            </div>
            <div>
                <a name="audiodescribed"/>
                <h2>Q: Will you have audio-described resources?</h2>
                <p>
                    <strong>A: </strong> No. Unfortunately, with this being our first event, this is one level of complexity we won't be covering this year.
                </p>           
            </div>
            <div>
                <a name="captionedtalks"/>
                <h2>Q: Will talks be captioned?</h2>
                <p>
                    <strong>A: </strong> Currently unconfirmed. If the Inclusivity sponsorship option is paid for, then we will be providing captioning, but this is currently still available.
                </p>           
            </div>
            <div>
                <a name="ownfood"/>
                <h2>Q: Are people welcome to bring their own food?</h2>
                <p>
                    <strong>A: </strong> Of course! We completely understand that there are various reasons people may want to bring their own food and drink. We will be catering for vegetarian, vegan and ceoliac dietary requirements at the event as far as we can. 
                </p>           
            </div>
            <div>
                <a name="alcohol"/>
                <h2>Q: Are people going to be using alcohol?</h2>
                <p>
                    <strong>A: </strong> We won't be providing alcohol at the event.
                </p>           
            </div>
            <div>
                <a name="assistanceanimals"/>
                <h2>Q: Are assistance animals allowed in the venue?</h2>
                <p>
                    <strong>A: </strong> They are yes - but only official assistance dogs.
                </p>           
            </div>
        </section>

        <section>
            <h1>Ticket Information</h1>
            <div>
                <a name="ticketcost"/>
                <h2>Q: How much will tickets cost?</h2>
                <p>
                    <strong>A: </strong> Tickets for the event will be free but limited in availability. We wanted to ensure that price wouldn't be a barrier for those wanting to attend.
                </p>
            </div>
            <div>
                <a name="ticketrelease"/>
                <h2>Q: When will tickets be released?</h2>
                <p>
                    <strong>A: </strong> We hope to release tickets on Eventbrite on the 23rd March 2019.
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