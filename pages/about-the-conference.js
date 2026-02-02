import Layout from '../components/Layout';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ConferenceInformation() {
  return (
    <Layout>
      <Head>
        <title>About DDD East Midlands</title>
      </Head>
      <Header
        title={'About DDDEM'}
        banner="/static/banners/about.jpg"
      />
      <section className="content-section" name="Contents">
        <h1 tabIndex="0">Contents</h1>
        <p>
          <strong>
            <a href="#about">What Was DDD East Midlands?</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#ddd">What did the DDD stand for?</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#principles">The Conference Principles</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#ddd-principles">DDD Principles</a>
          </li>
          <li>
            <a href="#our-principles">Our Principles</a>
          </li>
        </ul>
        <p>
          <strong>
            <a href="#organisers">The Organisation Committee</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#event-crew">The Event Crew</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#inclusivity">Promoting Inclusivity</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#accessibility">Accessibility Page</a>
          </li>
          <li>
            <a href="#selection">Submission And Selection Process</a>
          </li>
          <li>
            <a href="#speaking">Making speaking accessible</a>
          </li>
        </ul>
      </section>

      <section className="content-section" id="about">
        <a name="about" />
        <h1 tabIndex="0">What Was DDD East Midlands?</h1>
        <p tabIndex="0">
          A Conference That Celebrated the East Midlands
        </p>
        <p tabIndex="0">
          The East Midlands tech scene was incredibly diverse - it was
          the perfect blend of professional corporates, innovative
          independents, and well-funded start ups. This unique and
          perfect mix of traditional and contemporary was reflected in
          the DDD East Midlands Conference. We were part of the
          multi-national DDD conference community, but with a focus on
          promoting the talent, companies and the amazing tech
          community that the East Midlands had to offer.
        </p>
        <ul>
          <li tabIndex="0">
            We wanted to promote inclusivity, support and camaraderie.
          </li>
          <li tabIndex="0">
            We wanted to encourage members of the local tech community
            to do a talk
          </li>
          <li tabIndex="0">
            Hosted in a beautiful, modern building, which was one of
            the largest educational buildings in Nottingham City
            Centre.
          </li>
          <li tabIndex="0">
            Talks were submitted anonymously and voted on by
            attendees.
          </li>
          <li tabIndex="0">
            A keynote and a range of talks split into 3 tracks.
          </li>
        </ul>
      </section>

      <section className="content-section" id="ddd">
        <a name="ddd" />
        <h1 tabIndex="0">What did the DDD stand for?</h1>
        <p tabIndex="0">
          DDD stood for (in this case){' '}
          <b>Developer! Developer! Developer!</b>
        </p>
        <p tabIndex="0">
          Developer! Developer! Developer! was an umbrella,
          open-source conference format. By naming ourselves DDD, and
          associating ourselves with similar events, we abided by
          certain principles. Other than that, this conference was by
          the East Midlands community for the East Midlands community
          and was unique in its own right. There was more information
          about Developer! Developer! Developer! further down this
          page for those interested.
        </p>
        <p tabIndex="0">
          DDD was first formed as a conference in 2005, the first
          event happening in Reading, UK. Since then it has generated
          many spin-off events across the world.
        </p>
        <p tabIndex="0">
          The aims of the original DDD were to provide free technical
          education. During its more than 10-year history, it nurtured
          nurtured talented speakers, who went on to become Microsoft
          Most Valuable Professionals, Microsoft FTEs and to present
          at National and International Conferences.
        </p>
        <p tabIndex="0">
          Though the original DDD conference was focused on .NET, DDD
          East Midlands was open to a range of talks within the field
          of technology. It was language and technology agnostic.
        </p>
      </section>

      <section className="content-section" id="principles">
        <a name="principles" />
        <h1 tabIndex="0">The Conference Principles</h1>
        <a name="ddd-principles" />
        <h2 tabIndex="0">The event followed these DDD Principles:</h2>
        <ul>
          <li tabIndex="0">
            The event was hosted on a Saturday so that attendees did
            not have to take time from work.
          </li>
          <li tabIndex="0">Tickets to attend the event were free.</li>
        </ul>
        <a name="our-principles" />
        <h2 tabIndex="0">As well as our own principles:</h2>
        <ul>
          <li tabIndex="0">All talk submissions were anonymous.</li>
          <li tabIndex="0">
            There was a democratic selection process for talks
            involving attendees voting for what they wanted to see.
          </li>
          <li tabIndex="0">
            The event was arranged with the community in mind.
          </li>
        </ul>
      </section>

      <section className="content-section" id="organisers">
        <a name="organisers" />
        <h1 tabIndex="0">The Organisation Committee</h1>
        <p tabIndex="0">
          The very first DDD East Midlands was organised by Moreton
          and Jessica. Since then we grew to have an organisation
          committee. Rachel joined us to help organise the 2021 event,
          and we had a full roster of organisers for 2023 including
          Steven, James and Mia.
        </p>
      </section>

      <section className="content-section volunteer-grid">
        <article className="volunteer-grid-item">
          <Link
            href="../organisers/jessica-brentnall"
            passHref
            legacyBehavior
            title="Link to Information About Jessica"
            tabIndex="0"
          >
            <Image
              src="/static/organisers/jess.png"
              alt="Picture of Jessica Brentnall"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </Link>
        </article>
        <article className="volunteer-grid-item">
          <Link
            href="../organisers/moreton-brentnall"
            passHref
            legacyBehavior
            title="Link to Information About Moreton"
            tabIndex="0"
          >
            <Image
              src="/static/organisers/mort.png"
              alt="Picture of Moreton Brentnall"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </Link>
        </article>
        <article className="volunteer-grid-item">
          <Link
            href="../organisers/rachel-watson"
            passHref
            legacyBehavior
            title="Link to Information About Rachel"
            tabIndex="0"
          >
            <Image
              src="/static/organisers/rachel.png"
              alt="Picture of Rachel Watson"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </Link>
        </article>
        <article className="volunteer-grid-item">
          <Link
            href="../organisers/mia-gordon"
            passHref
            legacyBehavior
            title="Link to Information About Mia"
            tabIndex="0"
          >
            <Image
              src="/static/organisers/mia.png"
              alt="Picture of Mia"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </Link>
        </article>
        <article className="volunteer-grid-item">
          <Link
            href="../organisers/steven-pears"
            passHref
            legacyBehavior
            title="Link to Information About Steve"
            tabIndex="0"
          >
            <Image
              src="/static/organisers/steven.png"
              alt="Picture of Steven"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </Link>
        </article>
        <article className="volunteer-grid-item">
          <Link
            href="../organisers/james-hayward"
            passHref
            legacyBehavior
            title="Link to Information About James"
            tabIndex="0"
          >
            <Image
              src="/static/organisers/james.png"
              alt="Picture of James"
              className="picture"
              height="100"
              width="100"
              layout="responsive"
            />
          </Link>
        </article>
      </section>

      <section className="content-section">
        <p tabIndex="0">
          Follow them on social media, say hi at the local events,
          offer them a coffee or some chocolate if they looked in
          need. They ran around on the day of the event making sure
          your experience of it was the best they could possibly make
          it.
        </p>
      </section>

      <section className="content-section" id="event-crew">
        <a name="event-crew" />
        <h1 tabIndex="0">The Event Crew</h1>
        <p tabIndex="0">
          We could not run the event without the support of our
          fantastic event crew. They helped with set-up, with looking
          after attendees and speakers during the day and cleaning up
          after the event.
        </p>
        <div className="center-image">
          <Image
            className="crew-image"
            src="/static/info/crew.jpg"
            alt="Picture of the volunteers from the 2021 event"
            height={100}
            width={200}
            layout="responsive"
          />
        </div>
        <br />
      </section>

      <section className="content-section" id="inclusivity">
        <a name="inclusivity" />
        <h1 tabIndex="0">Promoting Inclusivity</h1>
        <p tabIndex="0">
          As an embodiment of the East Midlands tech community, we
          wanted to promote inclusivity, support and camaraderie. Here
          were just a few of the ways we aimed to do this:
        </p>

        <a name="accessibility" />
        <h2 tabIndex="0">Accessibility Page</h2>
        <p tabIndex="0">
          In order to remain transparent, we tried to answer as many
          accessibility related questions as we could on our{' '}
          <Link
            href="/information/accessibility-information"
            passHref
            legacyBehavior
            title="Accessibility Information"
            tabIndex="0"
          >
            Accessibility Page
          </Link>
          .
        </p>

        <a name="selection" />
        <h2 tabIndex="0">Submission And Selection Process</h2>
        <p tabIndex="0">
          The submission process was anonymous and the selection
          process democratic. This was a conference for the community,
          by the community. All talks that were submitted were
          anonymous. When the attendees voted on which talks they
          wanted to see, and when the organisers were sorting out the
          agenda, identifiable information about those who had
          submitted couldn&apos;t be seen. This was to keep the
          process as fair as possible and ensure talks were picked on
          their advertised content, not by who was presenting.
        </p>
        <p tabIndex="0">
          As mentioned, attendees got to vote on the talks they wished
          to see. Talks were selected by popular vote, but with some
          discretion by the organisers of the conference. The
          discretion was to ensure variety at the conference. If two
          or more talks were nearly exactly the same, the most popular
          continued through and the next most popular, different talk
          replaced the one with identical content.
        </p>
        <p tabIndex="0">
          We also asked that all talk submissions abide to the{' '}
          <Link
            href="https://dddeastmidlands.com/code-of-conduct/"
            passHref
            legacyBehavior
            title="Code of Conduct"
            tabIndex="0"
          >
            Code of Conduct
          </Link>
          . We wanted all attendees to feel comfortable at the event,
          so asked that no submissions or talks contain content of a
          graphic, violent or sexual nature or contain any language
          that may be considered marginalising or hateful. If you
          wouldn&apos;t want to say it to someone you respect, please
          don&apos;t include it in your submission. Organisers held
          the right to remove anything that may be thought to cause
          distress.
        </p>

        <a name="speaking" />
        <h2 tabIndex="0">Making speaking accessible</h2>
        <p tabIndex="0">
          We wanted to encourage more people to speak and to encourage
          a diverse range of backgrounds, experiences and tech related
          roles to come and share their learnings at our event. There
          were a number of ways in which we tried to make speaking
          more accessible:
        </p>
        <ul>
          <li tabIndex="0">
            <strong>
              Offering mentors for speakers that were selected and
              requested extra help.
            </strong>
          </li>
        </ul>
        <p tabIndex="0">
          Speaking in front of a crowd of people wasn&apos;t easy and
          we knew it. There was the option to highlight that you would
          like extra support, as a first-time speaker, or even just as
          someone who felt that they would benefit from it.
        </p>
        <p tabIndex="0">
          The East Midlands was lucky to host some amazing (and
          incredibly generous) international and experienced speakers.
          Some of these fine people donated their time to any speakers
          that indicated they wanted extra support. This support
          covered ways to address nerves, timing a talk, structuring
          the content of a talk, making sure your talk aligned to its
          description and more.
        </p>
        <ul>
          <li tabIndex="0">
            <strong>
              Arranging an optional workshop for all speakers to help
              them construct their talk.
            </strong>
          </li>
        </ul>
        <p tabIndex="0">
          All selected speakers were invited to an optional workshop
          before the event. This contained advice on subjects such as
          talk structure, presentation styles, designing your slides.
          This was made possible by our very kind Workshop Sponsor.
          More details were described here closer to the event.
        </p>
      </section>
    </Layout>
  );
}
