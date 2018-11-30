import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Head from "next/head";
import Header from "../components/Header";

export default () => (
    <Layout>
        <Head>
            <title>Sponsorship</title>
        </Head>
        <Header title={'Sponsorship'}/>
        <style jsx>{`
      h1, a, p {
        font-family: ${ theme.font.default };
        color: ${ theme.palette.primary };
      }
    `}</style>
    </Layout>
)