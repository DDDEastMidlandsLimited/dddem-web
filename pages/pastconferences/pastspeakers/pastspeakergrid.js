import React from 'react';
import Layout from '../../../components/Layout';
import theme from '../../../theme/theme';
import Header from '../../../components/Header';
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
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/dylan-beattie"
            title="Link to Information About Dylan"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Dylan_Beattie.jpg"
              alt="Picture of Dylan Beattie"
            />
          </a>
        </article>
      </section>
      <section className="speaker-grid">
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/matt-brunt"
            title="Link to Information About Matt"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Matt_Brunt.png"
              alt="Picture of Matt Brunt"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/jessica-salisbury"
            title="Link to Information About Jess"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Jessica_Salisbury.png"
              alt="Picture of Jessica Salisbury"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/anthony-dang"
            title="Link to Information About Anthony"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Anthony_Dang.png"
              alt="Picture of Anthony Dang"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/cara-holland"
            title="Link to Information About Cara"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Cara_Holland.png"
              alt="Picture of Cara Holland"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/mark-towndrow"
            title="Link to Information About Mark"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Mark_Towndrow.png"
              alt="Picture of Mark Towndrow"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/galiya-warrier"
            title="Link to Information About Galiya"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Galiya_Warrier.png"
              alt="Picture of Galiya Warrier"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/robin-ninan"
            title="Link to Information About Robin"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Robin_Ninan.png"
              alt="Picture of Robin Ninan"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/ian-johnson"
            title="Link to Information About Ian"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Ian_Johnson.png"
              alt="Picture of Ian Johnson"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/samathy-barratt"
            title="Link to Information About Samathy"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Samathy_Barratt.png"
              alt="Picture of Samathy Barratt"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/ian-cooper"
            title="Link to Information About Ian"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Ian_Cooper.png"
              alt="Picture of Ian Cooper"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/helen-joy"
            title="Link to Information About Helen"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Helen_Joy.png"
              alt="Picture of Helen Joy"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/joel-hammond-turner"
            title="Link to Information About Joel"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Joel_Hammond-Turner.jpg"
              alt="Picture of Joel Hammond-Turner"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/zac-braddy"
            title="Link to Information About Zac"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Zac_Braddy.png"
              alt="Picture of Zac Braddy"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/neil-oconnor"
            title="Link to Information About Neil"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Neil_OConnor.png"
              alt="Picture of Neil O'Connor"
            />
          </a>
        </article>
        <article className="speaker-grid-item">
          <a
            tabIndex="0"
            href="../2019/simon-painter"
            title="Link to Information About Simon"
          >
            <img
              className="speaker-image"
              src="/static/speakers/2019/Simon_Painter.png"
              alt="Picture of Simon Painter"
            />
          </a>
        </article>
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

          .speaker-image {
            width: 175px;
            height: 175px;
            margin: 5px;
          }

          a .speaker-image:hover {
            filter: drop-shadow(5px 5px 5px rgb(26 125 135 / 0.75));
          }

          .speaker-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }

          .speaker-grid-item {
            min-width: 180px;
            height: 180px;
            overflow: hidden;
          }

          .hover-pop {
            width: 175px;
            background-color: pink;
            float: left;
          }
        `}
      </style>
    </Layout>
  );
}
