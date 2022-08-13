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
        <h2>2021</h2>
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Tania Allard"
          pic="/static/speakers/2021/Tania_Allard.png"
          link="../pastspeakers/2021/tania-allard"
          talkbrief="KEYNOTE: Open source for fun and for profit"
        />
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Lex Lofthouse"
          pic="/static/speakers/2021/Lex_Lofthouse.png"
          link="../pastspeakers/2021/lex-lofthouse"
          talkbrief="Design for Developers"
        />
        <SpeakerGridItemComponent
          speakername="Connell"
          pic="/static/speakers/2021/Connell_W.png"
          link="../pastspeakers/2021/connell-w"
          talkbrief="Onion Architecture with DDD and CQRS"
        />
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
          pic="/static/speakers/2021/Dylan_Beattie.png"
          link="../pastspeakers/2021/dylan-beattie"
          talkbrief="There's No Such Thing As Plain Text"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
          pic="/static/speakers/2021/Simon_Painter.png"
          link="../pastspeakers/2021/simon-painter"
          talkbrief="SOLID Principles in 5 Nightmares"
        />
        <SpeakerGridItemComponent
          speakername="Steve Collins"
          pic="/static/speakers/2021/Steve_Collins.png"
          link="../pastspeakers/2021/steve-collins"
          talkbrief="The [Source Code] Generation Game"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Haunts"
          pic="/static/speakers/2021/Stephen_Haunts.png"
          link="../pastspeakers/2021/stephen-haunts"
          talkbrief="Hacking Humans"
        />
        <SpeakerGridItemComponent
          speakername="Manu Magalhaes"
          pic="/static/speakers/2021/Manu_Magalhaes.png"
          link="../pastspeakers/2021/manu-magalhaes"
          talkbrief="Nitty-Gitty: Master Git from the Inside"
        />
        <SpeakerGridItemComponent
          speakername="James Croft"
          pic="/static/speakers/2021/James_Croft.png"
          link="../pastspeakers/2021/james-croft"
          talkbrief="Should you write UI tests?"
        />
        <SpeakerGridItemComponent
          speakername="Matt Whetton"
          pic="/static/speakers/2021/Matt_Whetton.png"
          link="../pastspeakers/2021/matt-whetton"
          talkbrief="We need to talk about technical debt"
        />
        <SpeakerGridItemComponent
          speakername="Clifford Agius"
          pic="/static/speakers/2021/Clifford_Agius.png"
          link="../pastspeakers/2021/clifford-agius"
          talkbrief="3D printed Bionic Hand a little IOT and a Xamarin Mobile App"
        />
        <SpeakerGridItemComponent
          speakername="Poornima Nayar"
          pic="/static/speakers/2021/Poornima_Nayar.png"
          link="../pastspeakers/2021/poornima-nayar"
          talkbrief="REST, GraphQL and gRPC : A Comparison"
        />
        <SpeakerGridItemComponent
          speakername="Tom Morton"
          pic="/static/speakers/2021/Tom_Morton.png"
          link="../pastspeakers/2021/tom-morton"
          talkbrief="Open Banking vs. DeFi; The technological future of finance?"
        />
        <SpeakerGridItemComponent
          speakername="Kojo Hinson"
          pic="/static/speakers/2021/Kojo_Hinson.png"
          link="../pastspeakers/2021/kojo-hinson"
          talkbrief="Embracing Skynet - An exploration of GPT-3 and its potential applications"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Jackson"
          pic="/static/speakers/2021/Stephen_Jackson.png"
          link="../pastspeakers/2021/stephen-jackson"
          talkbrief="Senior By Default"
        />
        <SpeakerGridItemComponent
          speakername="Rizwana Akmal Khan"
          pic="/static/speakers/2021/Rizwana_Akmal_Khan.png"
          link="../pastspeakers/2021/riz-akmal-khan"
          talkbrief="Good Writers Become Better Developers"
        />
        <SpeakerGridItemComponent
          speakername="Leke Sholuade"
          pic="/static/speakers/2021/Leke_Sholuade.png"
          link="../pastspeakers/2021/leke-sholuade"
          talkbrief="Why do we need a Black Valley"
        />
        <SpeakerGridItemComponent
          speakername="Jennifer Mackown"
          pic="/static/speakers/2021/Jen_Mackown.png"
          link="../pastspeakers/2021/jennifer-mackown"
          talkbrief="How to ruin kid's games with machine learning"
        />
      </section>
      <section>
        <h2>2019</h2>
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
          pic="/static/speakers/2019/Dylan_Beattie.jpg"
          link="../pastspeakers/2019/dylan-beattie"
          talkbrief="The Art of Code"
        />
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Matt Brunt"
          pic="/static/speakers/2019/Matt_Brunt.png"
          link="../pastspeakers/2019/matt-brunt"
          talkbrief="Think like a hacker"
        />
        <SpeakerGridItemComponent
          speakername="Jessica Salisbury"
          pic="/static/speakers/2019/Jessica_Salisbury.png"
          link="../pastspeakers/2019/jessica-salisbury"
          talkbrief="The Power of the Feedback Loop"
        />
        <SpeakerGridItemComponent
          speakername="Anthony Dang"
          pic="/static/speakers/2019/Anthony_Dang.png"
          link="../pastspeakers/2019/anthony-dang"
          talkbrief="Cache me outside - Caching Methodologies and Architectures"
        />
        <SpeakerGridItemComponent
          speakername="Cara Holland"
          pic="/static/speakers/2019/Cara_Holland.png"
          link="../pastspeakers/2019/cara-holland"
          talkbrief="Draw UX (or how to get your visual thinking groove on)"
        />
        <SpeakerGridItemComponent
          speakername="Mark Towndrow"
          pic="/static/speakers/2019/Mark_Towndrow.png"
          link="../pastspeakers/2019/mark-towndrow"
          talkbrief="How to be a better developer - without learning another JavaScript framework"
        />
        <SpeakerGridItemComponent
          speakername="Galiya Warrier"
          pic="/static/speakers/2019/Galiya_Warrier.png"
          link="../pastspeakers/2019/galiya-warrier"
          talkbrief="Deep Learning in the world of little ponies"
        />
        <SpeakerGridItemComponent
          speakername="Robin Ninan"
          pic="/static/speakers/2019/Robin_Ninan.png"
          link="../pastspeakers/2019/robin-ninan"
          talkbrief="Ditching the test pyramid in a microservices era"
        />
        <SpeakerGridItemComponent
          speakername="Ian Johnson"
          pic="/static/speakers/2019/Ian_Johnson.png"
          link="../pastspeakers/2019/ian-johnson"
          talkbrief="Reasonable Code"
        />
        <SpeakerGridItemComponent
          speakername="Samathy Barratt"
          pic="/static/speakers/2019/Samathy_Barratt.png"
          link="../pastspeakers/2019/samathy-barratt"
          talkbrief="This is a talk about Nothing"
        />
        <SpeakerGridItemComponent
          speakername="Ian Cooper"
          pic="/static/speakers/2019/Ian_Cooper.png"
          link="../pastspeakers/2019/ian-cooper"
          talkbrief="How to Escape The Distributed Monolith"
        />
        <SpeakerGridItemComponent
          speakername="Helen Joy"
          pic="/static/speakers/2019/Helen_Joy.png"
          link="../pastspeakers/2019/helen-joy"
          talkbrief="Whose Design is it Anyway?"
        />
        <SpeakerGridItemComponent
          speakername="Joel Hammond Turner"
          pic="/static/speakers/2019/Joel_Hammond-Turner.jpg"
          link="../pastspeakers/2019/joel-hammond-turner"
          talkbrief="You're the Tech Lead - *you* fix it!"
        />
        <SpeakerGridItemComponent
          speakername="Zac Braddy"
          pic="/static/speakers/2019/Zac_Braddy.png"
          link="../pastspeakers/2019/zac-braddy"
          talkbrief="All the mistakes I've made trying to implement Microservices"
        />
        <SpeakerGridItemComponent
          speakername="Neil Oconnor"
          pic="/static/speakers/2019/Neil_OConnor.png"
          link="../pastspeakers/2019/neil-oconnor"
          talkbrief="CTO secrets: How to get the best companies fighting to hire you"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
          pic="/static/speakers/2019/Simon_Painter.png"
          link="../pastspeakers/2019/simon-painter"
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
