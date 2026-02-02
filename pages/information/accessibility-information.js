import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';

export default function AccessibilityInformation() {
  return (
    <Layout>
      <Head>
        <title>Accessibility Information</title>
      </Head>
      <Header
        title={'Accessibility Information'}
        banner="/static/banners/accessibility.jpg"
      />

      <section className="content-section" name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p tabIndex="0">
          <strong>Multi-faith/Quiet Contemplation Room</strong>
        </p>
        <ul>
          <li>
            <a href="#prayerroom">
              Was there a place to pray available?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Childcare</strong>
        </p>
        <ul>
          <li>
            <a href="#childcare">Was childcare available?</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Gendered Bathrooms</strong>
        </p>
        <ul>
          <li>
            <a href="#genderbathrooms">
              Were bathrooms gender neutral?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Wheelchair Access</strong>
        </p>
        <ul>
          <li>
            <a href="#wheelchairaccessoutside">
              What was wheelchair access like outside the venue?
            </a>
          </li>
          <li>
            <a href="#wheelchairaccessinside">
              What was wheelchair access like inside the venue? Was it
              easy to get in/around the building?
            </a>
          </li>
          <li>
            <a href="#wheelchairbathrooms">
              Were there accessible bathrooms for wheelchair users?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Audio/Visual</strong>
        </p>
        <ul>
          <li>
            <a href="#largeprint">
              Did you have large print versions of your materials,
              flyers, resources etc?
            </a>
          </li>
          <li>
            <a href="#audiodescribed">
              Did you have audio-described resources?
            </a>
          </li>
          <li>
            <a href="#captionedtalks">Were talks captioned?</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Dietary/Alcohol Concerns</strong>
        </p>
        <ul>
          <li>
            <a href="#diet-reqs">
              Were dietary requirements catered to?
            </a>
          </li>
          <li>
            <a href="#ownfood">
              Were people welcome to bring their own food?
            </a>
          </li>
          <li>
            <a href="#alcohol">
              Were people going to be using alcohol?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Assistance Animals</strong>
        </p>
        <ul>
          <li>
            <a href="#assistanceanimals">
              Were assistance animals allowed in the venue?
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section" id="prayerroom">
        <h1 tabIndex="0">Multi-faith/Quiet Contemplation Room</h1>

        <a name="prayerroom" />
        <h2 tabIndex="0">Was there a place to pray available?</h2>
        <p tabIndex="0">
          There was a prayer room available on the day. It was marked
          on the maps and all volunteers knew where it was located.
        </p>
      </section>

      <section className="content-section" id="childcare">
        <h1 tabIndex="0">Childcare</h1>

        <a name="childcare" />
        <h2 className="left" tabIndex="0">
          Was childcare available?
        </h2>
        <p tabIndex="0">
          Unfortunately we were not be able to provide childcare. The
          overhead and cost were too high.
        </p>
      </section>

      <section className="content-section" id="genderbathrooms">
        <h1 tabIndex="0">Gendered Bathrooms</h1>
        <a name="genderbathrooms" />
        <h2 className="left" tabIndex="0">
          Were bathrooms gender neutral?
        </h2>
        <p tabIndex="0">
          Some bathrooms were gender neutral, some were gendered.
        </p>
        <p tabIndex="0">
          We asked that all attendees were respectful to other peoples
          gender identification and needs.
        </p>
      </section>

      <section className="content-section" id="wheelchairaccess">
        <h1 tabIndex="0">Wheelchair Access</h1>

        <a name="wheelchairaccessoutside" />
        <h2 className="left" tabIndex="0">
          What was wheelchair access like outside the venue?
        </h2>
        <p tabIndex="0">
          Both the Goldsmith Street entrance and the Burton street
          entrance were accessible and there were lifts to all levels.
          The wheelchair door on Burton Street had a push button
          entrance door.
        </p>

        <a name="wheelchairaccessinside" />
        <h2 className="left" tabIndex="0">
          What was wheelchair access like inside the venue?
        </h2>
        <p tabIndex="0">
          Wheelchair access was good. There were no steps/lips on
          doors to watch out for.
        </p>

        <a name="wheelchairbathrooms" />
        <h2 className="left" tabIndex="0">
          Were there accessible bathrooms for wheelchair users?
        </h2>
        <p tabIndex="0">There were on each level.</p>
      </section>

      <section className="content-section" id="audio-visual">
        <h1 tabIndex="0">Audio/Visual</h1>

        <a name="largeprint" />
        <h2 className="left" tabIndex="0">
          Did you have large print versions of your materials, flyers,
          resources etc?
        </h2>
        <p tabIndex="0">
          No. Unfortunately, this was one level of complexity we
          couldn't cover.
        </p>

        <a name="audiodescribed" />
        <h2 className="left" tabIndex="0">
          Were there audio-described resources?
        </h2>
        <p tabIndex="0">
          We asked participants if support was needed, and arranged
          support if it was needed. There were no attendees that
          required sign langugage interpreters or live audio
          description on the day.
        </p>

        <a name="captionedtalks" />
        <h2 className="left" tabIndex="0">
          Were talks captioned?
        </h2>
        <p tabIndex="0">
          Not during the event, but captions are available on the
          videos.
        </p>
      </section>

      <section className="content-section" id="dietary">
        <h1 tabIndex="0">Dietary/Alcohol Concerns</h1>

        <a name="diet-reqs" />
        <h2 className="left" tabIndex="0">
          Were dietary requirements catered to?
        </h2>
        <p tabIndex="0">
          Yes. We asked attendees to specify dietary requirements when
          they registered, and catered accordingly.
        </p>

        <a name="food" />
        <h2 className="left" tabIndex="0">
          Were people welcome to bring their own food?
        </h2>
        <p tabIndex="0">
          Of course! We completely understood that there are various
          reasons people may want to bring their own food and drink.
          We catered for vegetarian, vegan and celiac dietary
          requirements at the event as far as we could.
        </p>

        <a name="alcohol" />
        <h2 className="left" tabIndex="0">
          Were people going to be drinking/serving alcohol?
        </h2>
        <p tabIndex="0">No. It was an alcohol-free event.</p>
      </section>

      <section className="content-section" id="assistanceanimals">
        <h1 tabIndex="0">Assistance Animals</h1>

        <a name="assistanceanimals" />
        <h2 className="left" tabIndex="0">
          Were assistance animals allowed in the venue?
        </h2>
        <p tabIndex="0">Only official assistance dogs.</p>
      </section>
    </Layout>
  );
}
