import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"

export default () => (
    <Layout>
        <Head>
            <title>Contact</title>
        </Head>
        <Header title={'Contact'}/>

        <section name="Contents">
            <h1>Contents</h1>

            <p><strong><a href="#ontheday">On The Day</a></strong></p>
            <p><strong><a href="#dddem">DDD East Midlands Accounts</a></strong></p>
            <p><strong><a href="#jessicawhite">Jessica White</a></strong></p>
            <p><strong><a href="#moretonbrockley">Moreton Brockley</a></strong></p>
            
        </section>

        <section id="ontheday">
        <h1>On The Day</h1> 
            <a name="dddem"/>
            <p>
                The two best ways to get in contact with the organisers on the day are:
            </p>
            <ul>
                <li>At the information desk.</li>
                <li>Through the volunteers.</li>
            </ul>
            <p>
                We will try our upmost to always have one of us available at the information desk with the exception 
                of during the opening and closing ceremonies.
            </p>
            <p>
                If you want to get to one of us in particular on the day, the best way to reach us it through a volunteer. 
                The volunteers will have contact details for the organisers which aren't available on this page that the organisers 
                will be monitoring more closely on the day than their social media accounts.
            </p>
        </section>                       
                
        <section id="dddem">
        <h1>DDD East Midlands Accounts</h1> 
            <a name="dddem"/>
            <h2>Accounts Run By The Co-Organisers</h2>
            <ul>
                <li><strong>Hashtags:</strong>   #DDDEM   |    #DDDEM2019</li>
                <li><strong>Twitter:</strong> <a href="https://twitter.com/dddeastmidlands" target="_blank">@dddeastmidlands</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/ddd-east-midlands-limited/" target="_blank">DDD East Midlands Limited</a></li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/dddeastmidlands/?hl=en" target="_blank">@dddeastmidlands</a></li>
            </ul>
        </section>  

        <section id="jessicawhite">
        <h1>Jessica White</h1> 
            <a name="jessicawhite"/>
            <h2>Co-Founder and Co-Organiser</h2>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:jessica@dddeastmidlands.com" target="_blank">Jessica At DDD East Midalands</a></li>
                <li><strong>Twitter:</strong> <a href="https://twitter.com/JessPWhite" target="_blank">@JessPWhite</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jessica-white-67917883/" target="_blank">Jessica White</a></li>
            </ul>
        </section>

        <section id="moretonbrockley">
        <h1>Moreton Brockley</h1> 
            <a name="moretonbrockley"/>
            <h2>Co-Founder and Co-Organiser</h2>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:moreton@dddeastmidlands.com" target="_blank">Moreton At DDD East Midalands</a></li>
                <li><strong>Twitter:</strong> <a href="https://twitter.com/allmobro" target="_blank">@allmobro</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/moreton-brockley-06253538/" target="_blank">Moreton Brockley</a></li>
            </ul>
        </section>      

        <style jsx>
            {`
            section {
                max-width: ${theme.sizes.maxContentWidth};
                padding: ${theme.sizes.contentPadding};
                margin: auto;
            }
            section div{
                padding-bottom: 10px;
            }
            .green{
                color: green;
            }
             .yellow{
                color: orange;
            }
             .red{
                color: red;
            }
        `}
        </style>
    </Layout>
)