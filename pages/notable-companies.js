import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Header from "../components/Header";
import Head from "next/head";
import NotableCompanies from '../components/NotableCompanies';

export default () => (
    <Layout>
        <Head>
            <title>Notable Companies</title>
        </Head>
        <Header title={'Notable Companies'}/>

        <section>
            <NotableCompanies/>
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