import Layout from '../components/Layout.js'
import Header from "../components/Header";
import theme from "../theme/theme";
import FullWidthImage from "../components/FullWidthImage";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>Code of Conduct</title>
        </Head>
        <Header title={'Code of Conduct'}/>
        <section>
            <h2>TL;DR</h2>
            <p>Treat everyone in a respectful and kind manner. Harassment and abuse are never tolerated. If you are in
                a situation that makes you uncomfortable at a DDD East Midlands event, if the event itself is creating
                an unsafe or inappropriate environment or you are made to feel uncomfortable by anyone at any of our
                events or in our online communities, please let a member of the event team know or contact
                <a href="mailto:jessica@dddeastmidlands.com">jessica@dddeastmidlands.com</a> or
                <a href="moreton@dddeastmidlands.com">moreton@dddeastmidlands.com</a>
            </p>
        </section>
        <section>
            <h2>The Full Version</h2>
            <p>
                Inclusivity is a core value of DDD East Midlands. We believe that every single person has the right to
                take part in DDD East Midlands events and online communities in a safe and welcoming environment.
            </p>
            <p>
                Harassment includes but is not limited to offensive verbal or written comments related to gender,
                age, sexual orientation, sexual behaviour, disability, physical appearance, body size, race, religion,
                sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or
                recording, sustained disruption of talks or other events, inappropriate physical contact, and
                unwelcome sexual attention.
            </p>
            <p>
                If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough
                reason to stop doing it.
            </p>
            <p>
                Participants asked to stop any harassing behaviour are expected to comply immediately. Sponsors,
                venue staff, speakers, volunteers, organisers, and anyone else at any of our events or in our online
                communities are also subject to the anti-harassment policy. In particular, attendees should not use
                sexualised images, humour, activities, or other material in presentations, during events and on
                our online community.
            </p>
            <p>
                If a participant engages in harassing behaviour, DDD East Midlands may take any action DDD East
                Midlands deems appropriate, including warning the offender or expulsion from the events and our
                online communities with no eligibility for reimbursement or refund of any type.
            </p>
            <p>
                If you are being harassed, notice that someone else is being harassed, or have any other concerns,
                please let a member of the event team know or contact
                <a href="mailto:jessica@dddeastmidlands.com">jessica@dddeastmidlands.com</a> and
                <a href="moreton@dddeastmidlands.com">moreton@dddeastmidlands.com</a>
            </p>
            <p>
                DDD East Midlands representatives will be happy to help participants contact venue security or
                local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel
                safe while involved in DDD East Midlands events and our online communities.
            </p>
            <p>
                The facilities provided at DDD East Midlands events, including networks, internet access, wifi,
                power supply, furniture, toilets and the physical environment in general, must be used with respect,
                in full accordance of the law, the terms of this document and any additional terms laid out at the
                event. When breaches of these terms take place DDD East Midlands may take any action DDD East Midlands
                deems appropriate, including warning the offender, expulsion from the events and our online communities
                with no eligibility for reimbursement or refund of any type, or even involving law enforcement.
            </p>
        </section>
        <section>
            <h2>Approaching People About Jobs</h2>
            <p>
                At our events and on our online community it is not considered acceptable to approach people unsolicited
                about jobs, it doesn't make for a welcoming environment and it isn't what our community is for.
            </p>
            <p>
                Job promotions should include the name of the role, the name of the company and information about
                where people can find out more and apply.

            </p>
        </section>
        <style jsx>
            {`

            section {
                max-width: ${ theme.sizes.maxContentWidth };
                padding: ${ theme.sizes.contentPadding };
                margin: auto;
            }
        `}
        </style>
    </Layout>
)