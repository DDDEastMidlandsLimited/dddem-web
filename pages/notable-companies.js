import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Head from "next/head";
import Header from "../components/Header";
import PartnerList from "../components/PartnersList";
import partners from "../data/partners";

export default () => (
    <Layout>
        <Head>
            <title>Notable Companies</title>
        </Head>
        <Header title={'Notable Companies'}/>

        <section>
            <h2>Partners</h2>
            <PartnerList partners={partners}/>
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