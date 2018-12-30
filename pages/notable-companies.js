import theme from '../theme/theme.js'
import Layout from '../components/Layout.js'
import Head from "next/head";
import Header from "../components/Header";
import PartnersList from "../components/PartnersList";
import LogosList from "../components/LogosList";
import logos from "../data/logos.js"
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

        <section>
            <LogosList logos={logos}/>
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