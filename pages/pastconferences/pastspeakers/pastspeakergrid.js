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
        banner="/static/banners/speakers.jpg"
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
<<<<<<< HEAD
          pic="/static/speakers/2021/Tania_Allard.png"
=======
          pic="/static/speakers/2021/Tania_A.jpg"
>>>>>>> main
          link="../2021/tania-allard"
          talkbrief="KEYNOTE: Open source for fun and for profit"
        />
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Lex Lofthouse"
<<<<<<< HEAD
          pic="/static/speakers/2021/Lex_Lofthouse.png"
=======
          pic="/static/speakers/2021/Lex_L.jpg"
>>>>>>> main
          link="../2021/lex-lofthouse"
          talkbrief="Design for Developers"
        />
        <SpeakerGridItemComponent
          speakername="Connell"
<<<<<<< HEAD
          pic="/static/speakers/2021/Connell_W.png"
=======
          pic="/static/speakers/2021/Connell_W.jpg"
>>>>>>> main
          link="../2021/connell-w"
          talkbrief="Onion Architecture with DDD and CQRS"
        />
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
<<<<<<< HEAD
          pic="/static/speakers/2021/Dylan_Beattie.png"
=======
          pic="/static/speakers/2021/Dylan_B.jpg"
>>>>>>> main
          link="../2021/dylan-beattie"
          talkbrief="There's No Such Thing As Plain Text"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
<<<<<<< HEAD
          pic="/static/speakers/2021/Simon_Painter.png"
=======
          pic="/static/speakers/2021/Simon_P.jpg"
>>>>>>> main
          link="../2021/simon-painter"
          talkbrief="SOLID Principles in 5 Nightmares"
        />
        <SpeakerGridItemComponent
          speakername="Steve Collins"
<<<<<<< HEAD
          pic="/static/speakers/2021/Steve_Collins.png"
=======
          pic="/static/speakers/2021/Steve_C.jpg"
>>>>>>> main
          link="../2021/steve-collins"
          talkbrief="The [Source Code] Generation Game"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Haunts"
<<<<<<< HEAD
          pic="/static/speakers/2021/Stephen_Haunts.png"
=======
          pic="/static/speakers/2021/Stephen_H.jpg"
>>>>>>> main
          link="../2021/stephen-haunts"
          talkbrief="Hacking Humans"
        />
        <SpeakerGridItemComponent
          speakername="Manu Magalhaes"
<<<<<<< HEAD
          pic="/static/speakers/2021/Manu_Magalhaes.png"
=======
          pic="/static/speakers/2021/Manu_M.jpg"
>>>>>>> main
          link="../2021/manu-magalhaes"
          talkbrief="Nitty-Gitty: Master Git from the Inside"
        />
        <SpeakerGridItemComponent
          speakername="James Croft"
<<<<<<< HEAD
          pic="/static/speakers/2021/James_Croft.png"
=======
          pic="/static/speakers/2021/James_C.jpg"
>>>>>>> main
          link="../2021/james-croft"
          talkbrief="Should you write UI tests?"
        />
        <SpeakerGridItemComponent
          speakername="Matt Whetton"
<<<<<<< HEAD
          pic="/static/speakers/2021/Matt_Whetton.png"
=======
          pic="/static/speakers/2021/Matt_W.jpg"
>>>>>>> main
          link="../2021/matt-whetton"
          talkbrief="We need to talk about technical debt"
        />
        <SpeakerGridItemComponent
          speakername="Clifford Agius"
<<<<<<< HEAD
          pic="/static/speakers/2021/Clifford_Agius.png"
=======
          pic="/static/speakers/2021/Clifford_A.jpg"
>>>>>>> main
          link="../2021/clifford-agius"
          talkbrief="3D printed Bionic Hand a little IOT and a Xamarin Mobile App"
        />
        <SpeakerGridItemComponent
          speakername="Poornima Nayar"
<<<<<<< HEAD
          pic="/static/speakers/2021/Poornima_Nayar.png"
=======
          pic="/static/speakers/2021/Poornima_N.jpg"
