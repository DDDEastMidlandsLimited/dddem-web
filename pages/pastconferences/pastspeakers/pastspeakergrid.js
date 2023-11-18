import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import SpeakerGridItemComponent from '../../../components/speakers/speakergriditem';
import Head from 'next/head';

export default function PastSpeakers() {
  return (
    <Layout>
      <Head>
        <title>Past Speakers</title>
      </Head>
      <Header
        title={'Past Speakers'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="content-section">
        <p>
          Click on the images of our wonderful speakers to find out
          more about them and what they will be talking about.
        </p>
      </section>

      <section className="content-section">
        <h2>2023</h2>
      </section>

      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Matt Brunt"
          pic="/static/speakers/2023/Matt_B.jpg"
          link="2023/matt-brunt"
          talkbrief="KEYNOTE: Dungeons, Dragons & Developers"
        />
      </section>

      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Soumaya Erradi"
          pic="/static/speakers/2023/Soumaya_E.jpg"
          link="2023/soumaya-erradi"
          talkbrief="Evergreen skills for software developers"
        />
        <SpeakerGridItemComponent
          speakername="Marcus Noble"
          pic="/static/speakers/2023/Marcus_N.jpg"
          link="2023/marcus-noble"
          talkbrief="Managing Kubernetes without losing your cool"
        />
        <SpeakerGridItemComponent
          speakername="Matt Hunt"
          pic="/static/speakers/2023/Matt_H.jpg"
          link="2023/matt-hunt"
          talkbrief="Microservice Mistakes I Made and Survived"
        />
        <SpeakerGridItemComponent
          speakername="Eli Holderness"
          pic="/static/speakers/2023/Eli_H.jpg"
          link="2023/eli-holderness"
          talkbrief="You Shall Not Password: Modern Authentication for Web Apps"
        />
        <SpeakerGridItemComponent
          speakername="Martyn Kilbryde"
          pic="/static/speakers/2023/Martyn_K.jpg"
          link="2023/martyn-kilbryde"
          talkbrief="The Art of the Bad Code Review"
        />
        <SpeakerGridItemComponent
          speakername="Dan Clarke"
          pic="/static/speakers/2023/Dan_C.jpg"
          link="2023/dan-clarke"
          talkbrief="Git - Under the Covers"
        />
        <SpeakerGridItemComponent
          speakername="Jamie Tanna"
          pic="/static/speakers/2023/Jamie_T.jpg"
          link="2023/jamie-tanna"
          talkbrief="This talk could've been a blog post"
        />
        <SpeakerGridItemComponent
          speakername="Gosia Borzęcka"
          pic="/static/speakers/2023/Gosia_B.jpg"
          link="2023/gosia-borzecka"
          talkbrief="Don't panic - AI will not take your job"
        />
        <SpeakerGridItemComponent
          speakername="Ashley Smith"
          pic="/static/speakers/2023/Ashley_S.jpg"
          link="2023/ashley-smith"
          talkbrief="Don't go chasing waterfalls"
        />
        <SpeakerGridItemComponent
          speakername="Paul Bailey"
          pic="/static/speakers/2023/Paul_B.jpg"
          link="2023/paul-bailey"
          talkbrief="How to create the conditions where happy people do their best work"
        />
        <SpeakerGridItemComponent
          speakername="Marc Steele"
          pic="/static/speakers/2023/Marc_S.jpg"
          link="2023/marc-steele"
          talkbrief="Hacking Your Home Network from a TV Broadcast"
        />
        <SpeakerGridItemComponent
          speakername="Connell Sharp"
          pic="/static/speakers/2023/Connell_S.jpg"
          link="2023/connell-sharp"
          talkbrief="Good Microservice Boundaries"
        />
        <SpeakerGridItemComponent
          speakername="Rachel Breeze"
          pic="/static/speakers/2023/Rachel_B.jpg"
          link="2023/rachel-breeze"
          talkbrief="Accessibility: Building and Deploying Accessible sites"
        />
        <SpeakerGridItemComponent
          speakername="Shaun Lawrence"
          pic="/static/speakers/2023/Shaun_L.jpg"
          link="2023/shaun-lawrence"
          talkbrief="Choose your own adventure"
        />
        <SpeakerGridItemComponent
          speakername="Sean Farmar"
          pic="/static/speakers/2023/Sean_F.jpg"
          link="2023/sean-farmar"
          talkbrief="Choose your own adventure"
        />
        <SpeakerGridItemComponent
          speakername="Poornima Nayar"
          pic="/static/speakers/2023/Poornima_N.jpg"
          link="2023/poornima-nayar"
          talkbrief="Minimal APIs in .NET"
        />
        <SpeakerGridItemComponent
          speakername="Mark Goodwin"
          pic="/static/speakers/2023/Mark_G.jpg"
          link="2023/mark-goodwin"
          talkbrief="Building Robots for Complete Beginners"
        />
      </section>

      <section className="content-section">
        <h2>2021</h2>
      </section>

      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Tania Allard"
          pic="/static/speakers/2021/Tania_A.jpg"
          link="2021/tania-allard"
          talkbrief="KEYNOTE: Open source for fun and for profit"
        />
      </section>

      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Lex Lofthouse"
          pic="/static/speakers/2021/Lex_L.jpg"
          link="2021/lex-lofthouse"
          talkbrief="Design for Developers"
        />
        <SpeakerGridItemComponent
          speakername="Connell Sharp"
          pic="/static/speakers/2021/Connell.jpg"
          link="2021/connell-sharp"
          talkbrief="Onion Architecture with DDD and CQRS"
        />
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
          pic="/static/speakers/2021/Dylan_B.jpg"
          link="2021/dylan-beattie"
          talkbrief="There's No Such Thing As Plain Text"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
          pic="/static/speakers/2021/Simon_P.jpg"
          link="2021/simon-painter"
          talkbrief="SOLID Principles in 5 Nightmares"
        />
        <SpeakerGridItemComponent
          speakername="Steve Collins"
          pic="/static/speakers/2021/Steve_C.jpg"
          link="2021/steve-collins"
          talkbrief="The [Source Code] Generation Game"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Haunts"
          pic="/static/speakers/2021/Stephen_H.jpg"
          link="2021/stephen-haunts"
          talkbrief="Hacking Humans"
        />
        <SpeakerGridItemComponent
          speakername="Manu Magalhaes"
          pic="/static/speakers/2021/Manu_M.jpg"
          link="2021/manu-magalhaes"
          talkbrief="Nitty-Gitty: Master Git from the Inside"
        />
        <SpeakerGridItemComponent
          speakername="James Croft"
          pic="/static/speakers/2021/James_C.jpg"
          link="2021/james-croft"
          talkbrief="Should you write UI tests?"
        />
        <SpeakerGridItemComponent
          speakername="Matt Whetton"
          pic="/static/speakers/2021/Matt_W.jpg"
          link="2021/matt-whetton"
          talkbrief="We need to talk about technical debt"
        />
        <SpeakerGridItemComponent
          speakername="Clifford Agius"
          pic="/static/speakers/2021/Clifford_A.jpg"
          link="2021/clifford-agius"
          talkbrief="3D printed Bionic Hand a little IOT and a Xamarin Mobile App"
        />
        <SpeakerGridItemComponent
          speakername="Poornima Nayar"
          pic="/static/speakers/2021/Poornima_N.jpg"
          link="2021/poornima-nayar"
          talkbrief="REST, GraphQL and gRPC : A Comparison"
        />
        <SpeakerGridItemComponent
          speakername="Tom Morton"
          pic="/static/speakers/2021/Tom_M.jpg"
          link="2021/tom-morton"
          talkbrief="Open Banking vs. DeFi; The technological future of finance?"
        />
        <SpeakerGridItemComponent
          speakername="Kojo Hinson"
          pic="/static/speakers/2021/Kojo_H.jpg"
          link="2021/kojo-hinson"
          talkbrief="Embracing Skynet - An exploration of GPT-3 and its potential applications"
        />
        <SpeakerGridItemComponent
          speakername="Stephen Jackson"
          pic="/static/speakers/2021/Stephen_J.jpg"
          link="2021/stephen-jackson"
          talkbrief="Senior By Default"
        />
        <SpeakerGridItemComponent
          speakername="Rizwana Akmal Khan"
          pic="/static/speakers/2021/Rizwana_A.jpg"
          link="2021/riz-akmal-khan"
          talkbrief="Good Writers Become Better Developers"
        />
        <SpeakerGridItemComponent
          speakername="Leke Sholuade"
          pic="/static/speakers/2021/Leke_S.jpg"
          link="2021/leke-sholuade"
          talkbrief="Why do we need a Black Valley"
        />
        <SpeakerGridItemComponent
          speakername="Jennifer Mackown"
          pic="/static/speakers/2021/Jen_M.jpg"
          link="2021/jennifer-mackown"
          talkbrief="How to ruin kid's games with machine learning"
        />
      </section>

      <section className="content-section">
        <h2>2019</h2>
      </section>

      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Dylan Beattie"
          pic="/static/speakers/2019/Dylan_B.jpg"
          link="2019/dylan-beattie"
          talkbrief="The Art of Code"
        />
      </section>

      <section className="speaker-grid content-section">
        <SpeakerGridItemComponent
          speakername="Matt Brunt"
          pic="/static/speakers/2019/Matt_B.jpg"
          link="2019/matt-brunt"
          talkbrief="Think like a hacker"
        />
        <SpeakerGridItemComponent
          speakername="Jessica Salisbury"
          pic="/static/speakers/2019/Jessica_S.jpg"
          link="2019/jessica-salisbury"
          talkbrief="The Power of the Feedback Loop"
        />
        <SpeakerGridItemComponent
          speakername="Anthony Dang"
          pic="/static/speakers/2019/Anthony_D.jpg"
          link="2019/anthony-dang"
          talkbrief="Cache me outside - Caching Methodologies and Architectures"
        />
        <SpeakerGridItemComponent
          speakername="Cara Holland"
          pic="/static/speakers/2019/Cara_H.jpg"
          link="2019/cara-holland"
          talkbrief="Draw UX (or how to get your visual thinking groove on)"
        />
        <SpeakerGridItemComponent
          speakername="Mark Towndrow"
          pic="/static/speakers/2019/Mark_T.jpg"
          link="2019/mark-towndrow"
          talkbrief="How to be a better developer - without learning another JavaScript framework"
        />
        <SpeakerGridItemComponent
          speakername="Galiya Warrier"
          pic="/static/speakers/2019/Galiya_W.jpg"
          link="2019/galiya-warrier"
          talkbrief="Deep Learning in the world of little ponies"
        />
        <SpeakerGridItemComponent
          speakername="Robin Ninan"
          pic="/static/speakers/2019/Robin_N.jpg"
          link="2019/robin-ninan"
          talkbrief="Ditching the test pyramid in a microservices era"
        />
        <SpeakerGridItemComponent
          speakername="Ian Johnson"
          pic="/static/speakers/2019/Ian_J.jpg"
          link="2019/ian-johnson"
          talkbrief="Reasonable Code"
        />
        <SpeakerGridItemComponent
          speakername="Samathy Barratt"
          pic="/static/speakers/2019/Samathy_B.jpg"
          link="2019/samathy-barratt"
          talkbrief="This is a talk about Nothing"
        />
        <SpeakerGridItemComponent
          speakername="Ian Cooper"
          pic="/static/speakers/2019/Ian_C.jpg"
          link="2019/ian-cooper"
          talkbrief="How to Escape The Distributed Monolith"
        />
        <SpeakerGridItemComponent
          speakername="Helen Joy"
          pic="/static/speakers/2019/Helen_J.jpg"
          link="2019/helen-joy"
          talkbrief="Whose Design is it Anyway?"
        />
        <SpeakerGridItemComponent
          speakername="Joel Hammond Turner"
          pic="/static/speakers/2019/Joel_HT.jpg"
          link="2019/joel-hammond-turner"
          talkbrief="You're the Tech Lead - *you* fix it!"
        />
        <SpeakerGridItemComponent
          speakername="Zac Braddy"
          pic="/static/speakers/2019/Zac_B.jpg"
          link="2019/zac-braddy"
          talkbrief="All the mistakes I've made trying to implement Microservices"
        />
        <SpeakerGridItemComponent
          speakername="Neil Oconnor"
          pic="/static/speakers/2019/Neil_OC.jpg"
          link="2019/neil-oconnor"
          talkbrief="CTO secrets: How to get the best companies fighting to hire you"
        />
        <SpeakerGridItemComponent
          speakername="Simon Painter"
          pic="/static/speakers/2019/Simon_P.jpg"
          link="2019/simon-painter"
          talkbrief="Hacking C#: Development for the Truly Lazy"
        />
      </section>
    </Layout>
  );
}
