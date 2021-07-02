import React from 'react';
import Layout from '../../../components/Layout';
import theme from '../../../theme/theme';
import Header from '../../../components/Header';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';

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
        <div className="grid-container">
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Dylan_Beattie.png"
                alt="Picture of Dylan Beattie"
              />
            </Grid>
          </Grid>
        </div>
      </section>
      <section>
        <div className="grid-container">
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Matt_Brunt.png"
                alt="Picture of Matt Brunt"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Jessica_Salisbury.png"
                alt="Picture of Jessica Salisbury"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Anthony_Dang.png"
                alt="Picture of Anthony Dang"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Cara_Holland.png"
                alt="Picture of Cara Holland"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Mark_Towndrow.png"
                alt="Picture of Mark Towndrow"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Galiya_Warrier.png"
                alt="Picture of Galiya Warrier"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Robin_Ninan.png"
                alt="Picture of Robin Ninan"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Ian_Johnson.png"
                alt="Picture of Ian Johnson"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Samathy_Barratt.png"
                alt="Picture of Samathy Barratt"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Ian_Cooper.png"
                alt="Picture of Ian Cooper"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Helen_Joy.png"
                alt="Picture of Helen Joy"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Joel_Hammond-Turner.png"
                alt="Picture of Joel Hammond-Turner"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Zac_Braddy.png"
                alt="Picture of Zac Braddy"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Neil_OConnor.png"
                alt="Picture of Neil O'Connor"
              />
            </Grid>
            <Grid item xs>
              <img
                className="speaker-image"
                src="/static/speakers/2019/Simon_Painter.png"
                alt="Picture of Simon Painter"
              />
            </Grid>
          </Grid>
        </div>
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
            width: 150px;
            height: 150px;
          }

          a .speaker-image:hover {
            filter: drop-shadow(5px 5px 5px rgb(26 125 135 / 0.75));
          }
        `}
      </style>
    </Layout>
  );
}
