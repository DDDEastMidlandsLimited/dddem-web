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
        <title>Speakers 2021</title>
      </Head>
      <Header
        title={'Speakers 2021'}
        banner="/static/banners/notable.jpg"
      />

      <section>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs>
            <a
              className="speaker-link"
              tabIndex="0"
              href="../lex-lofthouse"
              title="Link to Information About Lex"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Lex_Lofthouse.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../connell-w"
              title="Link to Venue Information Page"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Connell_W.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Lucy_Fletcher.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Simon_Painter.png"
            />
          </Grid>
          {/* <Grid item xs>
                    <img
                    className='speaker-image'
                    src='/static/speakers/2021/Jen_Macown.png'
                    />
            </Grid> */}
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Stephen_Haunts.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Manu_Magalhaes.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/James_Croft.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Matt_Whetton.png"
            />
          </Grid>
          {/* <Grid item xs>
                    <img
                    className='speaker-image'
                    src='/static/speakers/2021/Ryan Yates.png'
                    />
            </Grid> */}
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Poornima_Nayar.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Tom_Morton.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Kojo_Hinson.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Stephen_Jackson.png"
            />
          </Grid>
          <Grid item xs>
            <img
              className="speaker-image"
              src="/static/speakers/2021/Leke_Sholuade.png"
            />
          </Grid>
        </Grid>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
            padding-left: 10%;
          }
          .speaker-image {
            width: 150px;
            height: 150px;
          }

          .speaker-image:hover {
            filter: drop-shadow(5px 5px 5px rgb(26 125 135 / 0.75));
          }
        `}
      </style>
    </Layout>
  );
}
