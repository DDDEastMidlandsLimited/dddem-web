import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Header from "../components/Header";
import Head from "next/head";
import dates from "../data/dates";
import gold from "../data/gold";
import silver from "../data/silver";
import bronze from "../data/bronze";
import TicketButton from '../components/TicketButton';
import ImportantDatesList from "../components/ImportantDatesList";
import TieredCompanies from '../components/TieredCompanies';


export default () => (
    <Layout>
        <Head>
            <title>DDD East Midlands</title>
        </Head>
        <Header title={'DDD East Midlands'}/>


        <TicketButton/>


        <section>
            <p>
                DDD East Midlands is an inclusive, not-for-profit technology conference that celebrates the unique tech,
                talent and companies that the East Midlands has to offer. This event is run by community members to
                promote collaboration and the amazing tech community that has already grown in the East Midlands.
            </p>
            <p>
                This conference follows these DDD principles:
            </p>
            <ul>
                <li>The event is hosted on a Saturday so that attendees do not have to take time from work.</li>
                <li>Tickets to attend the event are free.</li>
                <li>All talk submissions are anonymous.</li>
                <li>There is a democratic selection process for talks involving attendees voting for what they want
                    to
                    see.
                </li>
                <li>The event is arranged with the community in mind.</li>
            </ul>
            <p>
                To find out more, see our About Page. If you are interested in sponsoring the event email
                <a href="mailto:sponsor@dddeastmidlands.com">sponsor@dddeastmidlands.com</a>
            </p>
        </section>

        <section>
            <h2>Important Dates</h2>
            <ImportantDatesList dates={ dates } />
        </section>

        <section>
            <h2>Gold Sponsors</h2>
            <TieredCompanies partners={gold}/>
        </section>

        <section>
            <h2>Silver Sponsors</h2>
            <TieredCompanies partners={silver}/>
        </section>

        <section>
            <h2>Bronze Sponsors</h2>
            <TieredCompanies partners={bronze}/>    
        </section>


        <style jsx>
            {`
            section {
                max-width: ${theme.sizes.maxContentWidth};
                padding: ${theme.sizes.contentPadding};
                margin: auto;
            }
            h2 {
                text-align: center;
            }
            h3 {
                text-align: center;
            }
        `}
        </style>
    </Layout>
)