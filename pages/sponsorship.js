import Layout from '../components/Layout'
import Head from "next/head"
import Header from "../components/Header"
import SponsorList from "../components/sponsorship/SponsorsList"
import sponsors from "../data/sponsors"
import extraopportunities from "../data/extraopportunities"
import theme from '../theme/theme'
import SponsorButton from '../components/sponsorship/SponsorButton'

export default () => (
    <Layout>
        <Head>
            <title>Sponsorship</title>
        </Head>
        <Header title={'Sponsorship'}/>

        <SponsorButton/>

        <section>
            <h2>Sponsors</h2>
            <SponsorList sponsors={sponsors}/>
        </section>

        <section>
            <h2>Extra Opportunities</h2>
            <SponsorList sponsors={extraopportunities}/>
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