import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"

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

            <p><strong>Staying in Nottingham</strong></p>
            <ul>
                <li><a href="#important-contacts">Important Contacts</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#resturants">Resturants</a></li>
            </ul>

            <p><strong>Before The Conference</strong></p>
            <ul>
                <li><a href="#we-need-to-know">What we need to know</a></li>
            </ul>

            <p><strong>The Day Of The Conference</strong></p>
            <ul>
                <li><a href="#conference-arrival">Letting us know you have arrived</a></li>
                <li><a href="#room-arrival">Arriving at the room</a></li>
            </ul>

            <p><strong>After The Conference</strong></p>
            <ul>
                <li><a href="#sharing-slides">Sharing Slides</a></li>
                <li><a href="#talk-videos">Videoed Talks</a></li>
            </ul>

            <p><strong>Suggestest Checklist</strong></p>
            <ul>
            </ul>
        </section>
        
        <section id="general">
        <h1>General</h1> 
            <h2>Rooms</h2>
            <a name="rooms"/>
            <h4>Lecture Theatre 2</h4>
            <p>

            </p>
            <h4>Lecture Theatre 4</h4>
            <p>

            </p>
            <h4>Lecture Theatre 5</h4>
            <p>

            </p>
            <h2>Tech</h2>
            <a name="tech"/>

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

            </p>
        </section>

        <section>
        <h1>Staying in Nottingham</h1> 

            <h2>Important Contacts</h2>
            <a name="important-contacts"/>
            <h4></h4>

            <h2>Hotels</h2>
            <a name="hotels"/>
            <h4></h4>

            <h2>Resturants</h2>
            <a name="resturants"/>
            <h4></h4>
            <h4></h4>
            <h4></h4>

        </section>

        <section>
        <h1>Before The Conference</h1> 
            <h2>What we need to know</h2>
            <a name="we-need-to-know"/>
            <h4>Is there sound/video in your presentation?</h4>
        </section>

        <section>
        <h1>The Day Of The Conference</h1> 
            <h2>Letting us know you have arrived</h2>
            <a name="conference-arrival"/>

            <h2>Arriving at the room</h2>
            <a name="room-arrival"/>

        </section>

        <section>
        <h1>After The Conference</h1> 
            <h2>Sharing Slides</h2>
            <a name="sharing-slides"/>

            <h2>Videoed Talks</h2>
            <a name="talk-videos"/>

        </section>

        <section>
        <h1>Suggested Checklist</h1> 
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