>>>>>>> main
          link="../2021/poornima-nayar"
          talkbrief="REST, GraphQL and gRPC : A Comparison"
        />
        <SpeakerGridItemComponent
          speakername="Tom Morton"
<<<<<<< HEAD
          pic="/static/speakers/2021/Tom_Morton.png"
=======
          pic="/static/speakers/2021/Tom_M.jpg"
>>>>>>> main
          link="../2021/tom-morton"
          talkbrief="Open Banking vs. DeFi; The technological future of finance?"
        />
        <SpeakerGridItemComponent
          speakername="Kojo Hinson"
<<<<<<< HEAD
          pic="/static/speakers/2021/Kojo_Hinson.png"
=======
          pic="/static/speakers/2021/Kojo_H.jpg"
>>>>>>> main
          link="../2021/kojo-hinson"
          talkbrief="Embracing Skynet - An exploration of GPT-3 and its potential applications"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Jackson"
<<<<<<< HEAD
          pic="/static/speakers/2021/Stephen_Jackson.png"
=======
          pic="/static/speakers/2021/Stephen_J.jpg"
>>>>>>> main
          link="../2021/stephen-jackson"
          talkbrief="Senior By Default"
        />
        <SpeakerGridItemComponent
          speakername="Rizwana Akmal Khan"
<<<<<<< HEAD
          pic="/static/speakers/2021/Rizwana_Akmal_Khan.png"
=======
          pic="/static/speakers/2021/Rizwana_A.jpg"
>>>>>>> main
          link="../2021/riz-akmal-khan"
          talkbrief="Good Writers Become Better Developers"
        />
        <SpeakerGridItemComponent
          speakername="Leke Sholuade"
<<<<<<< HEAD
          pic="/static/speakers/2021/Leke_Sholuade.png"
=======
          pic="/static/speakers/2021/Leke_S.jpg"
>>>>>>> main
          link="../2021/leke-sholuade"
          talkbrief="Why do we need a Black Valley"
        />
        <SpeakerGridItemComponent
          speakername="Jennifer Mackown"
<<<<<<< HEAD
          pic="/static/speakers/2021/Jen_Mackown.png"
=======
          pic="/static/speakers/2021/Jen_M.jpg"
>>>>>>> main
          link="../2021/jennifer-mackown"
          talkbrief="How to ruin kid's games with machine learning"
        />
      </section>
      <section>
        <h2>2019</h2>
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
<<<<<<< HEAD
          pic="/static/speakers/2019/Dylan_Beattie.png"
=======
          pic="/static/speakers/2019/Dylan_B.jpg"
>>>>>>> main
          link="../2019/dylan-beattie"
          talkbrief="The Art of Code"
        />
      </section>
      <section className="speaker-grid">
        <SpeakerGridItemComponent
          speakername="Matt Brunt"
<<<<<<< HEAD
          pic="/static/speakers/2019/Matt_Brunt.png"
=======
          pic="/static/speakers/2019/Matt_B.jpg"
>>>>>>> main
          link="../2019/matt-brunt"
          talkbrief="Think like a hacker"
        />
        <SpeakerGridItemComponent
          speakername="Jessica Salisbury"
<<<<<<< HEAD
          pic="/static/speakers/2019/Jessica_Salisbury.png"
=======
          pic="/static/speakers/2019/Jessica_S.jpg"
>>>>>>> main
          link="../2019/jessica-salisbury"
          talkbrief="The Power of the Feedback Loop"
        />
        <SpeakerGridItemComponent
          speakername="Anthony Dang"
<<<<<<< HEAD
          pic="/static/speakers/2019/Anthony_Dang.png"
=======
          pic="/static/speakers/2019/Anthony_D.jpg"
>>>>>>> main
          link="../2019/anthony-dang"
          talkbrief="Cache me outside - Caching Methodologies and Architectures"
        />
        <SpeakerGridItemComponent
          speakername="Cara Holland"
<<<<<<< HEAD
          pic="/static/speakers/2019/Cara_Holland.png"
=======
          pic="/static/speakers/2019/Cara_H.jpg"
