import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <img src="/static/speakers/Matt_Brunt.png" alt="Smiley face" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Wizard</i></p>
                    <p>
                        Matt Brunt is a Developer with Helical Levity, a company educating and building the next generation of Cyber Security professionals.
                    </p>
                    <p>
                        When not tinkering with code he can be found reading comics, fighting monsters in dungeons and dragons, or drinking tea and eating jaffa-cakes.
                    </p>
                </div>
                </div>
        </section> 
        
        <section>
            <h2>Jessica Salisbury</h2>
            <h3>Talk: <i>The Power of the Feedback Loop</i></h3>
            <p>
                From how the body knows when to stop growing to saving lives from speeding cars, the feedback loop is a mechanism that secretly underlies every corner of our existence. The concept spans schools of thought in psychology, economics, biology and neuroscience and is now emerging in the intersection of technology and behavioural science. 
            </p>
            <p>
                As technologists we are always looking to build products that are engaging and effective, and as people we strive to reach our full personal and working potential. Could the feedback loop be the piece we're all missing?
            </p>
            <p>
                In this talk we'll dive into the structure of the feedback loop, some impressive examples of how powerful they can be and we'll explore how you can harness their power in your work and personal life.  
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Jessica_Salisbury.png" alt="Jessica Salisbury" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Behavioural Psychologist and Money Coaching Project Manager at Tully.</i></p>
                    <p>
                        Jess is a Behavioural Psychologist and the Project Manager of Money Coaching at Tully, a business created to help people who are worried about money. Jess leads on Tully’s Money Coaching product which uses Open Banking data to engage consumers in positive financial decision making to improve their financial wellbeing. From helping those in debt manage their money to providing early intervention for those displaying detrimental patterns of behaviour, Jess is using her academic background in psychology to create highly personalised, data led Money Coaching that drives long term, financial behavioural change for Tully customers.                    
                    </p>
                </div>
                </div>
        </section> 
        
        <section>
            <h2>Anthony Dang</h2>
            <h3>Talk: <i>Cache me outside - Caching Methodologies and Architectures</i></h3>
            <p>
                Caching can be your best-friend or your worst best-friend. A poor cache implementation can mean the difference between experiencing blazing fast performance or unexplained random slowness, or both! It can even result in random stale (out of date) content which you can’t explain.
            </p>
            <p>
                In this presentation we will demo and compare different caching methodologies, and their perceived real world uses. We will discuss Donut cache, Memory cache, Redis, Varnish, CDNs, and many more. We will dive into demos of real world implementations which can cause unpredictable problems. Some of these are horrible, and some are face-palm.
            </p>
            <p>
                At the end of this presentation you will be aware of the different trade-offs with each caching methodology, and which might best for your situation.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Anthony_Dang.png" alt="Smiley face" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Head of Development</i></p>
                    <p>
                        Anthony has worked in web development since 2007. He is active in the open source community, in particular the Umbraco CMS, writes tech articles (including for Microsoft Tech Blog), and is a regular organiser & presenter at conferences and tech meetups. He lives and breathes automation and development processes, and is a vocal proponent of Behaviour/Test Driven Development. 
                    </p>
                    <p>
                        As Head of Development at The Cogworks he was key in creating a high performing production team spanning London, Manchester, Barcelona, Warsaw, and Krakow. He is an Agile/Scum/Kanban enthusiast, and is always looking for ways to make development more efficient and enjoyable. Originally from Sydney, Australia, he is now based in London. 
                    </p>
                </div>
                </div>
        </section> 
        
        <section>
            <h2>Cara Holland</h2>
            <h3>Talk: <i>Draw UX (or how to get your visual thinking groove on)</i></h3>
            <p>
                Working visually is a super power. It increases your ability to understand and share complex information, think creatively and collaborate effectively. But for lots of adults drawing at work is a huge step outside of their comfort zone.
            </p>
            <p>
                I'm a business visualiser who draws, writes and trains. 
            </p>
            <p>
                In this session I will show you how to use visual skills throughout the UX journey, transforming your engagement and problem solving skills, and how you already have the functional drawing ability you need, even if you can barely draw a stick. Honest.
            </p>
            <p>
                By the end of this session you will understand WHY working visually is so effective, but more importantly you'll get to see HOW it works by trying out visual exericises yourself.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Cara_Holland.png" alt="Cara Holland" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Founder and head doodler at Graphic Change</i></p>
                    <p>
                        Founder, trainer and author of best selling book Draw a Better Business, Cara Holland has been working visually with companies as varied as Google and the NHS for the last 13 years. 
                        She also co-runs the Graphic Change Academy which has trained people in over 69 countries how to start drawing at work.                    
                    </p>
                    <ul>
                        <li>
                            <Link href="https://twitter.com/GraphicChange">
                                <a target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
        </section> 
        
        <section>
            <h2>Mark Towndrow</h2>
            <h3>Talk: <i>How to be a better developer - without learning another JavaScript framework</i></h3>
            <p>
                It’s increasingly important to make time for self-improvement and career development, but it’s hard to know where to focus your efforts. As developers we’re often attracted to learning new technologies and languages, however I’d like to make the case for a number of non-technical areas of development that I believe can give you a huge advantage in your career.
            </p>
            <p>
                In this talk, I’ll share a number of skills that I’ve found compliment a technical toolbelt, such as generating and maintaining momentum within your team and looking beyond requirements to identify opportunities for your business. I’ll also share some tips to help fast track your progress, exploring why it’s important to seek out and identify the gaps in your skill set, and how to seize opportunities to strengthen these areas.
            </p>
            <p>
                It’s my hope that this talk will give you a different perspective of what makes a great developer, as well as the tools and motivation to broaden your expertise so that you can make a bigger impact in your organisation.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Mark_Towndrow.png" alt="Mark Towndrow" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Head of Engineering at OpenWrks</i></p>
                    <p>
                        Gained a Software Engineering degree at Nottingham Trent University, worked at TDX Group then Equifax before moving to Bizfitech / OpenWrks. Enjoy coding primarily in .NET (Core) and React but love playing with new technologies                   
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
                border-radius: 50%;
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
            ul {
                display: flex;
                margin: 0;
                padding: 10px;
                flex-flow: row;
                justify-content: space-evenly;
                flex-wrap: nowrap;
            }
            li {
                margin: 0;
                padding: 10px;
                list-style: none;
                list-style-type: none;
                text-align: left;
                flex-basis: 0;
                flex-grow: 1;
            }
        `}
        </style>
    </Layout>
)