import Layout from '../../components/Layout'
import Header from "../../components/Header"
import theme from "../../theme/theme"
import Head from "next/head"

export default () => (
    <Layout>
        <Head>
            <title>Ticket Information</title>
        </Head>
        <Header title={'Ticket Information'}/>

        <section name="Contents">
            <h1>Contents</h1>

            <p><a href="#ticketcost">How much do tickets cost?</a></p>
            <p><a href="#ticketrelease">When will tickets be released?</a></p>
            <p><a href="#soldout">What if tickets are sold out?</a></p>
            <p><a href="#return">What do if I can't come to the event anymore?</a></p>

        </section>

        <section id="cost">
        <h1>How much do tickets cost?</h1>
            <a name="ticketcost"/>
            <h2>How much do tickets cost?</h2>
            <p>
               Tickets for the event will be free but limited in availability. We wanted to ensure that price wouldn't be a barrier for those wanting to attend.
            </p>
        </section>

        <section>
            <a name="ticketrelease"/>
            <h2>When will tickets be released?</h2>
            <p>
                Tickets have already been released for the 2019 event.
            </p>
        </section>

        <section>
            <a name="soldout"/>
            <h2>What if tickets are sold out?</h2>
            <p>
                You can sign up to the waitlist through <a href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058" target="_blank">registering on Eventbrite.</a>
            </p>
            <p>
                If you are signed up to the waitlist, this means when a ticket becomes available and you are next on the list, you will be emailed and given 24 hours to claim the ticket.
            </p>
        </section>

        <section>
            <a name="return"/>
            <h2>What do if I can't come to the event anymore?</h2>
            <p>
                If you can no longer come to the event you (we are sad you can't make it!) please return your ticket so that someone else can claim it.
            </p>
            <p>
                You can return your ticket through a couple of ways:    
            </p>
            <ul>
                <li>Return it through Eventbrite.</li>
                <li><a href="contact" target="_blank">Contact Jessica and she can sort it out for you.</a></li>
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
        `}
        </style>
    </Layout>
)