>>>>>>> main
          link="../2019/cara-holland"
          talkbrief="Draw UX (or how to get your visual thinking groove on)"
        />
        <SpeakerGridItemComponent
          speakername="Mark Towndrow"
<<<<<<< HEAD
          pic="/static/speakers/2019/Mark_Towndrow.png"
=======
          pic="/static/speakers/2019/Mark_T.jpg"
>>>>>>> main
          link="../2019/mark-towndrow"
          talkbrief="How to be a better developer - without learning another JavaScript framework"
        />
        <SpeakerGridItemComponent
          speakername="Galiya Warrier"
<<<<<<< HEAD
          pic="/static/speakers/2019/Galiya_Warrier.png"
=======
          pic="/static/speakers/2019/Galiya_W.jpg"
>>>>>>> main
          link="../2019/galiya-warrier"
          talkbrief="Deep Learning in the world of little ponies"
        />
        <SpeakerGridItemComponent
          speakername="Robin Ninan"
<<<<<<< HEAD
          pic="/static/speakers/2019/Robin_Ninan.png"
=======
          pic="/static/speakers/2019/Robin_N.jpg"
>>>>>>> main
          link="../2019/robin-ninan"
          talkbrief="Ditching the test pyramid in a microservices era"
        />
        <SpeakerGridItemComponent
          speakername="Ian Johnson"
<<<<<<< HEAD
          pic="/static/speakers/2019/Ian_Johnson.png"
=======
          pic="/static/speakers/2019/Ian_J.jpg"
>>>>>>> main
          link="../2019/ian-johnson"
          talkbrief="Reasonable Code"
        />
        <SpeakerGridItemComponent
          speakername="Samathy Barratt"
<<<<<<< HEAD
          pic="/static/speakers/2019/Samathy_Barratt.png"
=======
          pic="/static/speakers/2019/Samathy_B.jpg"
>>>>>>> main
          link="../2019/samathy-barratt"
          talkbrief="This is a talk about Nothing"
        />
        <SpeakerGridItemComponent
          speakername="Ian Cooper"
<<<<<<< HEAD
          pic="/static/speakers/2019/Ian_Cooper.png"
=======
          pic="/static/speakers/2019/Ian_C.jpg"
>>>>>>> main
          link="../2019/ian-cooper"
          talkbrief="How to Escape The Distributed Monolith"
        />
        <SpeakerGridItemComponent
          speakername="Helen Joy"
<<<<<<< HEAD
          pic="/static/speakers/2019/Helen_Joy.png"
=======
          pic="/static/speakers/2019/Helen_J.jpg"
>>>>>>> main
          link="../2019/helen-joy"
          talkbrief="Whose Design is it Anyway?"
        />
        <SpeakerGridItemComponent
          speakername="Joel Hammond Turner"
<<<<<<< HEAD
          pic="/static/speakers/2019/Joel_Hammond-Turner.png"
=======
          pic="/static/speakers/2019/Joel_HT.jpg"
>>>>>>> main
          link="../2019/joel-hammond-turner"
          talkbrief="You're the Tech Lead - *you* fix it!"
        />
        <SpeakerGridItemComponent
          speakername="Zac Braddy"
<<<<<<< HEAD
          pic="/static/speakers/2019/Zac_Braddy.png"
=======
          pic="/static/speakers/2019/Zac_B.jpg"
>>>>>>> main
          link="../2019/zac-braddy"
          talkbrief="All the mistakes I've made trying to implement Microservices"
        />
        <SpeakerGridItemComponent
          speakername="Neil Oconnor"
<<<<<<< HEAD
          pic="/static/speakers/2019/Neil_OConnor.png"
=======
          pic="/static/speakers/2019/Neil_OC.jpg"
>>>>>>> main
          link="../2019/neil-oconnor"
          talkbrief="CTO secrets: How to get the best companies fighting to hire you"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
<<<<<<< HEAD
          pic="/static/speakers/2019/Simon_Painter.png"
=======
          pic="/static/speakers/2019/Simon_P.jpg"
>>>>>>> main
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
