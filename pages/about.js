import Layout from '../components/Layout.js'
import Header from "../components/Header";
import theme from "../theme/theme";
import FullWidthImage from "../components/FullWidthImage";
import RestrictedHeightImage from "../components/RestrictedHeightImage";
import Head from "next/head";
import CompanyList from '../components/CompanyList.js';
import communitypartners from "../data/communitypartners";

export default () => (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
        <Header title={'About'}/>
        <section>
            <h1>About DDD East Midlands</h1>
            <p>
                Nottingham is the perfect blend of the professional corporates and the innovative independents and this
                bleeds right through to the tech scene. This unique and perfect mix of the traditional and contemporary
                is reflected in DDD East Midlands. It is part of the multi-national DDD conference community, but with a
                focus on promoting the talent, companies and the amazing tech community the East Midlands has to offer.
            </p>
        </section>
        <section>
            <h2>But what is the DDD about? What is this conference?</h2>
            <p>
                DDD stands for (in this case) <b>Developer! Developer! Developer!</b>
            </p>
            <p>
               It's often asked if we are a conference centered around Domain Driven Design or some other acroymn that fits, that is not the case. We are a general technology conference. This means that we will accept talk submissions relating to technology no matter the language, the discipline or otherwise. Unfortunately us technologist (particularly the ones that program) love acroymns containing the letter D.
            </p>
            <p>
               Developer! Developer! Developer! is an umbrella, open-source conference format. By naming ourselves DDD, and associating ourselves with similar events, we abide by certain principles. Other than that, this conference is by the East Midlands community for the East Midlands community and is unique in it's own right. There is more information about Developer! Developer! Developer! further down this page for those interested.
            </p>
        </section>
        <section>
            <h2>The event follows these DDD Principles:</h2>

            <ul>
                <li>The event is hosted on a Saturday so that attendees do not have to take time from work.</li>
                <li> Tickets to attend the event are free.</li>
                <li>All talk submissions are anonymous.</li>
                <li>There is a democratic selection process for talks involving attendees voting for what they want
                    to
                    see.
                </li>
                <li>The event is arranged with the community in mind.
                </li>
            </ul>
        </section>
        <RestrictedHeightImage url={'/static/banners/ticketinfo.jpg'}/>
        <section>
            <h1>Promoting Inclusivity</h1>
            <p>
                As an embodiment of the East Midlands tech community, we want to promote inclusivity, support and
                camaraderie. Here are just a few of the ways we ai to do this:
            </p>
        </section>
        <section>
            <h2>Submission And Selection Process</h2>
            <p>
                In line with the DDD principles, the submission process is anonymous and the selection process democratic. This is a conference for the community, by the community. All talks that are submitted are anonymous. When the attendees vote on which talks they want to see, and when the organisers are sorting out the agenda, identifiable information about those who have submitted can't bee seen. This is to keep the process as fair as possible and ensure talks are picked on their advertised content, not by who is presenting.
            </p>
            <p>
                As mentioned, attendees will get to vote on the talks they wish to see. Talks will be selected by popular vote, but with some discretion by the organisors of the conference. The discretion is to ensure variety at the conference. If two or more talks are nearly exactly the same, the most popular will continue through and the next most popular, different talk will replace the one with identical content. 
            </p>
            <p>
                We also ask that all talk submissions abide to the <a href="/code-of-conduct">Code of Conduct</a>. We want all attendees to feel comfortable at the event, so ask that no submissions or talks contain content of a graphic, voilent or sexual nature or contain any language that may be considered marginalising or hateful. If you wouldn't want to say it to someone you respect, please don't include it in your submission. Organisers hold the right to remove anything that may be thought to cause distress.
            </p>
        </section>
        <section>
            <h2>Making speaking accessible</h2>
            <p>
                We would like to encourage more people to speak and to encourage a diverse range of backgrounds, experiences and tech related roles to come and share their learnings at our event. There are a number of ways in which we are trying to make speaking more accessible:
            </p>
            <ul>
                <li><b>Offering mentors for speakers that are selected and request extra help.</b></li>
                <p>
                    Speaking infront of a crowd of people isn't easy and we know it. There will be the option to highlight that you would like extra support, as a first time speaker, or even just as someone who feels that they would benefit from it.
                </p>
                <p>
                    The East Midlands is lucky to host some amazing (and incredibly generous) international and experienced speakers. Some of these fine people are donating their time to any speakers that indicate they want extra support. This support covers ways to address nerves, timing a talk, structuring the content of a talk, making sure your talk aligns to it's description and more.
                </p>
                <li><b>Arranging an optional workshop for all speakers to help them construct their talk.</b></li>
                <p>
                    All selected speakers will be invited to an optional workshop before the event. This contains advise on subjects such as talk structure, presentation styles, designing your slides. This is made possible by our very kind Workshop Sponsor. More details will be described here closer to the event.
                </p>
                <li><b>Organisers are speaking at meetups about how to submit a good abstract.</b></li>
                <p>
                   All the above is great if you get selected as a speaker, but how can we help you get there? The organisers of DDD East Midlands, <a href="https://twitter.com/allmobro" target="_blank">Moreton Brockley</a> and <a href="https://twitter.com/JessPWhite" target="_blank">Jessica White</a> are going to present a talk on how to submit a talk to the conference, but also give tips on how to create a talk description/abstract that stands out.
                </p>
                <p>
                   If you run an event in the East Midlands and would like us to come across to present this talk, get in touch. We will also make efforts to write the content of this talk in a blog to increase the ease of access to the content.
                </p>
            </ul>
        </section>
        <section>
            <h2>Inclusivity Sponsorship Option (Still Available!)</h2>
            <p>
                One of the options offered to our kind sponsors is to fund live captioning of all talks. This would
                enable a whole new audience to enjoy the event and learn from the fantastic content from the speakers.
            </p>
            <p>
                These captions are provided by  <a href="https://www.121captions.com/" target="_blank">121 Captions</a>, and the company (or companies, we are happy to split the costs across more than one collaborating businesses) who support this initiative will have their logo displayed on any screen showing these live captions.
            </p>
        </section>
        <section>
            <h2>I'm hooked! Tell me more!</h2>
            <p> 
                These are but a few of the initiatives and concerns we have covered as part of making this event as
                accessbile and enjoyable to as many people as possible. Dietary requirements will be covered, there is a
                code of conduct public on this webiste and more. We have tried to acheive what we can within budget, but for some things, budget is a restriction. 
                </p>
            <p>
                This is our very first event of this size, so if you feel we miss anything this year, get in touch so that we can improve it in the future.
            </p>
        </section>
        <section>
            <FullWidthImage url={'/static/banners/citycenter.jpg'}/>
        </section>
        <section>
            <h1>About Developer! Developer! Developer! (DDD)</h1>
            <p>
                DDD was first formed as a conference in 2005, the first event happening in Reading, UK. Since then it
                has generated many spin-off events across the world.
            </p>
            <p>
                The aims of the original DDD was to provide free technical education. During it’s more than 10-year
                history, it has nurtured talented speakers, who have gone on to become Microsoft Most Valuable
                Professionals, Microsoft FTEs and to present at National and International Conferences.
            </p>
            <p>
                Though the original DDD conference is focused on .NET, DDD East Midlands is going to be open to a range
                of talks within the field of technology. It is language and technology agnostic.
            </p>
        </section>
        <section>
            <h2>Other DDD Events:</h2>
            <p><b>UK</b></p>
            <ul>
               <li><a href="https://twitter.com/Reading" target="_blank">DDD Reading</a></li>
               <li><a href="https://twitter.com/dddnorth" target="_blank">DDD North</a></li>
                <li><a href="https://www.dddeastanglia.com/" target="_blank">DDD East Anglia</a></li>
                <li><a href="https://dddscotland.org/" target="_blank">DDD Scotland</a></li>
                <li><a href="https://twitter.com/dddbelfast" target="_blank">DDD Belfast</a></li>
                <li><a href="https://www.dddwales.com/" target="_blank">DDD Wales</a></li>
            </ul>
            <p><b>Australia</b></p>
            <ul>
                <li><a href="https://www.dddmelbourne.com/" target="_blank">DDD Melbourne</a></li>
                <li><a href="http://next.dddsydney.com.au/" target="_blank">DDD Sydney</a></li>
                <li><a href="https://www.dddbrisbane.com/" target="_blank">DDD Brisbane</a></li>
                <li><a href="https://www.dddperth.com/" target="_blank">DDD Perth</a></li>
            </ul>
            <p><b>Netherlands</b></p>
            <ul>
            <li><a href="https://twitter.com/DDDNetherlands" target="_blank">DDD Netherlands</a></li>
            </ul>
        </section>
        <section>
            <h1>The Organisers</h1>
            <p>
                The very first DDD East Midlands is being organised by Moreton Brockley and Jessica White. Both have
                been active members of the East Midlands tech scene for a number of years and have benefited through
                making lifelong friends, experiencing awesome events and learning. They are eager to celebrate the East
                Midlands tech community, give back where they can and encourage more people from other places to come
                and join them here.

            </p>
        </section>
        <section>
            <FullWidthImage url={'/static/banners/dasorganizers.jpg'}/>
        </section>           
        <section>
            <h2>Jessica White</h2>
            <p>
                Fully caffeinated, Jessica is more whirling dervish than person. Having founded <a href="">Women In Tech Nottingham</a>
                back in 2015, and running it for nearly 2 years, she has previous experience with running an inclusive
                event. You will be in touch with Jessica if you are considering sponsoring the event or have any awesome
                ideas for the event or related social media.
            </p>
            <p>
                <a class="smallspace" href="https://twitter.com/JessPWhite" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/jessica-white-67917883/" target="_blank">LinkedIn</a>
            </p>
        </section>
        <section>
            <h2>Moreton Brockley</h2>
            <p>
                A Delivery Manager and developer, Moreton is the sensible head of the co-founders. He is the number
                whizz and the fashion guru. Seriously, check out his Ninja Turtle Doc Martens. You may (not) recognise Moreton from his performance at 2018's Hack24 as Mr Blobby.
            </p>
            <p>
                <a class="smallspace" href="https://twitter.com/allmobro" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/moreton-brockley-06253538/" target="_blank">LinkedIn</a>
            </p>
        </section>
        <section>
            <p>
                Give them a follow on Twitter, say hi at the local events, offer them a coffee or some chocolate if they
                look in need. They will both be running around on the day of the event making sure your experience of it is the best they can possibly make it.
            </p>
        </section>

        <section>
            <h1>Community Sponsors</h1>
            <CompanyList partners={communitypartners}/>
        </section>

        <style jsx>
            {`
            section {
                max-width: ${theme.sizes.maxContentWidth};
                padding: ${theme.sizes.contentPadding};
                margin: auto;
            }
        `}
        </style>
    </Layout>
)