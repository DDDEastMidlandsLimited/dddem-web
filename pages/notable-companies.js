import theme from '../theme/theme.js'
import Layout from '../components/Layout.js'
import Head from "next/head";
import Header from "../components/Header";
import PartnersList from "../components/PartnersList";
import gold from "../data/gold.js"
import partners from "../data/partners.js"

export default () => (
    <Layout>
        <Head>
            <title>Notable Companies</title>
        </Head>
        <Header title={'Notable Companies'}/>


        <section>
            <PartnersList partners={partners}/>
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