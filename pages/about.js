import Layout from '../components/Layout.js'
import Header from "../components/Header";
import theme from "../theme/theme";
import FullWidthImage from "../components/FullWidthImage";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>About DDD East Midlands</title>
        </Head>
        <Header title={'About DDD East Midlands'}/>
        <section>
            <p>
                Nottingham is the perfect blend of the professional corporates and the innovative independents and this
                bleeds right through to the tech scene. This unique and perfect mix of the traditional and contemporary
                is reflected in DDD East Midlands. It is part of the multi-national DDD conference community, but with a
                focus on promoting the talent, companies and the amazing tech community the East Midlands has to offer.
            </p>
            <p>The event follows these DDD Principles:</p>
            <p>
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
            </p>
        </section>
        <section>
            <h2>Inclusivity</h2>
            <p>
                As an embodiment of the East Midlands tech community, we want to promote inclusivity, support and
                camaraderie.
            </p>
        </section>
        <section>
            <h2>Submission Process</h2>
            <p>
                The talks will be submitted anonymously and be voted on by attendees.
            </p>
        </section>
        <section>
            <h2>Making speaking accessible</h2>
            <p>
                <ul>
                    <li>Offering mentors for speakers that are selected and request extra help.</li>
                    <li>Organisers are speaking at meetups about how to submit a good abstract.</li>
                    <li>Arranging an optional workshop for all speakers to help them construct their talk.</li>
                </ul>
            </p>
        </section>
        <section>
            <h2>Inclusivity Sponsorship Option</h2>
            <p>
                One of the options offered to our kind sponsors is to fund live captioning of all talks. This would
                enable a whole new audience to enjoy the event and learn from the fantastic content from the speakers.
            </p>
            <p> These are but a few of the initiatives and concerns we have covered as part of making this event as
                accessbile and enjoyable to as many people as possible. Dietary requirements will be covered, there is a
                code of conduct public on this webiste and more.

            </p>
        </section>
        <FullWidthImage url={'/static/banners/citycenter.jpg'}/>
        <section>
            <h2>About DDD</h2>
            <p>
                DDD was first formed as a conference in 2005, the first event happening in Reading, UK. Since then it
                has generated many spin-off events across the world.
            </p>
            <p>
                The aims of the original DDD was to provide free technical education. During it’s more than 10-year
                history, it has nurtured talented speakers, who have gone on to become Microsoft Most Valuable
                Professionals, Microsoft FTEs and to
                present at National and International Conferences.
            </p>
            <p>
                Though the original DDD conference is focused on .NET, DDD East Midlands is going to be open to a range
                of talks within the field of technology. It is language and technology agnostic.

            </p>
        </section>
        <section>
            <h2>The Organisers</h2>
            <p>
                The very first DDD East Midlands is being organised by Moreton Brockley and Jessica White. Both have
                been active members of the East Midlands tech scene for a number of years and have benefited through
                making lifelong friends, experiencing awesome events and learning. They are eager to celebrate the East
                Midlands tech community, give back where they can and encourage more people from other places to come
                and join them here.

            </p>
        </section>
        <FullWidthImage url={'/static/banners/dasorganizers.jpg'}/>
        <section>
            <h2>Moreton Brockley</h2>
            <p>
                A Delivery Manager and Developer, Moreton is the sensible head of the co-founders. He is the number
                whizz and the fashion guru. Seriously, check out his Ninja Turtle Doc Martens. You may (not) recognise
                Moreton from his performance at 2018's Hack24 as Mr Blobby.
            </p>
        </section>
        <section>
            <h2>Jessica White</h2>
            <p>
                Fully caffeinated, Jessica is more whirling dervish than person. Having founded Women In Tech Nottingham
                back in 2015, and running it for nearly 2 years, she has previous experience with running an inclusive
                event. You will be in touch with Jessica if you are considering sponsoring the event or have any awesome
                ideas for the event or related social media.
            </p>
            <p>
                Give them a follow on Twitter, say hi at the local events, offer them a coffee or some chocolate if they
                look in need.
            </p>
            <p>
                They will both be running around on the day of the event making sure your experience of it is the best
                they can possibly make it.
            </p>
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