import Layout from '../components/Layout'
import theme from '../theme/theme'
import Header from "../components/Header"
import Head from "next/head"
import dates from "../data/dates"
import gold from "../data/gold"
import silver from "../data/silver"
import bronze from "../data/bronze"
import ImportantDatesList from "../components/home/ImportantDatesList"
import TieredCompanies from '../components/companies/TieredCompanies'


export default () => (
    <Layout>
        <Head>
            <title>DDD East Midlands</title>
        </Head>
        <Header title={'DDD East Midlands'}/>
        
        <section>
            <p tabIndex="0">
                DDD East Midlands is an inclusive, not-for-profit technology conference that celebrates the unique tech,
                talent and companies that the East Midlands has to offer. This event is run by community members to
                promote collaboration and the amazing tech community that has already grown in the East Midlands.
            </p>
            <p tabIndex="0">
                This conference follows these DDD principles:
            </p>
            <ul>
                <li tabIndex="0">The event is hosted on a Saturday so that attendees do not have to take time from work.</li>
                <li tabIndex="0">Tickets to attend the event are free.</li>
                <li tabIndex="0">All talk submissions are anonymous.</li>
                <li tabIndex="0">There is a democratic selection process for talks involving attendees voting for what they want
                    to
                    see.
                </li>
                <li tabIndex="0">The event is arranged with the community in mind.</li>
            </ul>
            <p tabIndex="0">
                To find out more, see our About Page. If you are interested in sponsoring the event email
                <a href="mailto:sponsor@dddeastmidlands.com">sponsor@dddeastmidlands.com</a>
            </p>
        </section>

        <section>
            <h2 tabIndex="0">Important Dates</h2>
            <ImportantDatesList dates={ dates } />
        </section>

        <section>
            <h2 tabIndex="0">Gold Sponsors</h2>
            <TieredCompanies partners={gold}/>
        </section>

        <section>
            <h2 tabIndex="0">Silver Sponsors</h2>
            <TieredCompanies partners={silver}/>
        </section>

        <section>
            <h2 tabIndex="0">Bronze Sponsors</h2>
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