import Layout from '../components/Layout.js'
import Header from "../components/Header";
import theme from "../theme/theme";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>Accessibility Information</title>
        </Head>
        <Header title={'Accessibility Information'}/>

        <section name="Contents">
            <h1>Contents</h1>
            <ul>
                <li><a href="#prayerroom">Will there be a prayer room available?</a></li>
                <li><a href="#childcare">Will childcare be available?</a></li>
                <li><a href="#genderbathrooms">Are bathrooms gender neutral?</a></li>
                <li><a href="#wheelchairaccessoutside">What is wheelchair access like outside the venue? I.e. Are kerbs high?</a></li>
                <li><a href="#wheelchairaccessinside">What is wheelchair access like inside the venue? Is it easy to get in/around the building?</a></li>
                <li><a href="#wheelchairbathrooms">Are there accessible bathrooms for wheelchair users?</a></li>
                <li><a href="#largeprint">Do you have large print versions of your materials, flyers, resources etc?</a></li>
                <li><a href="#audiodescribed">Will you have audio-described resources?</a></li>
                <li><a href="#captionedtalks">Will talks be captioned?</a></li>
                <li><a href="#ownfood">Are people welcome to bring their own food?</a></li>
                <li><a href="#alcohol">Are people going to be using alcohol?</a></li>
                <li><a href="#assistanceanimals">Are assistance animals allowed in the venue?</a></li>
            </ul>
        </section>
     
        <section>
            <h1>Accessibility Information</h1>

            <li><a href="#prayerroom">Will there be a prayer room available?</a></li>
            
            <div>
                <a name="prayerroom"/>
                <h2>Q: Will there be a prayer room available?</h2>
                <p>
                    <strong>A: </strong> There will be a prayer room available on the day. It will be marked on the maps and all volunteers will know where it will be located.
                </p>           
            </div>   
            <div>
                <a name="childcare"/>
                <h2>Q: Will childcare be available?</h2>
                <p>
                    <strong>A: </strong> Unfortunately we will not be able to provide childcare at this first event. The overhead and cost were too high on this instance, but we would love to find a way in the future. Accessibility is important to us and we would love to make it easier for parents to attend the conference.
                </p>
            </div>         
            <div>
                <a name="genderbathrooms"/>
                <h2>Q: Are bathrooms gender neutral?</h2>
                <p>
                    <strong>A: </strong> Unfortunately, this isn't the case at this years event. The NCC is converting some of it's toilets to be gender neutral but this won't be in place until after the event.
                </p>           
            </div>
            <div>
                <a name="wheelchairaccessoutside"/>
                <h2>Q: What is wheelchair access like outside the venue?</h2>
                <p>
                    <strong>A: </strong> Both the Goldsmith Street entrance and the Burton street entrance are accessible and there are lifts to all levels. The wheelchair door on Burton Street is a push button entrance door            
                </p>           
            </div>
            <div>
                <a name="wheelchairaccessinside"/>
                <h2>Q:  What is wheelchair access like inside the venue? Is it easy to get in/around the building?</h2>
                <p>
                    <strong>A: </strong> Wheelchair access is good. There are no steps/lips on doors to watch out for.
                </p>           
            </div>
            <div>
                <a name="wheelchairbathrooms"/>
                <h2>Q:  Are there accessible bathrooms for wheelchair users?</h2>
                <p>
                    <strong>A: </strong> There are on each level.
                </p>           
            </div>
            <div>
                <a name="largeprint"/>
                <h2>Q:  Do you have large print versions of your materials, flyers, resources etc?</h2>
                <p>
                    <strong>A: </strong> No. Unfortunately, with this being our first event, this is one level of complexity we won't be covering this year.
                </p>           
            </div>
            <div>
                <a name="audiodescribed"/>
                <h2>Q: Will you have audio-described resources?</h2>
                <p>
                    <strong>A: </strong> No. Unfortunately, with this being our first event, this is one level of complexity we won't be covering this year.
                </p>           
            </div>
            <div>
                <a name="captionedtalks"/>
                <h2>Q: Will talks be captioned?</h2>
                <p>
                    <strong>A: </strong> Currently unconfirmed. If the Inclusivity sponsorship option is paid for, then we will be providing captioning, but this is currently still available.
                </p>           
            </div>
            <div>
                <a name="ownfood"/>
                <h2>Q: Are people welcome to bring their own food?</h2>
                <p>
                    <strong>A: </strong> Of course! We completely understand that there are various reasons people may want to bring their own food and drink. We will be catering for vegetarian, vegan and ceoliac dietary requirements at the event as far as we can. 
                </p>           
            </div>
            <div>
                <a name="alcohol"/>
                <h2>Q: Are people going to be using alcohol?</h2>
                <p>
                    <strong>A: </strong> We won't be providing alcohol at the event.
                </p>           
            </div>
            <div>
                <a name="assistanceanimals"/>
                <h2>Q: Are assistance animals allowed in the venue?</h2>
                <p>
                    <strong>A: </strong> They are yes - but only official assistance dogs.
                </p>           
            </div>
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