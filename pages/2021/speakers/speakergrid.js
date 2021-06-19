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
              title="Link to Information About Connell"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Connell_W.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../lucy-fletcher"
              title="Link to Information About Lucy"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Lucy_Fletcher.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../simon-painter"
              title="Link to Information About Simon"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Simon_Painter.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../jennifer-mackown"
              title="Link to Information About Jennifer"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Jen_Mackown.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../stephen-haunts"
              title="Link to Information About Stephen"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Stephen_Haunts.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../manu-magalhaes"
              title="Link to Information About Manu"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Manu_Magalhaes.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../james-croft"
              title="Link to Information About James"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/James_Croft.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../matt-whetton"
              title="Link to Information About Matt"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Matt_Whetton.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../ryan-yates"
              title="Link to Information About Ryan"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Ryan_Yates.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../poornima-nayar"
              title="Link to Information About Poornima"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Poornima_Nayar.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../tom-morton"
              title="Link to Information About Tom"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Tom_Morton.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../kojo-hinson"
              title="Link to Information About Kojo"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Kojo_Hinson.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../stephen-jackson"
              title="Link to Information About Stephen"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Stephen_Jackson.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../riz-akmal-khan"
              title="Link to Information About Riz"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Rizwana_Akmal_Khan.png"
              />
            </a>
          </Grid>
          <Grid item xs>
            <a
              tabIndex="0"
              href="../leke-sholuade"
              title="Link to Information About Leke"
            >
              <img
                className="speaker-image"
                src="/static/speakers/2021/Leke_Sholuade.png"
              />
            </a>
          </Grid>
        </Grid>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
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
