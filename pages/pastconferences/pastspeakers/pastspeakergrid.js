import React from 'react';
import Layout from '../../../components/Layout';
import theme from '../../../theme/theme';
import Header from '../../../components/Header';
import SpeakerGridItemComponent from '../../../components/speakers/speakergriditem';
import Head from 'next/head';

export default function Speaker2021Component() {
  return (
    <Layout>
      <Head>
        <title>Past Speakers</title>
      </Head>
      <Header
        title={'Past Speakers'}
        banner="/static/banners/notable.jpg"
      />
      <section>
        <p>
          Click on the images of our wonderful speakers to find out
          more about them and what they will be talking about.
        </p>
      </section>
      <section>
        <h2>2019</h2>
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
          pic="/static/speakers/2019/Dylan_Beattie.jpg"
          link="../2019/dylan-beattie"
          talkbrief="The Art of Code"
        />
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Matt Brunt"
          pic="/static/speakers/2019/Matt_Brunt.png"
          link="../2019/matt-brunt"
          talkbrief="Think like a hacker"
        />
        <SpeakerGridItemComponent
          speakername="Jessica Salisbury"
          pic="/static/speakers/2019/Jessica_Salisbury.png"
          link="../2019/jessica-salisbury"
          talkbrief="The Power of the Feedback Loop"
        />
        <SpeakerGridItemComponent
          speakername="Anthony Dang"
          pic="/static/speakers/2019/Anthony_Dang.png"
          link="../2019/anthony-dang"
          talkbrief="Cache me outside - Caching Methodologies and Architectures"
        />
        <SpeakerGridItemComponent
          speakername="Cara Holland"
          pic="/static/speakers/2019/Cara_Holland.png"
          link="../2019/cara-holland"
          talkbrief="Draw UX (or how to get your visual thinking groove on)"
        />
        <SpeakerGridItemComponent
          speakername="Mark Towndrow"
          pic="/static/speakers/2019/Mark_Towndrow.png"
          link="../2019/mark-towndrow"
          talkbrief="How to be a better developer - without learning another JavaScript framework"
        />
        <SpeakerGridItemComponent
          speakername="Galiya Warrier"
          pic="/static/speakers/2019/Galiya_Warrier.png"
          link="../2019/galiya-warrier"
          talkbrief="Deep Learning in the world of little ponies"
        />
        <SpeakerGridItemComponent
          speakername="Robin Ninan"
          pic="/static/speakers/2019/Robin_Ninan.png"
          link="../2019/robin-ninan"
          talkbrief="Ditching the test pyramid in a microservices era"
        />
        <SpeakerGridItemComponent
          speakername="Ian Johnson"
          pic="/static/speakers/2019/Ian_Johnson.png"
          link="../2019/ian-johnson"
          talkbrief="Reasonable Code"
        />
        <SpeakerGridItemComponent
          speakername="Samathy Barratt"
          pic="/static/speakers/2019/Samathy_Barratt.png"
          link="../2019/samathy-barratt"
          talkbrief="This is a talk about Nothing"
        />
        <SpeakerGridItemComponent
          speakername="Ian Cooper"
          pic="/static/speakers/2019/Ian_Cooper.png"
          link="../2019/ian-cooper"
          talkbrief="How to Escape The Distributed Monolith"
        />
        <SpeakerGridItemComponent
          speakername="Helen Joy"
          pic="/static/speakers/2019/Helen_Joy.png"
          link="../2019/helen-joy"
          talkbrief="Whose Design is it Anyway?"
        />
        <SpeakerGridItemComponent
          speakername="Joel Hammond Turner"
          pic="/static/speakers/2019/Joel_Hammond-Turner.jpg"
          link="../2019/joel-hammond-turner"
          talkbrief="You're the Tech Lead - *you* fix it!"
        />
        <SpeakerGridItemComponent
          speakername="Zac Braddy"
          pic="/static/speakers/2019/Zac_Braddy.png"
          link="../2019/zac-braddy"
          talkbrief="All the mistakes I've made trying to implement Microservices"
        />
        <SpeakerGridItemComponent
          speakername="Neil Oconnor"
          pic="/static/speakers/2019/Neil_OConnor.png"
          link="../2019/neil-oconnor"
          talkbrief="CTO secrets: How to get the best companies fighting to hire you"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
          pic="/static/speakers/2019/Simon_Painter.png"
          link="../2019/simon-painter"
          talkbrief="Hacking C#: Development for the Truly Lazy"
        />
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }

          .grid-container {
            text-align: center;
          }

          .speaker-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      </style>
    </Layout>
  );
}
