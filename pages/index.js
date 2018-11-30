import Layout from '../components/Layout.js'
import theme from '../theme/theme.js'
import Header from "../components/Header";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>Home</title>
        </Head>
        <Header title={'Home'}/>
        <section>
            <h1>Home</h1>
        </section>
        <style jsx>
        {`
            h1, a, p {
                font-family: ${ theme.font.default };
                color: ${ theme.palette.primary };
            }
        `}
        </style>
    </Layout>
)