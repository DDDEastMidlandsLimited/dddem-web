import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Header from "../components/Header";
import Head from "next/head";
import gold from "../data/gold";
import silver from "../data/silver";
import bronze from "../data/bronze";
import partners from "../data/partners";
import standard from "../data/standard";
import CompanyMasonry from '../components/CompanyMasonry.js';

export default () => (
    <Layout>
        <Head>
            <title>Notable Companies</title>
        </Head>
        <Header title={'Notable Companies'}/>

        <CompanyMasonry companies={[...gold, ...silver, ...bronze, ...partners, ...standard]}/>

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