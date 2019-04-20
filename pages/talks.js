import Layout from '../components/Layout'
import theme from '../theme/theme'
import Header from "../components/Header"
import Head from "next/head"
import Talks from '../components/talks/Talks'

export default () => (
    <Layout>
        <Head>
            <title>Talks</title>
        </Head>
        <Header title={'Talks'}/>

        <section>
            <Talks/>
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