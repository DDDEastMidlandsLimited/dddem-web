import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default function AccessibilityInformation() {
  return (
    <Layout>
      <Head>
        <title>Accessibility Information</title>
      </Head>
      <Header
        title={'Accessibility Information'}
        banner="/static/banners/information/accessibility.jpg"
      />

      <section name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p tabIndex="0">
          <strong>Multi-faith/Quiet Contemplation Room</strong>
        </p>
        <ul>
          <li>
            <a href="#prayerroom">
              Will be a place to pray available?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Childcare</strong>
        </p>
        <ul>
          <li>
            <a href="#childcare">Will childcare be available?</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Gendered Bathrooms</strong>
        </p>
        <ul>
          <li>
            <a href="#genderbathrooms">
              Are bathrooms gender neutral?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Wheelchair Access</strong>
        </p>
        <ul>
          <li>
            <a href="#wheelchairaccessoutside">
              What is wheelchair access like outside the venue? I.e.
              Are kerbs high?
            </a>
          </li>
          <li>
            <a href="#wheelchairaccessinside">
              What is wheelchair access like inside the venue? Is it
              easy to get in/around the building?
            </a>
          </li>
          <li>
            <a href="#wheelchairbathrooms">
              Are there accessible bathrooms for wheelchair users?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Audio/Visual</strong>
        </p>
        <ul>
          <li>
            <a href="#largeprint">
              Do you have large print versions of your materials,
              flyers, resources etc?
            </a>
          </li>
          <li>
            <a href="#audiodescribed">
              Will you have audio-described resources?
            </a>
          </li>
          <li>
            <a href="#captionedtalks">Will talks be captioned?</a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Dietary/Alchol Concerns</strong>
        </p>
        <ul>
          <li>
            <a href="#diet-reqs">
              Will dietary requirements be catered to?
            </a>
          </li>
          <li>
            <a href="#ownfood">
              Are people welcome to bring their own food?
            </a>
          </li>
          <li>
            <a href="#alcohol">
              Are people going to be using alcohol?
            </a>
          </li>
        </ul>

        <p tabIndex="0">
          <strong>Assistance Animals</strong>
        </p>
        <ul>
          <li>
            <a href="#assistanceanimals">
              Are assistance animals allowed in the venue?
            </a>
          </li>
        </ul>
      </section>

      <section id="prayerroom">
        <h1 tabIndex="0">Multi-faith/Quiet Contemplation Room</h1>

        <a name="prayerroom" />
        <h2 tabIndex="0">Will be a place to pray available?</h2>
        <p tabIndex="0">
          There will be a prayer room available on the day. It will be
          marked on the maps and all volunteers will know where it
          will be located.
        </p>
      </section>

      <section id="childcare">
        <h1 tabIndex="0">Childcare</h1>

        <a name="childcare" />
        <h2 tabIndex="0">Will childcare be available?</h2>
        <p tabIndex="0">
          Unfortunately we will not be able to provide childcare at
          this first event. The overhead and cost were too high on
          this instance, but we would love to find a way in the
          future. Accessibility is important to us and we would love
          to make it easier for parents to attend the conference.
        </p>
      </section>

      <section id="genderbathrooms">
        <h1 tabIndex="0">Gendered Bathrooms</h1>
        <a name="genderbathrooms" />
        <h2 tabIndex="0">Are bathrooms gender neutral?</h2>
        <p tabIndex="0">
          Unfortunately, this isn&apos;t the case at this years event.
          The NCC is converting some of it&apos;s toilets to be gender
          neutral but this won&apos;t be in place until after the
          event.
        </p>
      </section>

      <section id="wheelchairaccess">
        <h1 tabIndex="0">Wheelchair Access</h1>

        <a name="wheelchairaccessoutside" />
        <h2 tabIndex="0">
          What is wheelchair access like outside the venue?
        </h2>
        <p tabIndex="0">
          Both the Goldsmith Street entrance and the Burton street
          entrance are accessible and there are lifts to all levels.
          The wheelchair door on Burton Street is a push button
          entrance door.
        </p>

        <a name="wheelchairaccessinside" />
        <h2 tabIndex="0">
          What is wheelchair access like inside the venue?
        </h2>
        <p tabIndex="0">
          Wheelchair access is good. There are no steps/lips on doors
          to watch out for.
        </p>

        <a name="wheelchairbathrooms" />
        <h2 tabIndex="0">
          Are there accessible bathrooms for wheelchair users?
        </h2>
        <p tabIndex="0">There are on each level.</p>
      </section>

      <section id="audio-visual">
        <h1 tabIndex="0">Audio/Visual</h1>

        <a name="largeprint" />
        <h2 tabIndex="0">
          Do you have large print versions of your materials, flyers,
          resources etc?
        </h2>
        <p tabIndex="0">
          No. Unfortunately, with this being our first event, this is
          one level of complexity we won&apos;t be covering this year.
        </p>

        <a name="audiodescribed" />
        <h2 tabIndex="0">Will you have audio-described resources?</h2>
        <p tabIndex="0">
          No. Unfortunately, with this being our first event, this is
          one level of complexity we won&apos;t be covering this year.
        </p>

        <a name="captionedtalks" />
        <h2 tabIndex="0">Will talks be captioned?</h2>
        <p tabIndex="0">
          Currently unconfirmed. If the Inclusivity sponsorship option
          is paid for, then we will be providing captioning, but this
          is currently still available.
        </p>
      </section>

      <section id="dietary">
        <h1 tabIndex="0">Dietary/Alchol Concerns</h1>

        <a name="diet-reqs" />
        <h2 tabIndex="0">Will dietary requirements be catered to?</h2>
        <p tabIndex="0">
          If you have indicated your dietary requirements in your
          Eventbrite registration, we will do our best to cater
          towards them.
        </p>

        <a name="food" />
        <h2 tabIndex="0">
          Are people welcome to bring their own food?
        </h2>
        <p tabIndex="0">
          Of course! We completely understand that there are various
          reasons people may want to bring their own food and drink.
          We will be catering for vegetarian, vegan and ceoliac
          dietary requirements at the event as far as we can.
        </p>

        <a name="alcohol" />
        <h2 tabIndex="0">
          Are people going to be drinking/serving alcohol?
        </h2>
        <p tabIndex="0">
          We won&apos;t be providing alcohol at the event.
        </p>
      </section>

      <section id="assistanceanimals">
        <h1 tabIndex="0">Assistance Animals</h1>

        <a name="assistanceanimals" />
        <h2 tabIndex="0">
          Are assistance animals allowed in the venue?
        </h2>
        <p tabIndex="0">
          They are yes - but only official assistance dogs.
        </p>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section div {
            padding-bottom: 10px;
          }
        `}
      </style>
    </Layout>
  );
}
