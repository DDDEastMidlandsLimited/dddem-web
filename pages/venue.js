import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Header from "../components/Header";
import ImportantDatesList from "../components/ImportantDatesList";
import SponsorList from "../components/SponsorsList";
import PartnerList from "../components/PartnersList";

import dates from "../data/dates.js"
import sponsors from "../data/sponsors.js"
import partners from "../data/partners.js"
import Head from "next/head";

export default (props) => (
    <Layout>
        <Head>
            <title>Venues</title>
        </Head>
        <Header title={'Venues'}/>
        <section>
            <h2>Important Dates</h2>
            <ImportantDatesList dates={ dates } />
        </section>

        <section>
            <h2>Sponsors</h2>
            <SponsorList sponsors={ sponsors } />
        </section>

        <section>
            <h2>Partners</h2>
            <PartnerList partners={ partners } />
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