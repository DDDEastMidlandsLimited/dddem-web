import Layout from '../components/Layout.js'
import Header from "../components/Header";
import theme from "../theme/theme";
import FullWidthImage from "../components/FullWidthImage";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
        <Header title={'About'}/>
        <section>
            <h2>What is DDD East Midlands</h2>
            <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got
                to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot
                that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me
                when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody
                else is in there, you the first motherfucker to get shot. You understand?</p>
        </section>
        <FullWidthImage url={'https://www.placecage.com/c/2000/400'}/>
        <section>
            <h2>What is DDD East Midlands</h2>
            <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got
                to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot
                that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me
                when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody
                else is in there, you the first motherfucker to get shot. You understand?</p>
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