import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import FullWidthImage from "../components/FullWidthImage"
import Head from "next/head"

export default () => (
    <Layout>
        <Head>
            <title>Speakers</title>
        </Head>
        <Header title={'Speakers'}/>
        <section>
            <h1>Keynote By Dylan Beattie</h1>
            <p>
                To be confirmed
            </p>
        </section>
        <section>
            <h2>Matt Brunt</h2>
            <h3>Talk: <i>Think like a hacker</i></h3>
            <p>
                Much in the same way that to secure a house it helps to know how to break in, knowing how to attack our systems will help us secure them. You have a lot of data in your organisations. Whether you think it's sensitive or not, it has value. Whether an attacker wants data for profit, a grudge, or just for fun we need to ensure that we don't just leave the door open for them to take what they want.            </p>
            <p>
                In this session we'll start to think like a hacker. The what, why, who, where and how of an attacking mindset will leave you with practical steps you can take away and use to start protecting your systems a little better.            
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                {/* <FullWidthImage url={'/static/speakers/Matt_Brunt.png'}/> */}
                <img src="/static/speakers/Matt_Brunt.png" alt="Smiley face" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p>
                        Matt Brunt is a Developer with Helical Levity, a company educating and building the next generation of Cyber Security professionals.
                    </p>
                    <p>
                        When not tinkering with code he can be found reading comics, fighting monsters in dungeons and dragons, or drinking tea and eating jaffa-cakes.
                    </p>
                </div>
                </div>
        </section> 
       
        <style jsx>
            {`
            section {
                max-width: ${theme.sizes.maxContentWidth};
                padding: ${theme.sizes.contentPadding};
                margin: auto;
            }
            section center-video{
                text-align: center;
            }
            .columnright {
                padding: 10px;
                float: right;
                width: 70%;
            }
              
            .columnleft {
                padding: 10px;
                float: left;
                width: 25%;
            }
              
            .row:after {
                content: "";
                display: table;
                clear: both;
            }

            .speakerpic{
                width:95%;
            }

            .iframe-container {
                position: relative;
                overflow: hidden;
                padding-top: 56.25%;
                margin: 10px 10px;
            }
            .iframe-container iframe {
                position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border: 0;
            }
        `}
        </style>
    </Layout>
)